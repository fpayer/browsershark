if (!localStorage.isInitialized) 
{
	localStorage.isActivated = true;
	localStorage.firstUse = "False";
	localStorage.limit = 100;
	localStorage.isInitialized = false;
	localStorage.filters = '{"filter0":"All"}';
	localStorage.queue = "[]";
	localStorage.webs = "[]";
	//localStorage.paused = false;
	var notif = webkitNotifications.createNotification(
		"/images/icon.png",  // icon url - can be relative
		'Welcome to Browsershark.',  // notification title
		'Click here to run the initial config.'  // notification body text
	);
	notif.onclick = function() { chrome.tabs.create({url : "/html/options.html"}); notif.cancel();};
	notif.show();
	chrome.tabs.create({url:"/html/menu.html"});
}
/*
if(localStorage.version != VERSION)
{
	localStorage.version = VERSION;
	var notif = webkitNotifications.createNotification(
		"http://cyberexplo.it/static/img/icon.png",  // icon url - can be relative
		'Update detected.',  // notification title
		'Now at version: ' + localStorage.version + '. Click here for changelog.'  // notification body text
	);
	notif.onclick = function() { chrome.tabs.create({url : "help.html"}); notif.cancel();};
	notif.show();
}
*/
localStorage.queue = "[]";

var addQueue = function(data){
	var queue = JSON.parse(localStorage.queue);
	queue.push(data);
	while(queue.length > localStorage.limit){
		queue.shift();
	}
	localStorage.queue = JSON.stringify(queue);
};

var requests = {};

var prescreen = function(info){
	if(info.tabId == -1 || info.method == "POST"){return true;}
}

var urlFilter = function(url){
	var filters = JSON.parse(localStorage.webs);
	
	if (filters.length == 0){
		return false;
	}
	
	for (var x = 0;x<filters.length;x++){
		var filter = filters[x].replace(/\*/g, '.*').replace(/\//g, "\/")
		var regex = new RegExp(filter);
		if(regex.test(url)){
			return false
		}
	}
	return true;
}

var contentFilter = function(type){
	var filters = JSON.parse(localStorage.filters);
	
	type = type.toLowerCase();
	
	for (var key in filters){
		var filter = filters[key];
		if (filter == "All"){
			return false;
		} else if(filter == "Audio" && type.indexOf("audio") != -1){
			return false;
		} else if(filter == "Images" && type.indexOf("image") != -1){
			return false;
		} else if(filter == "Text" && type.indexOf("text") != -1){
			return false;
		} else if(filter == "Videos" && type.indexOf("video") != -1){
			return false;
		} else if(filter == "Other" && type.indexOf("audio") != -1 && type.indexOf("image") != -1 && type.indexOf("text") != -1 && type.indexOf("video") != -1){
			return false;
		}
	}
	return true;
}

chrome.webRequest.onHeadersReceived.addListener(
    function(info){
		if(localStorage.paused){return;}
        if(prescreen(info)){return;}
		if(urlFilter(info.url)){return;}
        var headerNames = ["content-type"];
		var headerCase = ["Content-Type"];
        var headerDict = {};
        for (var i=0;i<info.responseHeaders.length; i++){
            var name = info.responseHeaders[i].name;
            var value = info.responseHeaders[i].value;
            if(headerNames.indexOf(name.toLowerCase()) != -1){
                headerDict[headerCase[headerNames.indexOf(name.toLowerCase())]] = value;
            }
        }
		
		if(headerDict["Content-Type"] == undefined){
			headerDict["Content-Type"] = "Unknown";
		}
		
		if(contentFilter(headerDict["Content-Type"])){
			return;
		}
		
		var request = requests[info.requestId];
		if(!request){return;}
        request = $.extend(requests[info.requestId],headerDict);
		
		var url = request.source;
		var headers = request.requestHeaders;
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/octet-stream");
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";     
		console.log(headers, url, request, info.url);
        for (var i=0;i<headers.length;++i){
            xhr.setRequestHeader(headers[i][0],headers[i][1]);
        }
        xhr.prefix = url.split(":/")[0];
        xhr.host = url.split("/")[2];
        xhr.resource = url.split("/").splice(3).join("/");
        xhr.requestId = info.requestId;
        xhr.onreadystatechange = function() {
            //var invalid codes = [204, 205, 305]
		    if (xhr.readyState == 4){
                var res = xhr.response;
			    var blob = new Blob([res]);
			    var url = window.URL.createObjectURL(blob); 
                requests[xhr.requestId] = $.extend(requests[xhr.requestId], {
                    "protocol" : xhr.prefix, 
                    "host" : xhr.host, 
                    "resource": xhr.resource, 
                    "url" : url
                });
                addQueue(requests[info.requestId]);
				delete requests[info.requestId];
            }
	    };
		try{
			xhr.send(null);  
		}catch(err){
			return;
		}
    }, {urls:[
        "*://*/*"
        ]
    },
    ["blocking","responseHeaders"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(info){
		if(localStorage.paused){return;}
        if(prescreen(info)){return;}
		if(urlFilter(info.url)){return;}
		console.log("123");
		var headers = [];
        for (var i=0;i<info.requestHeaders.length; ++i){
            var immutable = ["user-agent", "accept-encoding", "cookie", "referer", "origin"];
            if(immutable.indexOf(info.requestHeaders[i].name.toLowerCase()) == -1){
                headers.push([info.requestHeaders[i].name, info.requestHeaders[i].value]);
            }
        }
        requests[info.requestId] = {"requestHeaders":headers, "source":info.url};
    }, {urls:[
        "*://*/*"
        ]
    },
    ["blocking","requestHeaders"]
);

chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.create({url : "/html/menu.html"});
});

function openHelp()
{
	chrome.tabs.create({url: "/html/help.html"});
}
