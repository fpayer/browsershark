var items = JSON.parse(localStorage.hexview);
var view;

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

//Meta
//[512,516,"FDFFFFFF", "MS Office file"]

var checkFiletype = function(bytes, meta){
    //In HEX
    var fileTypes = [
		[0, 8, "25504446", "pdf"], //pdf
        [0,8, "774F4646", "woff"], //woff
        [0,6,"494433", "mp3"], //mp3 id3v2
        [0,4,"FFFB", "mp3"], //mp3 id3v1 or no id3
        [8,16,"66747970", "mp4"], //mp4
        //[0,6,"FDFDFD", "mp3"],
        [0, 16, "504B030414000600", "docx/pptx/xlsx"], // DOCX, PPTX XLSX
        [0, 12, "504B03041400", "zip"], //zip <FUCK theres like 12+ filetypes for this shit 
        [0,4,"4D5A", "exe/com/dll"],//com,dll,drv,eve,pif,qts,qtx,sys
        [0,6, "1F8B08", "gz"], //gz, tgz
        [0, 14, "526172211A0700", "rar"], //rar v1.5+
        [0, 16, "526172211A070100", "rar"], //rar v5.0+
        [0,8, "38425053", "psd"], //psd
        [0,8, "7F454C46", "elf"], //elf UNTESTED
        //[0,10, "4344303031", "iso"], //iso UNTESTED
        [0,8, "CAFEBABE", "class"], //class (java)
        [0, 12, "377ABCAF271C", "7z"], //7z
        [0, 6, "EB3C90", "img"], //img gem raster file?
        [0,4, "424D", "bmp"], //bmp
        [0,8, "EDABEEDB", "rpm"], //rpm
        [0,8, "4F676753", "ogg"], //ogg
        [0,6, "425A68", "bz2"], //bz2,tar.bz2,tbz2,tb2
        [0, 16, "D0CF11E0A1B11AE1", "doc/dot/ppt/xls"], //doc, dot, pps, ppt, xla, xls, wiz
        [0, 8, "00000100", "ico"], //ico
        [12,20,"4A464946", "jpeg"], //Jpeg jfif [FFD8FFE0 xxxx]
		[12,22, "4578696600", "jpeg"], //jpeg exif [FFD8FFE1 xxxx]
		[12,24, "535049464600", "jpeg"], //jpeg spiff UNTESTED [FFD8FFE8 xxxx]
        [0,16,"89504E470D0A1A0A", "png"], //Png
        [0,6,"435753", "swf"], //Shockwave flash
        [0,28,"3C3F786D6C2076657273696F6E3D", "xml"], //XML Manifest
        [0,12,"474946383761", "gif"], //GIF87a
        [0,12,"474946383961", "gif"] //GIF89a
    ];
    
    for(var x =0;x<fileTypes.length;x++){
        console.log("This field is:", readField(bytes, 0, 20));
		console.log("This field is:", view.getString(20, 0));
        if (checkConstant(bytes, fileTypes[x][0], fileTypes[x][1], fileTypes[x][2])){
            meta.push([fileTypes[x][0], fileTypes[x][1], "Content-Type: " + fileTypes[x][3], "Filetype determined with presence of the signature: <b>" + fileTypes[x][2] + "</b>"]);
        }
    }
    return meta;
}

var addHex = function(file, bytes, meta){
    var parentdiv = $("<div>");
    parentdiv.addClass("hexprint");
    var h3 = $("<h3>");
    h3.text(file.host + " | " + file.name);
    var hexdiv = $("<div>");
    hexdiv.addClass("prettyprint");
    
    //meta = [start, end, value]
    //meta = [[3, 6, "Test"]];


    console.log(meta);

    var plain = $("<span>").addClass("pln");
    var type = $("<span>").addClass("type tooltip");
    var flag = false;
    for(var x=0;x<bytes.length;x++){
        for (var y=0;y<meta.length;y++){
            flag = true;
            //If start of meta, append old plain+generate fresh plain+meta
            if (x == meta[y][0]){
                hexdiv.append(plain);
                type = $("<span>").addClass("type tooltip");
                plain = $("<span>").addClass("pln");
                if ((x+1) % 4 ==0){
                    type.text(type.text()+bytes[x]+" ");
                } else {
                    type.text(type.text()+bytes[x]);
                }
            //If in middle of meta, keep appending to meta
            } else if (x > meta[y][0] && x < meta[y][1]){
                if ((x+1) % 4 ==0){
                    type.text(type.text()+bytes[x]+" ");
                } else {
                    type.text(type.text()+bytes[x]);
                }
            //If at the end of meta, append meta
            } else if (x == meta[y][1]){
                if ((x+1) % 4 ==0){
                    plain.text(plain.text()+bytes[x]+" ");
                } else {
                    plain.text(plain.text()+bytes[x]);
                }

                var tooltip = $("<span>");
                var img = $("<img>");
                img.attr("src", "callout.gif");
                img.addClass("callout");
                tooltip.html("<strong>"+meta[y][2]+"</strong></br>"+meta[y][3]);
                
                tooltip.prepend(img);
                type.append(tooltip);
                hexdiv.append(type);
            } else {
                flag = false;
            }
        }
        if (!flag){
            //If not meta, but is 4'th
            if ((x+1) % 4 == 0){
                plain.text(plain.text()+bytes[x]+" ");
            } else {
                plain.text(plain.text()+bytes[x]);
            }
        }
    }
    hexdiv.append(plain);
    
    var spacer = $("<p>");
    spacer.html("</br>");

    parentdiv.append(h3).append(hexdiv).append(spacer);
    $("#view").append(parentdiv);
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
		var max = 1000;
		
		data = data.substring(0,max);
        view = new jDataView(data);
        var length = view.byteLength;

        if (length > max){
            length = max;
        }

        var bytes = "";
        //var bits = "";

        for (var byteCount = 0; byteCount < length; byteCount++){
            //bits += view.getBytes(1, byteCount)[0].toString(2);
            Byte = toHex(view.getBytes(1,byteCount));
            if (Byte.length == 1){
                Byte = "0" + Byte;
            }
            bytes += Byte;
        }
        bytes = bytes.toUpperCase();
        var meta = [ ];
		try {
			meta = checkFiletype(bytes, meta);
		} catch(err){}
		for (var x =0; x<items.length;x++){
			if(items[x].url == this.url){
				addHex(items[x], bytes, meta);
				return;
			}
		}
        /*
		item = items[$(".hexprint").length];
        addHex(item, bytes, meta);
		*/
    });
}
