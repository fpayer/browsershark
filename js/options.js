var ext;
var filters;
var webs;

window.addEventListener("load", function(){
	ext = $("#ext");
	var testFilter = $("#testFilter");
    var testUrl = $("#testUrl");

    $("#clear").on("click", function(){
        localStorage.queue = "[]";   
    });
    $("#pause").on("click", function(){
        if(localStorage.paused){
            $("#pause").text("Pause");
            delete localStorage.paused;
        } else {
            $("#pause").text("Resume");
            localStorage.paused = true;
        }
    });

    if(localStorage.paused){
        $("#pause").text("Resume");
    }

    var testFilterSwap = function(){
        box = $(this);
	    if(box.attr("value") == ""){
		    box.attr("value", "Test a url filter...");
	    } else if( box.attr("value") == "Test a url filter..."){
		    box.attr("value", "");
	    }
    }

    var testUrlSwap = function(){
        box = $(this);
	    if(box.attr("value") == ""){
		    box.attr("value", "To match this url...");
	    } else if( box.attr("value") == "To match this url..."){
		    box.attr("value", "");
	    }
    }

    testFilter.on("click", testFilterSwap);
    testFilter.on("blur", testFilterSwap);
    testFilter.on("keyup", testRegex);
    testUrl.on("click", testUrlSwap);
    testUrl.on("blur", testUrlSwap);
    testUrl.on("keyup", testRegex);
    redraw();
});

var testRegex = function(){
    var regex = $("#testFilter").val();
    var url = $("#testUrl").val();
    var statusBox = $("#status-box");
    statusBox.removeClass();
    regex = regex.replace(/\*/g, '.*').replace(/\//g, "\/");
    if(regex == "Test a url filter.." || url == "To match this url..."){
        statusBox.addClass("status-box-fail");
    }
    regex = new RegExp(regex);
    if (regex.test(url)){
        statusBox.addClass("status-box-success");
    } else {
        statusBox.addClass("status-box-fail");
    }
}

var placeHolderSwap = function(){
	box = $(this);
	if(box.attr("value") == ""){
		box.attr("value", "Add a new url filter...");
	} else if( box.attr("value") == "Add a new url filter..."){
		box.attr("value", "");
	}
}

var deleteWebFilter = function(){
	var button = $(this);
	var id = button.attr("id").split("-")[1];
	webs.splice(id,1);
	localStorage.webs = JSON.stringify(webs);
	button.parent().remove();
	redraw();
}

var optClick = function() {
	var selected = $(this);
	var id = selected.parents("div").attr("id");
	var value = selected.text();
	if(id.indexOf("limit") != -1){
		localStorage[id] = value;
	} else if (id.indexOf("filter") != -1){
		id = id.split("filter")[1];
		var filters = JSON.parse(localStorage.filters);
		if(value == "Delete" && id > 0){
			delete filters["filter"+id];
		} else if (value == "Delete" && id == 0){
			if(filters["filter1"] == undefined){
				filters["filter0"] = "All";
			} else {
				delete filters["filter0"];
			}
		} else{
			filters["filter"+id] = value;
		}
		filters = collapseDict(filters);
		localStorage.filters = JSON.stringify(filters);
	} else if(id.indexOf("web") != -1){
		id = id.split("web")[1];
		if (value == "HTTP"){
			webs[id] = "http://*/*";
		} else if(value == "HTTPS"){
			webs[id] = "https://*/*";
		}
		localStorage.webs = JSON.stringify(webs);
	}
	redraw();
}

var resetNodes = function() {
	var p = $("#opts").children().first().next();
	p.text("You are currently filtering on ");
	$(".filter").remove();
	addExt();
}

var removeNode = function(id) {
	$("#filter" + id).remove();
	$("#filterBox" + id).remove();
	var save = $("#opts").children().first().next().children();
	var p = $("#opts").children().first().next();
	p.text("You are currently filtering on ");
	p.append(save);
}

var resetWebs = function() {
	$(".niceBoxContainer").remove();
	$(".web").remove();
}

var addWeb = function() {
	var id = $(".web").length;
	
	/* Creating the box */
	var parent = $("#opts");
	var child = $("<div>");
	child.addClass("niceBoxContainer");
	var input = $("<input>");
	input.attr("type", "text");
	input.attr("id", "webfilter-"+id);
	input.attr("value", "Add a new url filter...");
	input.addClass("niceBox");
	var span1 = $("<span>");
	span1.addClass("spandrop");
	span1.attr("data-dropdown", "#web"+id);
	span1.text("Presets");
	var span2 = $("<span>");
	span2.attr("id", "web-"+id);
	span2.addClass("delete");
	child.append(input).append(span1).append(span2);
	parent.append(child);
	
	/* creating the opts */
	var div = $("<div>");
	div.attr("id", "web"+id);
	div.addClass("dropdown dropdown-tip web");
	var ul = $("<ul>");
	ul.addClass("dropdown-menu");
	var values = ["HTTP", "HTTPS"];
	for (var x = 0; x<values.length;x++){
		var li = $("<li>");
		var a = $("<a>");
		a.attr("href", "#");
		a.text(values[x]);
		li.append(a);
		ul.append(li);
	}
	div.append(ul);
	$("body").append(div);
}

var addNode = function() {
	ext.remove();
	var id = $(".filter").length;
	var div = $("<div>");
	div.attr("id", "filter"+id);
	div.addClass("dropdown dropdown-tip filter");
	var ul = $("<ul>");
	ul.addClass("dropdown-menu");
	var values = ["All", "Audio", "Images", "Text", "Videos", "Other", "Delete"];
	for (var x = 0; x<values.length;x++){
		var li = $("<li>");
		var a = $("<a>");
		a.attr("href", "#");
		a.text(values[x]);
		li.append(a);
		ul.append(li);
	}
	div.append(ul);
	$("body").append(div);
	
	var span = $("<span>");
	span.attr("id", "filterBox"+id);
	span.addClass("spandrop");
	span.attr("data-dropdown", "#filter"+id);
	span.text("None");
	
	var p = $("#opts").children().first().next();
	var numFilters = $("#opts").children().first().next().find(".spandrop").length;
	
	if(numFilters != 0){
		p.append(" and ");
	}
	p.append(span);
	
	if(numFilters < 5){
		addExt();
	}
	
	var filters = JSON.parse(localStorage.filters);
	filters["filter"+id] = "None";
	localStorage.filters = JSON.stringify(filters);
}

var addExt = function() {
	ext.find("#addNew").unbind("click");
	ext.find("#addNew").on("click", function(){
		filters["filter" + $(".filter").length] = "None";
		localStorage.filters = JSON.stringify(filters);
		redraw();
	});
	$("#opts").children().first().next().append(ext);
}

var collapseDict = function(filters) {
	var organized = {};
	var counter = 0;
	for (var key in filters){
		organized["filter"+counter] = filters[key];
		counter++;
	}
	return organized;
}

var redraw = function() {
	/* limit */
	var limit = localStorage.limit || 100;
	$("#limitBox").text(limit);
	
	/* content-filters */
	filters = JSON.parse(localStorage.filters || '{"filter0":"All"}');
	localStorage.filters = JSON.stringify(filters);
	resetNodes();
	for (var key in filters){
		if (filters[key] == "All"){
			resetNodes();
			addNode();
			$("#opts").children().first().next().find(".spandrop").last().text(filters[key]);
			filters = {"filter0":"All"};
			ext.remove();
			break;
		} else {
			addNode();
			$("#opts").children().first().next().find(".spandrop").last().text(filters[key]);
		}
	}
	
	/* web filters  */
	webs = JSON.parse(localStorage.webs || "[]");
	//<= cause you always have an add new
	localStorage.webs = JSON.stringify(webs);
	resetWebs();
	for(var x = 0; x<=webs.length;x++){
		addWeb();
		$("#webfilter-"+x).attr("value", webs[x]);
	}
	/* Reattach event listeners */
	$(".niceBox").on("click", placeHolderSwap);
	$(".niceBox").on("blur", placeHolderSwap);
	$(".delete").on("click", deleteWebFilter);
	
	
	
	$(".dropdown ul li a").on("click", optClick);
	/* save to localstorage */
	localStorage.filters = JSON.stringify(filters);
	localStorage.limit = limit;
}
