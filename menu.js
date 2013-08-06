var loaded = [];
var displaying = [];
var counter = 0;

var clear = function(){
	localStorage.queue = "[]";
	$("tbody").children().remove();
}

var pauseToggle = function(){
	if(localStorage.paused){
		$("#pause").text("Pause");
		delete localStorage.paused;
	} else {
		$("#pause").text("Resume");
		localStorage.paused = true;
	}
}

var toHex = function(arr){
    var result = "";
    for (var i=0;i<arr.length;i++){
        var str = arr[i].toString(16);
        z = 8-str.length + 1;
        str = Array(z).join("") +str;
        result += str;
    }
    return result;
}

var checkConstant = function(bytes, start, stop, val){
    return bytes.substring(start,stop).indexOf(val) != -1;
}

var readField = function(bytes, start, stop){
    return bytes.substring(start,stop);
}

var checkFiletype = function(bytes){
    //In HEX
    var fileTypes = [
        [0,6,"494433", "mp3"], //mp3
        [8,16,"66747970", "mp4"], //mp4
        //[0,6,"FDFDFD", "mp3"],
        [12,20,"4A464946", "jpeg"], //Jpeg
        [8,16,"0D0A1A0A", "png"], //Png
        [0,6,"435753", "swf"], //Shockwave flash
        [0,28,"3C3F786D6C2076657273696F6E3D", "xml"], //XML Manifest
        [0,12,"474946383761", "gif"], //GIF87a
        [0,12,"474946383961", "gif"] //GIF89a
    ];
    
    for(var x =0;x<fileTypes.length;x++){
        //console.log("This field is:", readField(bytes, 12, 20));
        if (checkConstant(bytes, fileTypes[x][0], fileTypes[x][1], fileTypes[x][2])){
            return fileTypes[x][3];
        }
    }
    return undefined;
}

function tryDownload(file, url, type){
	try{
		console.log(file);
		console.log(url);
		console.log(type);
		// Create hidden download hyperlink
		var downloadFile = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
		downloadFile.href = url;
			
        downloadFile.download = file + "." + type;
        // Create mouse click event 
		var event = document.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, self, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			// Trigger mouse click event on download hyperlink
			downloadFile.dispatchEvent(event);
    }
	catch(exc){	console.log(exc);}
}

function downloadSong(file, url, type)
{
	$.ajax({
        "url": url,
		beforeSend: function ( xhr ) {
			xhr.overrideMimeType("text/plain; charset=x-user-defined");
			xhr.responseType = "arraybuffer";
	  }
    }).done(function(data){
        view = new jDataView(data);
        var length = view.byteLength;

        if (length > 100){
            length = 100;
        }

        var bytes = "";
        var bits = "";

        for (var byteCount = 0; byteCount < length; byteCount++){
            bits += view.getBytes(1, byteCount)[0].toString(2);
            Byte = toHex(view.getBytes(1,byteCount));
            if (Byte.length == 1){
                Byte = "0" + Byte;
            }
            bytes += Byte;
        }
        bytes = bytes.toUpperCase();
        testType = checkFiletype(bytes);
		
		if(testType){
			tryDownload(file, url, testType);
		} else {
			types = [
				["undefined", "bin"],
				
				["application/atom+xml", "atom"],
				["application/ecmascript", "js"],
				["application/EDI-X12", "bin"],
				["application/EDIFACT", "bin"],
				["application/json", "json"],
				["application/javascript", "js"],
				["application/octet-stream", "bin"],
				["application/ogg", "ogg"],
				["application/pdf", "pdf"],
				["application/postscript", "ps"],
				["application/rdf+xml", "rdf"],
				["application/rss+xml", "rss"],
				["application/soap+xml", "xml"],
				["application/font-woff", "woff"],
				["application/xhtml+xml", "xhtml"],
				["application/xml", "xml"],
				["application/xml-dtd", "xml"],
				["application/xop+xml", "xml"],
				["application/zip", "zip"],
				["application/gzip", "gzip"],
				["application/x-font-woff", "woff"],
			    ["application/rar", "rar"],	
			    ["application/java-vm", "class"],

				["application/vnd.oasis.opendocument.text", "odt"],
				["application/vnd.oasis.opendocument.spreadsheet", "ods"],
				["application/vnd.oasis.opendocument.presentation", "odp"],
				["application/vnd.oasis.opendocument.graphics", "odg"],
				["application/vnd.ms-excel", "xls"],
				["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
				["application/vnd.ms-powerpoint", "ppt"],
				["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"],
				["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
				["application/vnd.mozilla.xul+xml", "xul"],
				["application/vnd.google-earth.kml+xml", "kml"],
				["application/vnd.google-earth.kmz", "kmz"],
				["application/vnd.dart", "dart"],
				["application/vnd.android.package-archive", "apk"],
	            ["application/vnd.microsoft.icon", "ico"],
                ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
                ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"],

				["application/x-deb", "deb"],
				["application/x-dvi", "dvi"],
				["application/x-font-ttf", "ttf"],
				["application/x-javascript", "js"],
				["application/x-latex", "txt"],
				["application/x-mpegURL", "M3U8"],
				["application/x-rar-compressed", "rar"],
				["application/x-shockwave-flash", "swf"],
				["application/x-stuffit", "sit"],
				["application/x-tar", "tar"],
				["application/x-www-form-urlencoded", "txt"],
				["application/x-xpinstall", "xpi"],
				["application/x-pkcs12", "p12"],
				["application/x-pkcs7-certificates", "p7b"],
				["application/x-pkcs7-certreqresp", "p7c"],
				["application/x-pkcs7-mime", "p7c"],
				["application/x-pkcs7-signature", "p7s"],
				["application/x-font-woff", "woff"],
			    ["application/x-bzip2", "bz2"],
                ["application/x-gzip", "gz"],
                ["application/x-7z-compressed", "7z"],
                ["application/x-redhat-package-manager", "rpm"],
                ["application/x-msdos-program", "exe"],

				["audio/basic", "bin"],
				["audio/L16", "L16"],
				["audio/L8", "L16"],
				["audio/L20", "L16"],
				["audio/L24", "L16"],
				["audio/mp4", "m4a"],
				["audio/mpeg", "mp3"],
				["audio/ogg", "ogg"],
				["audio/vorbis", "ogg"],
				["audio/vnd.rn-realaudio", "ra"],
				["audio/vnd.wave", "wav"],
				["audio/webm", "webm"],
				["audio/x-aac", "aac"],
				["audio/x-caf", "caf"],
				
				["font/woff", "woff"],
				
				["image/gif", "gif"],
				["image/jpeg", "jpg"],
				["image/pjpeg", "jpg"],
				["image/png", "png"],
				["image/svg+xml", "svg"],
				["image/tiff", "tiff"],
				["image/icon", "ico"],
                ["image/x-xcf", "xcf"],
				["image/x-icon", "ico"],
			    ["image/x-photoshop", "psd"],

				["message/http", "txt"],
				["message/imdn+xml", "xml"],
				["message/partial", "eml"],
				["message/rfc822", "eml"],
				
				["model/example", "bin"],
				["model/iges", "igs"],
				["model/mesh", "msh"],
				["model/vrml", "wrl"],
				["model/x3d+binary", "bin"],
				["model/x3d+vrml", "vrml"],
				["model/x3d+xml", "xml"],
				
				["multipart/mixed", "txt"],
				["multipart/alternative", "txt"],
				["multipart/related", "txt"],
				["multipart/form-data", "txt"],
				["multipart/signed", "txt"],
				["multipart/encrypted", "txt"],
				
				["text/cmd", "cmd"],
				["text/css", "css"],
				["text/csv", "csv"],
				["text/html", "html"],
				["text/javascript", "js"],
				["text/plain", "txt"],
				["text/vcard", "vcf"],
				["text/xml", "xml"],
				["text/x-gwt-rpc", "txt"],
				["text/x-jquery-tmpl", "js"],
				["text/x-markdown", "md"],
			    ["text/x-java", "java"],

				["video/mpeg", "mpg"],
				["video/mp4", "mp4"],
				["video/ogg", "ogg"],
				["video/quicktime", "mp4"],
				["video/webm", "webm"],
				["video/MP2T", "ts"],
                ["video/x-matroska", "mkv"],
				["video/x-ms-wmv", "wmv"],
				["video/x-flv", "flv"],

				
				["ico", "ico"],
				["woff", "woff"],
				["flv", "flv"],
				["wmv", "wmv"],
				["csv", "csv"],
				["atom", "atom"],
				["svg", "svg"],
				["json", "json"],
				["mp3", "mp3"],
				["html", "html"],
				["gif", "gif"],
				["png", "png"],
				["jpeg", "jpg"],
				["css", "css"],
				["javascript", "js"]
				["xml", "xml"],
				["text", "txt"]
			]
			for (x=0;x<types.length;x++){
				if(type.indexOf(types[x][0]) != -1){
					tryDownload(file, url, types[x][1]);
					return;
				}
			}
		}
    });
}
	
	
	function downloadTrigger()
	{
		var rows = $("tr");
		var downloads = [ ]
		for (var x = 1; x < rows.length; x++)
		{
			if($($("tr")[x]).find("td input").prop("checked"))
			{
                var file = $($("tr")[x]).find("td")[2].innerText;
                var url = $($("tr")[x]).find("td input").attr("url");
				var type = $($("tr")[x]).find("td")[3].innerText;
				downloads.push([file, url, type]);
				$($("tr")[x]).find("td input").prop("checked", false);
			}
		}
		for(x in downloads)
		{
			downloadSong(downloads[x][0], downloads[x][1], downloads[x][2]);
		}
	}

    function analyze(){
        var rows = $("tr");
        var items = [ ];
        for (var x = 1;x<rows.length;x++){
        	if($($("tr")[x]).find("td input").prop("checked"))
			{
                var host = $($("tr")[x]).find("td")[1].innerText; 
                var file = $($("tr")[x]).find("td")[2].innerText;
                var url = $($("tr")[x]).find("td input").attr("url");
				items.push({"host":host,"name":file,"url":url});
            }
        }
        localStorage.hexview = JSON.stringify(items);
        window.location = "./hexview.html";
    }

	function htmlDecode(string)
	{
		return string.replace("&amp;", "&").replace("&quot", '"').replace("&#039;", "'").replace("&lt;", "<").replace("&gt;", ">");
	}
	
	function count()
	{
		var rows = $("tr");
		var display = $(".bottom");
		var number = 0;
		for (var x = 1; x < rows.length; x++)
		{
			if($($("tr")[x]).find("td input").prop("checked"))
				number++;
		}
		if(number == 1)
			display.html("of " + number + " item")
		else
			display.html("of " + number + " items")
		if(number>0){
			$(".button").show();
            $(".selectbar").show();
        }
		else{
			$(".button").hide();
            $(".selectbar").hide();
        }
	}
	
	function addRow(iprotocol, ihost, iresource, itype, iurl)
	{
		var tbody = $("tbody");
		var row = $("<tr>");
		var protocol = $("<td>");
		var host = $("<td>");
		var resource = $("<td>");
        var type = $("<td>");
		var selected = $("<td>");
		
		var text = document.createTextNode(iprotocol);
		protocol.append($(text));
		
		text = document.createTextNode(ihost);
		host.append($(text));
		
		text = document.createTextNode(iresource);
		resource.append($(text));
		
        text = document.createTextNode(itype);
        type.append($(text));

		checkbox = $("<input>");
		checkbox.attr("type", "checkbox");
		checkbox.attr("id", counter);
		checkbox.attr("url", iurl);
		checkbox.on("click", count);
		selected.append(checkbox);
		
		row.append(protocol);
		row.append(host);
		row.append(resource);
        row.append(type);
		row.append(selected);
		tbody.append(row);
		
		$("#play-backContainer").attr("hidden", false);
	    counter++;
    }
	
	function disableSelection(target){
		target.onselectstart=function(){return false}
		target.style.cursor = "default"
	}
	
    var binaryReader = function(url, songId){
        $.ajax({
            "url": url
        }).done(function(data){
            var view = new jDataView(data);
        });
    }

	var load = function(){
		var queue = JSON.parse(localStorage.queue);
		$.each(queue, function(index, data){
            //Not already loaded
			if (loaded.indexOf(data.url) == -1){
			    loaded.push(data.url);	
                //Handle display
                console.log(data);
                addRow(data.protocol, data.host, data.resource.substring(0,50), data["Content-Type"], data.url);
                
                var max = localStorage.limit
				
                $(".tablesorter").trigger("update", [false]);
                //while($("tr").size()-1> max){
                //    $("tr")[1].remove();
                //}


                /*                
                loaded.push(data.url);
                resources.push(data.url);

                var max = localStorage.limit;
                if(displaying.length > max){
                    while (songs.length > max){
                        displaying.shift();
                        while(songs.length < $("tr").size() -1)
                            $("tr")[1].remove();

                    }
                    //Remove from playlist somehow
                    //Playlist.removeItem($("tr")[1].children[0].id);
                    
                    if ($("tr").size() > 1)
                        
                    var save = [];
                    for(x = 0;x<songs.length;x++){
                        save.push(toDict(songs[x]));
                    }

                    localStorage.queue = JSON.stringify(save);
                }

                var audio = $("<audio>");
                audio.attr("songid", songs.length-1);
                audio.on("durationchange", function(){
                    //Still valid
                    if (audio[0].error == null){
                        var id = audio.attr("songid");
                        songs[id].duration = audio[0].duration;
				        addRow("play", song.url, song.title, song.album, song.artist, prettyTime(songs[id].duration), song.source);
                        
                        while(songs.length < $("tr").size() -1)
                            $("tr")[1].remove();

                        $.ajax({
                            "url" : song.url
                        }).done(function(data){
                            var toHex = function(arr){
                                var result = "";
                                for (var i=0;i<arr.length;i++){
                                    var str = arr[i].toString(16);

                                    z = 8-str.length + 1;
                                    str = Array(z).join("") +str;
                                    result += str;
                                }
                                return result;
                            }

                            var view = new jDataView(data);
                            var length = 500;
                                
                            var bytes = "";
                            var bits = "";

                            for (var byteCount = 0; byteCount < length; byteCount++){
                                bits += view.getBytes(1, byteCount)[0].toString(2);
                                
                                Byte = toHex(view.getBytes(1,byteCount));
                                if (Byte.length == 1){
                                    Byte = "0" + Byte;
                                }
                                bytes += Byte;
                            }


                            var checkConstant = function(start, stop, val){
                                return bytes.substring(start,stop).indexOf(val) != -1;
                            };
                            var readField = function(start, stop){
                                return bytes.substring(start,stop);
                            }

                            console.log(song);
                            var fileTypes = [[0,6,"494433", "mp3"],[8,16,"66747970", "m4a"],[0,6,"fdfdfd", "mp3"]];
           
                            var meta = {
                                "filetype" : "",
                                "version" : ""
                            }

                            var checkFiletype = function(){
                                for(var x =0;x<fileTypes.length;x++){
                                    if (checkConstant(fileTypes[x][0], fileTypes[x][1], fileTypes[x][2])){
                                        meta["filetype"] = fileTypes[x][3];
                                        song.filetype = fileTypes[x][3];
                                        console.log(fileTypes[x][3]);
                                    }
                                }
                            }
                            var getMeta = function(){
                                var type = meta["filetype"];
                                if(type == "mp3"){
                                    var version = readField(7,8);
                                } else if(type == "m4a"){

                                }
                            }
                            checkFiletype();
                            getMeta();
                            console.log(bytes);
                        });
                    }
                });
                audio.attr("src", song.url);
                */
			}
		});
	}

	window.onload = function(){
        //Disable highlighting
		disableSelection(document.getElementById("header"));
		
		$(".tablesorter").tablesorter({headers:{4:{sorter:false}}});
        $(".button").on("click", downloadTrigger);
		$("#clear").on("click", clear);
		$("#pause").on("click", pauseToggle);
		if(localStorage.paused){
			$("#pause").text("Resume");
		} else {
			$("#pause").text("Pause");
		}

        $("#download").on("click", downloadTrigger);
        $("#analyze").on("click", analyze);

		window.setInterval(load, 500);
	}
	
