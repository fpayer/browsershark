var items = JSON.parse(localStorage.hexview);
var view;
var progress = [];
var max = 1000;
	
window.addEventListener("load", function(){
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
}); 

var toHex = function(arr){
    var result = "";
    for (var i=0;i<arr.length;i++){
        var str = arr[i].toString(16);
        z = 8-str.length + 1;
        str = Array(z).join("") +str;
		if(str.length == 1){
			str = "0" + str;
		}
		
        result += str;
    }
    return result.toUpperCase();
}

var checkConstant = function(bytes, start, stop, val){
    return bytes.substring(start,stop).indexOf(val) != -1;
}

var readField = function(bytes, start, stop){
    return bytes.substring(start,stop);
}

//Meta
//[512,516,"FDFFFFFF", "MS Office file"]

var getMeta = function(data){
	meta = [];
	meta = checkFiletype(data, meta);
	meta = checkHeaders(data, meta);
	return meta;
}

var getReader = function(data, offset, length){
	data = data.substring(offset, offset+length);
	length = length>data.length ? data.length : length;
	view = new jDataView(data);
	return view;
}

var reader;
var valuepair;

var checkHeaders = function(data, meta){
	var headerHandlers = {
		"ico" : function(data, meta){
			console.log("asd");
			return meta;
		},
		"png" : function(data, meta){
			reader = getReader(data, 0, data.length);
			
			var byteCount = 0;
			var offset = 0;
			
			var headerLength;
			var headerType;
			var width;
			var height;
			var bitDepth;
			var colorType;
			var compressionMethod;
			var filterMethod;
			var interlaceMethod;
			var crc;
			
			var colorTypes = {
				"0" : "each pixel is a grayscale sample",
				"2" : "each pixel is an RGB tripple",
				"3" : "each pixel is a palette index",
				"4" : "each pixel is a grayscale sample followed by an alpha sample",
				"6" : "each pixel is an RGB tripple followed by an alpha sample",
			}
			var interlaceMethods = {
				"0" : "no interlace is used",
				"1" : "Adam7 interlace is used",
			}
			
			//Handles required IHDR header
			headerLength = reader.getInt32(8);
			meta.push([8, 11, "Header length: " + headerLength, "The next " + headerLength + " succesive bytes are a header", "png"]);
			
			headerType = reader.getString(4,12);
			meta.push([12, 15, "Header type: " + headerType, "This is the " + headerType + " header", "png"]);
			
			width = reader.getInt32(16);
			meta.push([16, 19, "Width: " + width + "px", "This png is " + width + " pixels wide", "png"]);
			
			height = reader.getInt32(20);
			meta.push([20, 23, "Height: " + height + "px", "This png is " + height + " pixels tall", "png"]);
			
			bitDepth = reader.getInt8(24);
			meta.push([24, 24, "Bit depth: " + bitDepth, "This png has a bit depth of " + bitDepth + " bits", "png"]);
			
			colorType = reader.getInt8(25);
			meta.push([25, 25, "Color type: " + colorType, "This png has a color type of " + colorType + ". Which means that " + (colorTypes[colorType] || "this value is not defined"), "png"]);
			
			compressionMethod = reader.getInt8(26);
			meta.push([26, 26, "Compression method: " + compressionMethod, "The png standard currently only supports the compression method 0", "png"]);
			
			filterMethod = reader.getInt8(27);
			meta.push([27, 27, "Filter method: " + filterMethod, "The png standard currently only supports the filter method 0", "png"]);
			
			interlaceMethod = reader.getInt8(28);
			meta.push([28, 28, "Interlace method: " + interlaceMethod, "This png has an interlace method of " + interlaceMethod + ". Which means that " + (interlaceMethods[interlaceMethod] || "this value is not defined"), "png"]);
			
			crc = toHex(reader.getBytes(4,29));
			meta.push([29, 32, "CRC: " + crc, "The CRC or Cyclic Redundancy Check for this header is " + crc, "png"]);
			
			var headerTypes = {
				"tEXt" : function(data, meta){
					var valuepair;
					var keyword;
					//null seperator
					var value;
					
					valuepair = reader.getString(headerLength, offset);
					keyword = valuepair.split(" ")[0];
					value = valuepair.split(" ")[1];
					
					meta.push([offset, offset+keyword.length-1, "Keyword: " + keyword, "", "png"]);
					offset+=keyword.length;
					
					meta.push([offset, offset, "Null Seperator", "A null seperator acts as a delimiter between the keyword and text", "png"]);
					offset++;
					
					meta.push([offset, offset+value.length-1, "Value: " + value, "", "png"]);
					offset+=value.length;
					
					crc = toHex(reader.getBytes(4, offset));
					meta.push([offset, offset+3, "CRC: " + crc, "The CRC or Cyclic Redundancy Check for this header is " + crc, "png"]);
					offset+=4;
				},
				"iTXt" : function(data, meta){
					var valuepair;
					//null seperator
					var keyword;
					var compressionFlag;
					var compressionMethod;
					var languageTag;
					//null seperator
					var translatedKeyword;
					//null seperator
					var text;
					var originalOffset = offset;
					
					var compressionFlags = {
						"0" : "uncompressed text",
						"1" : "compressed text"
					}
					
					var testBytes = view.getBytes(headerLength, offset);
					for(var x = 0; x<testBytes.length;x++){
						if (testBytes[x] == 0){
							break;
						}
					}
					keyword = reader.getString(x, offset);
					meta.push([offset, offset+keyword.length-1, "Keyword: " + keyword, "", "png"]);
					offset+=keyword.length;
					
					meta.push([offset, offset, "Null Seperator", "A null seperator acts as a delimiter between the keyword and the compression fields", "png"]);
					offset++;
					
					compressionFlag = reader.getInt8(offset);
					meta.push([offset, offset, "Compression flag: " + compressionFlag, "This means that this is " + (compressionFlags[compressionFlag] || "an unknown value"), "png"]);
					offset++;
					
					compressionMethod = reader.getInt8(offset);
					meta.push([offset, offset, "Compression method: " + compressionMethod, "This header currently only supports the compression method 0 which is zlib or none", "png"]);
					offset++;
					
					testBytes = view.getBytes(headerLength, offset);
					for(var x = 0; x<testBytes.length;x++){
						if (testBytes[x] == 0){
							break;
						}
					}
					if(x != 0){
						languageTag = reader.getString(x, offset);
						meta.push([offset, offset+languageTag.length, "Language tag: " + languageTag, "The language tag is " + languageTag, "png"]);
						offset+=languageTag.length;
					}
					
					meta.push([offset, offset, "Null Seperator", "A null seperator", "png"]);
					offset++;
					
					testBytes = view.getBytes(headerLength, offset);
					for(var x = 0; x<testBytes.length;x++){
						if (testBytes[x] == 0){
							break;
						}
					}
					if(x != 0){
						translatedKeyword = reader.getString(x, offset);
						meta.push([offset, offset+translatedKeyword.length, "Translater keyword: " + translatedKeyword, "The translater keyword is " + translatedKeyword, "png"]);
						offset+=translatedKeyword.length;
					}
					
					meta.push([offset, offset, "Null Seperator", "A null seperator", "png"]);
					offset++;
					
					text = view.getString(headerLength-(offset-originalOffset), offset);
					console.log(text);
					meta.push([offset, offset+text.length-1, "Text: " + text, "", "png"]);
					offset+=text.length;
					
					crc = toHex(reader.getBytes(4, offset));
					meta.push([offset, offset+3, "CRC: " + crc, "The CRC or Cyclic Redundancy Check for this header is " + crc, "png"]);
					offset+=4;
				}
			}
			
			offset = 33;
			
			while(true) 
			{
				try {
					//Handles next chunk

					headerLength = reader.getInt32(offset);
					meta.push([offset, offset+3, "Header length: " + headerLength, "The next " + headerLength + " successive bytes are a header", "png"]);
					offset+=4;
					
					headerType = reader.getString(4,offset);
					meta.push([offset, offset+3, "Header type: " + headerType, "This is the " + headerType + " header", "png"]);
					offset+=4;
				
					//console.log(offset);

					headerTypes[headerType](data, meta);
					
				} catch (err) {
					return meta;
				}
			}
			
			return meta;
		}
	}
	
	if(meta[0] && headerHandlers[meta[0][4]]){
		meta = headerHandlers[meta[0][4]](data, meta);
	}
	return meta;
}

var checkFiletype = function(data, meta){
    //In HEX
    var fileTypes = [
		[0, 4, "25504446", "pdf"], //pdf
        [0, 4, "774F4646", "woff"], //woff
        [0,3,"494433", "mp3"], //mp3 id3v2
        [0,2,"FFFB", "mp3"], //mp3 id3v1 or no id3
        [4,8,"66747970", "mp4"], //mp4
        //[0,6,"FDFDFD", "mp3"],
        [0, 8, "504B030414000600", "docx/pptx/xlsx"], // DOCX, PPTX XLSX
        [0, 6, "504B03041400", "zip"], //zip <FUCK theres like 12+ filetypes for this shit 
        [0,2,"4D5A", "exe/com/dll"],//com,dll,drv,eve,pif,qts,qtx,sys
        [0,3, "1F8B08", "gz"], //gz, tgz
        [0, 7, "526172211A0700", "rar"], //rar v1.5+
        [0, 8, "526172211A070100", "rar"], //rar v5.0+
        [0,4, "38425053", "psd"], //psd
        [0,4, "7F454C46", "elf"], //elf UNTESTED
        //[0,10, "4344303031", "iso"], //iso UNTESTED
        [0,4, "CAFEBABE", "class"], //class (java)
        [0, 6, "377ABCAF271C", "7z"], //7z
        [0, 3, "EB3C90", "img"], //img gem raster file?
        [0,2, "424D", "bmp"], //bmp
        [0,4, "EDABEEDB", "rpm"], //rpm
        [0,4, "4F676753", "ogg"], //ogg
        [0,3, "425A68", "bz2"], //bz2,tar.bz2,tbz2,tb2
        [0, 8, "D0CF11E0A1B11AE1", "doc/dot/ppt/xls"], //doc, dot, pps, ppt, xla, xls, wiz
        [0, 4, "00000100", "ico"], //ico
		[0, 4, "00000200", "cur"], //cur
        [6,10,"4A464946", "jpeg"], //Jpeg jfif [FFD8FFE0 xxxx]
		[6,11, "4578696600", "jpeg"], //jpeg exif [FFD8FFE1 xxxx]
		[6,12, "535049464600", "jpeg"], //jpeg spiff UNTESTED [FFD8FFE8 xxxx]
        [0, 7,"89504E470D0A1A0A", "png"], //Png
        [0,3,"435753", "swf"], //Shockwave flash
        [0,14,"3C3F786D6C2076657273696F6E3D", "xml"], //XML Manifest
        [0,6,"474946383761", "gif"], //GIF87a
        [0,6,"474946383961", "gif"] //GIF89a
    ];
    
	//console.log("This field is:", getBytes(data, 0, 1));
	
	for(var x = 0; x<fileTypes.length;x++){
		//Convert to hex offset
		var start = fileTypes[x][0];
		var end = fileTypes[x][1];
		
		var hstart = fileTypes[x][0]*2;
		var hend = fileTypes[x][1]*2+1;
		var hex = getHex(data, hstart, hend-hstart);
		//console.log("This field is:", readField(bytes, 12, 22));
		//console.log("This field is:", view.getString(20, 0));
		if (checkConstant(hex, 0, hex.length, fileTypes[x][2])){
			meta.push([start, end, "Content-Type: " + fileTypes[x][3], "Filetype determined with presence of the signature: <b>" + fileTypes[x][2] + "</b>", fileTypes[x][3]]);
		}
	}
    return meta;
}

var addHex = function(id){
	//Retrieve vars
	var data = progress[id].data;
	var offset = progress[id].offset;
	var completed = progress[id].completed;

	//Retrieve meta
	var meta = getMeta(data);
	
	//Retrieve hex
	var hex = getHex(data, offset, max);
	
	progress[id] = {
		"data" : data,
		"offset" : offset+max,
		"completed" : offset+max>data.length ? true : false,
	}
	
	//Retrieve parent div and content div
    var parentdiv = $("#"+id);
    var hexdiv = $(".prettyprint").eq(id);

	//Create hexdump
	var metas = [];
	for (var x=0;x<meta.length;x++){
		var start = meta[x][0]*2; //Conver to hex offset
		var stop = meta[x][1]*2+1;
		var title = meta[x][2];
		var desc = meta[x][3];
	
		var flipper = x%2==0?"even":"odd";
		var classes = "tooltip " + flipper;
	
		var metaSpan = $("<span>").addClass(classes);
		metas.push([start, stop, title, desc, metaSpan]);
	}
	
	var plain = $("<span>").addClass("pln");
	//Loop through all hex
	for (var x=0;x<hex.length;x++){
		var foundMeta = false;
		//Loop through all meta
		for (var y=0;y<metas.length;y++){
			var start = metas[y][0];
			var end = metas[y][1];
			var title = metas[y][2];
			var desc = metas[y][3];
			//If within meta range
			if(x+offset >= start && x+offset <= end){
				foundMeta= true;
				var metaSpan = metas[y][4];
				
				//If 4th and last
				if ((x+1) % 4 ==0 && x+offset == end){
					metaSpan.text(metaSpan.text()+hex[x]);
					plain.text(plain.text()+" ");
				}
				//If 4th
				else if ((x+1) % 4 ==0){
					metaSpan.text(metaSpan.text()+hex[x]+" ");
				} else {
					metaSpan.text(metaSpan.text()+hex[x]);
				}
				//If last in range
				if (x+offset == end){
					var tooltip = $("<span>");
					var img = $("<img>");
					img.attr("src", "/images/callout.gif");
					img.addClass("callout");
					
					var t = $("<p>");
					t.text(title);
					tooltip.prepend(t);
					var p = $("<p>");
					p.text(desc);
					tooltip.append(p);
					tooltip.prepend(img);
					metaSpan.append(tooltip);
					hexdiv.append(metaSpan);
				//If 1st in range
				} else if(x+offset == start){
					hexdiv.append(plain);
					plain = $("<span>").addClass("pln");
				} 
			
			} else {
				
			}
		}
		//Not in meta range
		if(!foundMeta){
			if ((x+1) % 4 ==0){
				plain.text(plain.text()+hex[x]+" ");
			} else {
				plain.text(plain.text()+hex[x]);
			}
		}
	}
    hexdiv.append(plain);
	
	//Create more button
	parentdiv.find(".spanadd").remove();
	if(!progress[id]["completed"])
	{
		parentdiv.find(".spanadd").remove();
		var more = $("<span>");
		more.data("cb", id);
		more.addClass("spanadd");
		more.on("click", function(){
			var span = $(this);
			var id = span.data("cb");
			addHex(id);
		});	
		more.text(".....More");
		hexdiv.append(more);
	}
}

var getHex = function(data, offset, length){
	data = data.substring(offset, offset+length);
	length = length>data.length ? data.length : length;
	view = new jDataView(data);
	return toHex(view.getBytes(length,0));
}

for (var x=0; x<items.length;x++){
    var item = items[x];
    $.ajax({
        "url": item.url,
		beforeSend: function ( xhr ) {
			xhr.overrideMimeType("text/plain; charset=x-user-defined");
			xhr.responseType = "arraybuffer";
	  }
    }).done(function(data){
		//Figure out our matching file
		var file;
		for (var x =0; x<items.length;x++){
			if(items[x].url == this.url){
				file = items[x];
			}
		}
		
		//Add to status
		progress.push({
			"offset" : 0,
			"completed" : false,
			"data" : data
		});
		var id = progress.length-1;
		
		//Generate parent div
		var parentdiv = $("<div>");
		parentdiv.addClass("hexprint");
		parentdiv.attr("id", id);
		
		//Generate header
		var h3 = $("<h3>");
		h3.text(file.host + " | " + file.name);
		
		//Generate hex
		var hexdiv = $("<div>");
		hexdiv.addClass("prettyprint");
		
		//Append header to parent
		parentdiv.append(h3);
		
		//Append hex to parent
		parentdiv.append(hexdiv);
		
		//Append parent to document
		$("#view").append(parentdiv);
	
		//Append content 
		addHex(id);
    });
}
