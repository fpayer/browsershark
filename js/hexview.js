var items = JSON.parse(localStorage.hexview);
var view;
var progress = [];
var max = 4096;
	
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

var dec2Bin = function(dec)
{
    var result = dec.toString(2);
	result = Array(9-result.length).join("0")+result;
	return result;
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
		"jpeg" : function(data, meta){
			reader = getReader(data, 0, data.length);

            var offset = 0;

            var headerLength;
            var headerType;
            var app;
			var marker;
           
            var appNames = {
                "FFE0" : ["APP0", ""],
				"FFEC" : ["APP12", ""],
				"FFEE" : ["APP14", ""],
            }
			
			var markerNames = {
				"FFDB" : ["DQT", "Define Quantization Table(s). Specifies one or more quantization tables"],
				"FFC0" : ["SOF0", "Start Of Frame. Indicates that this is a baseline DCT-based JPEG, and specifies the width, height, number of components, and component subsampling"],
				"FFC4" : ["DHT", "Define Huffman Table(s). Specifies one or more Huffman tables"],
				"FFDA" : ["SOS", "Start of scan. Begins a top-to-bottom scan of the image. In baseline DCT JPEG images, there is generally a single scan. Progressive DCT JPEG images usually contain multiple scans"],
				"FFFE" : ["COM", "Comment. Contains a text comment"],
			}

            var apps = {
				"FFEE" : function(){
					var length;
					
					var markers = {
						"Adobe" : function() {
							var data;
							var dataLength;
							
							meta.push([offset, offset+5, "Application tag: Adobe", "", "jpeg"]); //Adobe+null byte
							offset+=6;
							
							dataLength = length - 2 -6; //Length - Length field - App header
							
							console.log(offset);
							
							data = toHex(reader.getBytes(dataLength, offset));
							meta.push([offset, offset+dataLength-1, "Data: " + data, "", "jpeg"]);
							offset+=dataLength;
						}
					}
					
					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
					
					if(reader.getString(5,offset) == "Adobe"){markers["Adobe"]()};
				},
				"FFEC" : function(){
					var length;
					
					var markers = {
						"Ducky" : function(){
							//http://blog.bfitz.us/?p=289
							var quality;
							var comment;
							
							var x=2;
						
							meta.push([offset, offset+5, "Application tag: Ducky", "", "jpeg"]); //Ducky+null byte
							offset+=6;
							x+=6;
							
							quality = view.getInt32(offset);
							meta.push([offset, offset+3, "Quality: " +quality, "", "jpeg"]);
							offset+=4;
							x+=4;
							
							comment = view.getString(length-x, offset);
							meta.push([offset, offset+comment.length-1, "Comment/Copyright: " + comment, "", "jpeg"]);
							offset+=comment.length;
							
						}
					}
					
					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
                    
					if(reader.getString(5,offset) == "Ducky"){markers["Ducky"]()};
				},
                "FFE0" : function(){
					//http://en.wikipedia.org/wiki/JPEG_File_Interchange_Format
                    var length; 
                    var marker;
					
                    var markers = {
                        "JFIF" : function(){
							var majorVersion;
							var minorVersion;
							var density;
							var xdensity;
							var ydensity;
							var thumbWidth;
							var thumbHeight;
							var thumbData;
							var densitys = {
								"0" : "no units",
								"1" : "pixels per inch",
								"2" : "pixels per centimetre",
							}
							
							majorVersion = reader.getInt8(offset);
							meta.push([offset, offset, "Major version: " + majorVersion, "", "jpeg"]);
							offset++;
							
							minorVersion = reader.getInt8(offset);
							meta.push([offset, offset, "Minor version: " + minorVersion, "", "jpeg"]);
							offset++;
							
							density = reader.getInt8(offset);
							meta.push([offset, offset, "Density units: " + (densitys[density] || "unknown"), "", "jpeg"]);
							offset++;
							
							xdensity = reader.getInt16(offset);
							meta.push([offset, offset+1, "X density: " + xdensity, "Horizontal pixel density", "jpeg"]);
							offset+=2;
							
							ydensity = reader.getInt16(offset);
							meta.push([offset, offset+1, "Y density: " + ydensity, "Vertical pixel density", "jpeg"]);
							offset+=2;
							
							thumbWidth = reader.getInt8(offset);
							meta.push([offset, offset, "Thumbnail width: " + thumbWidth + "pixels", "", "jpeg"]);
							offset++;
							
							thumbHeight = reader.getInt8(offset);
							meta.push([offset, offset, "Thumbnail height: "  + thumbHeight + "pixels", "", "jpeg"]);
							offset++;
							
							thumbData = reader.getBytes(3*thumbWidth*thumbHeight, offset);
							meta.push([offset, offset+thumbData.length-1, "Thumbnail data: " + thumbData, "", "jpeg"]);
							offset+=thumbData.length;
                        }
                    }        

                    length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
                    
                    marker = reader.getString(4, offset);
                    offset+=4;
                    
                    meta.push([offset, offset, "Null seperator", "", "jpeg"]);
                    offset++;

                    markers[marker]();
                }
            }
			
			var markers = {
				"FFFE" : function(){
					//COM
					//http://www.videotechnology.com/jpeg/j1.html
					
					var length;
					var comment;
					
					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
					
					comment = reader.getString(length-2, offset);
					meta.push([offset, offset+comment.length-1, "Comment: " + comment, "", "jpeg"]);
					offset+=comment.length;
				},
				"FFDB" : function(){
					//DQT
					var length;
					var precision;
					var tableId;
					var quantisation;
					
					var testByte;
					
					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
					
					testByte = dec2Bin(reader.getBytes(1,offset)[0]);
					percision = parseInt(testByte.substring(0, 4), 2);
					tableId = parseInt(testByte.substring(4), 2);
					meta.push([offset, offset, "Percision: " + percision, "Table id: " + tableId, "jpeg"]);
					offset++;
					
					quantization = reader.getBytes(length-3, offset);
					meta.push([offset, offset+quantization.length-1, "Quantization: " + toHex(quantization), "", "jpeg"]);
					offset += quantization.length;
				}, 
				"FFDA" : function() {
					//SOS
					var length;
					var numComponents;
					var componentId;
					var ac;
					var dc;
					
					var testByte;
					
					var componentIds = {
						"1" : "Y",
						"2" : "Cb",
						"3" : "Cr", 
						"4" : "I",
						"5" : "Q",
					}

					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
					
					numComponents = reader.getInt8(offset);
					meta.push([offset, offset, "Number of components: " + numComponents, "", "jpeg"]);
					offset++;
					
					for(var x=0;x<numComponents;x++){
						componentId = reader.getInt8(offset);
						meta.push([offset, offset, "Component Id: " + componentId, "This represents: " + componentIds[componentId], "jpeg"]);
						offset++;
						
						testByte = dec2Bin(reader.getBytes(1,offset)[0]);
						ac = parseInt(testByte.substring(0, 4), 2);
						dc = parseInt(testByte.substring(4), 2);
						meta.push([offset, offset, "AC table: " + ac, "DC table: " + dc, "jpeg"]);
						offset++;
												
					}
					meta.push([offset, offset+2, "Closing marker", "Raw data follows", "jpeg"]);
					offset+=3;
				},
				"FFC4" : function() {
					//DHT
					var length;
					var num;
					var type;
					var numSymbols;
					var bytes;
					var codesLength;
					var valueCode;
					
					var testByte;
					
					var types = {
						"0" : "DC table",
						"1" : "AC table",
					}
					
					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Includes this field)", "jpeg"]);
                    offset+=2;
					length-=2; //Remove length of length field
					
					var unknown;
					unknown = toHex(reader.getBytes(length, offset));
					meta.push([offset, offset+length-1, "Huffman data: " + unknown, "", "jpeg"]);
					offset+=length;
					
					/* Who the fuck knows?
					for(var x = 0; x<length;x+=3){
						testByte = dec2Bin(reader.getBytes(1,offset)[0]);
						num = parseInt(testByte.substring(0, 3), 2);
						type = parseInt(testByte.substring(4,5), 2);
						meta.push([offset, offset, "Table index: " + num, "Type of table: " + type + " which represents " + (types[type] || "unknown"), "jpeg"]);
						offset++;
					
						codesLength = reader.getInt8(offset);
						meta.push([offset, offset, "Codes length: " + codesLength, "Number of Huffman codes", "jpeg"]);
						offset++;
						
						valueCode = reader.getInt8(offset);
						meta.push([offset, offset, "Associated value: " + valueCode, "Value associated with each Huffman code", "jpeg"]);
						offset++;
					}
					*/
				},
				"FFC0" : function(){
					//SOF0
					var length;
					var dataPercision;
					var height;
					var width;
					var numComponent;
					var componentId;
					var samplingVert;
					var samplingHor;
					var tableNumber;
					
					var testByte;
					
					var numComponents = {
						"1" : "grey scaled",
						"3" : "color YCbCR or color YIQ",
						"4" : "color CMYK",
					}
					
					var componentIds = {
						"1" : "Y",
						"2" : "Cb",
						"3" : "Cr",
						"4" : "I",
						"5" : "Q",
					}
					
					length = reader.getInt16(offset);
                    meta.push([offset, offset+1, "Length of segment: " + length, "(Does not include this field)", "jpeg"]);
                    offset+=2;
					
					dataPercision = reader.getInt8(offset);
					meta.push([offset, offset, "Data Percision: " + dataPercision + "bits/sample", "", "jpeg"]);
					offset++;
					
					height = reader.getInt16(offset);
					meta.push([offset, offset+1, "Height: " + height + "px", "", "jpeg"]);
					offset+=2;
					
					width = reader.getInt16(offset);
					meta.push([offset, offset+1, "Width: " + width + "px", "", "jpeg"]);
					offset+=2;
					
					numComponent = reader.getInt8(offset);
					meta.push([offset, offset, "Num components: " + numComponent, "This represents " + (numComponents[numComponent] || "unknown"), "jpeg"]);
					offset++;
					
					for(var x=0;x<numComponent; x++){
						componentId = reader.getInt8(offset);
						meta.push([offset, offset, "Compontent id: " + componentId, "This represents: " + (componentIds[componentId] || "unknown"), "jpeg"]);
						offset++;
						
						testByte = dec2Bin(reader.getBytes(1,offset)[0]);
						samplingVert = parseInt(testByte.substring(0, 4), 2);
						samplingHor = parseInt(testByte.substring(4), 2);
						meta.push([offset, offset, "Sampling factors vertical: "+ samplingVert, "Sampling factors horizontal: " + samplingHor, "jpeg"]);
						offset++;
						
						tableNumber = reader.getInt8(offset);
						meta.push([offset, offset, "Table number: " + tableNumber, "", "jpeg"]);
						offset++;
					}
				}
			}

            if(toHex(reader.getBytes(2,0)) != "FFD8"){return meta;}
            meta.push([offset, offset+1, "Start Of Image", "", "jpeg"]);
            offset+=2;

			
			//Check what comes after and keep going until we cant find a marker
			marker = reader.getBytes(2, offset)
			for(; marker[0] == 255;marker = reader.getBytes(2, offset)){
				marker = toHex(marker);
				if(typeof markerNames[marker] == "undefined"){
					if(typeof apps[marker] == "undefined"){
						console.log("Marker unsupported");
						break;
					} else {
						meta.push([offset, offset+1, "Application specific marker: " + appNames[marker][0], appNames[marker][1], "jpeg"]);
						offset+=2;
						apps[marker]();
					}
				} else {
					meta.push([offset, offset+1, markerNames[marker][0], markerNames[marker][1], "jpeg"]);
					offset+=2;
					markers[marker]();
				}
			}
			
            return meta;
		},
		"png" : function(data, meta){
			reader = getReader(data, 0, data.length);

            //Not beginning
            if(reader.getString(4,12) != "IHDR"){return meta;}

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

            var checkSum = function(){
	            crc = toHex(reader.getBytes(4, offset));
				meta.push([offset, offset+3, "CRC: " + crc, "The CRC or Cyclic Redundancy Check for this header is " + crc, "png"]);
				offset+=4;
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
				},
                "PLTE" : function(data, meta){
                    var palette;
                    var red;
                    var green;
                    var blue;
                    var originalOffset = offset;
                    
                    while(offset < originalOffset+headerLength){
                        palette = reader.getBytes(3, offset);
                        red = palette[0];
                        green = palette[1];
                        blue = palette[2];

                        meta.push([offset, offset+2, "Palette entry:", "red="+red+" green="+green+" blue="+blue, "png"]);
                        offset+=3;
                    }
                },
                "iCCP" : function(data, meta){
                    console.log(offset);
                    var profileName;
                    //null seperator
                    var compressionMethod;
                    var compressedProfile;
                    var originalOffset = offset;

                    var compressionMethods = {
                        "0" : "zlib"
                    }

                    var testBytes = reader.getBytes(headerLength, offset);
                    for(var x = 0; x<testBytes.length;x++){
                        if (testBytes[x] == 0){
                            break;
                        }
                    }
                    profileName = reader.getString(x, offset);
                    meta.push([offset, offset+profileName.length-1, "Profile name: " + profileName, "", "png"]);
                    offset+=profileName.length;

                    meta.push([offset, offset, "Null seperator", "", "png"]);
                    offset++;

                    compressionMethod = reader.getInt8(offset);
                    meta.push([offset, offset, "Compression method: " + compressionMethod, "This value represents a compresison method of " + (compressionMethods[compressionMethod] || "unknown"), "png"]);
                    offset++;

                    compressedProfile = reader.getString(headerLength-(offset-originalOffset), offset);
                    meta.push([offset, offset+compressedProfile.length-1, "Compressed profile: " + compressedProfile, "", "png"]);
                    offset+=compressedProfile.length;
                },
                "cHRM" : function(data, meta){
                    var whitePointX;
                    var whitePointY;
                    var redX;
                    var redY;
                    var greenX;
                    var greenY;
                    var blueX;
                    var blueY;

                    whitePointX = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "White Point x: " + whitePointX/100000, "png"]);
                    offset+=4;
                    
                    whitePointY = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "White Point y: " + whitePointY/100000, "png"]);
                    offset+=4

                    redX = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "Red x: " + redX/100000, "png"]);
                    offset+=4;

                    redY = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "Red y: " + redY/100000, "png"]);
                    offset+=4;

                    greenX = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "Green x: " + greenX/100000, "png"]);
                    offset+=4;

                    greenY = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "Green y: " + greenY/100000, "png"]);
                    offset+=4;

                    blueX = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "Blue x: " + blueX/100000, "png"]);
                    offset+=4;

                    blueY = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Chromaticities field", "Blue y: " + blueY/100000, "png"]);
                    offset+=4;
                },
                "sRGB" : function(data, meta){
                    var rgb;

                    var rgbs = {
                        "0" : "Perceptual",
                        "1" : "Relative colorimetric",
                        "2" : "Saturation",
                        "3" : "Absolute colorimetric",
                    }

                    rgb = reader.getBytes(1, offset)[0];
                    meta.push([offset, offset, "Rendering intent: " + rgbs[rgb], "", "png"]);
                    offset++;
                },
                "gAMA" : function(data, meta){
                    var gamma;

                    gamma = reader.getBytes(4, offset);
                    meta.push([offset, offset+3, "Gamma value: " + gamma[0] + " " + gamma[1] + " " + gamma[2] + " " + gamma[3], "", "png"]);
                    offset+=4;
                },
                "vpAg" : function(data, meta){
                    var virtualImageWidth;
                    var virtualImageHeight;
                    var unit;

                    var units = {
                        "0" : "pixels"
                    }

                    virtualImageWidth = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Virtual image width: " + virtualImageWidth, "", "png"]);
                    offset+=4;
                    
                    virtualImageHeight = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Virtual image height: " + virtualImageWidth, "", "png"]);
                    offset+=4;
                    
                    unit = reader.getBytes(1, offset)[0];
                    meta.push([offset, offset, "Unit specifier: " + (units[unit] || "unknown"), "", "pmg"]);
                    offset+=1;
                },
               "oFFs" : function(data, meta){
                    var px;
                    var py;
                    var unit;

                    var units = {
                        "0" : "pixels",
                        "1" : "microns",
                    }

                    px = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Image position x-axis: " + px, "", "png"]);
                    offset+=4;
                    
                    py = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Image position y-axis: " + py, "", "png"]);
                    offset+=4;
                    
                    unit = reader.getBytes(1, offset)[0];
                    meta.push([offset, offset, "Unit specifier: " + (units[unit] || "unknown"), "", "pmg"]);
                    offset+=1;
                },
                "pHYs" : function(data, meta){
                    var ppx;
                    var ppy;
                    var unit;

                    var units = {
                        "0" : "unknown",
                        "1" : "meters",
                    }

                    ppx = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Pixels per unit x-axis: " + ppx, "", "png"]);
                    offset+=4;
                    
                    ppy = reader.getInt32(offset);
                    meta.push([offset, offset+3, "Pixels per unit y-axis: " + ppy, "", "png"]);
                    offset+=4;
                    
                    unit = reader.getBytes(1, offset)[0];
                    meta.push([offset, offset, "Unit specifier: " + (units[unit] || "unknown"), "", "pmg"]);
                    offset+=1;
                },
                "tRNS" : function(data, meta){
                    var gray;
                    var alpha;
                    var trueColor;
                    var red;
                    var green;
                    var blue;
                    var originalOffset = offset;

                    if (colorType == 0){
                        console.log("untested");
                        
                        gray = reader.getBytes(2,offset)[0] + " " + reader.getBytes(2,offset)[1];
                        meta.push([offset, offset+1, "Grayscale level: " + gray, "", "png"]);
                        offset+=2;
                    } else if (colorType == 3) {
                        var x = 0;
                        while(offset < originalOffset+headerLength){
                            alpha = reader.getBytes(1, offset)[0];
                            meta.push([offset, offset, "Transparency for palette: " + x, "Alpha: " + alpha, "png"]);
                            offset++;
                            x++;
                        }
                    } else if (colorType == 2) {
                        console.log("untested");
                        
                        trueColor = reader.getBytes(3, offset);
                        red = trueColor[0];
                        green = trueColor[1];
                        blue = trueColor[2];

                        meta.push([offset, offset, "Truecolor entry: ", "red="+red, "png"]);
                        offset++;
                        
                        meta.push([offset, offset, "Truecolor entry: ", "green="+green, "png"]);
                        offset++;

                        meta.push([offset, offset, "Truecolor entry: ", "blue="+blue, "png"]);
                        offset++;
                    } else {
                        console.log("untested");
                        meta.push([offset, offset+headerLength-1, "Transparancy type not supported with this color type", "", "png"]);
                        //not supported
                    }
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
					
					var testBytes = reader.getBytes(headerLength, offset);
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
					
					testBytes = reader.getBytes(headerLength, offset);
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
					
					testBytes = reader.getBytes(headerLength, offset);
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
				
					text = reader.getString(headerLength-(offset-originalOffset), offset);
                    meta.push([offset, offset+text.length-1, "Text: " + text, "", "png"]);
                    offset+=text.length;
                },
				"sBIT" : function(data, meta){
					var sBit;
				
					sBit = reader.getInt32(headerLength);
					meta.push([offset, offset+headerLength-1, "sBit value: " + sBit, "This means that " + sBit + " bits were significant in the source data", "png"]);
					offset+=headerLength;
				}
			}
			offset = 33;
			while(true) 
			{
				try {
					//Handles next chunk
					headerLength = reader.getInt32(offset);
					meta.push([offset, offset+3, "Header length: " + headerLength, "The next " + headerLength + " successive bytes following the headername are a header", "png"]);
					offset+=4;
					
					headerType = reader.getString(4,offset);
					meta.push([offset, offset+3, "Header type: " + headerType, "This is the " + headerType + " header", "png"]);
					offset+=4;
			        
                    if(headerType == "IDAT"){return meta;}

                    if (typeof headerTypes[headerType] == "undefined"){
						console.log("Unknown header");
                        meta.push([offset, offset+headerLength-1, "Unknown header", "", "png"]);
                        offset+=headerLength;
                    } else {
					    headerTypes[headerType](data, meta);
				    }
                    checkSum();
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
		[0, 3, "25504446", "pdf"], //pdf
        [0, 3, "774F4646", "woff"], //woff
        [0, 2,"494433", "mp3"], //mp3 id3v2
        [0, 1,"FFFB", "mp3"], //mp3 id3v1 or no id3
        [4, 7,"66747970", "mp4"], //mp4
        //[0,6,"FDFDFD", "mp3"],
        [0, 7, "504B030414000600", "docx/pptx/xlsx"], // DOCX, PPTX XLSX
        [0, 5, "504B03041400", "zip"], //zip <FUCK theres like 12+ filetypes for this shit 
        [0, 1,"4D5A", "exe/com/dll"],//com,dll,drv,eve,pif,qts,qtx,sys
        [0, 2, "1F8B08", "gz"], //gz, tgz
        [0, 6, "526172211A0700", "rar"], //rar v1.5+
        [0, 7, "526172211A070100", "rar"], //rar v5.0+
        [0, 3, "38425053", "psd"], //psd
        [0, 3, "7F454C46", "elf"], //elf UNTESTED
        //[0,10, "4344303031", "iso"], //iso UNTESTED
        [0, 3, "CAFEBABE", "class"], //class (java)
        [0, 5, "377ABCAF271C", "7z"], //7z
        [0, 2, "EB3C90", "img"], //img gem raster file?
        [0, 1, "424D", "bmp"], //bmp
        [0, 3, "EDABEEDB", "rpm"], //rpm
        [0, 3, "4F676753", "ogg"], //ogg
        [0, 2, "425A68", "bz2"], //bz2,tar.bz2,tbz2,tb2
        [0, 7, "D0CF11E0A1B11AE1", "doc/dot/ppt/xls"], //doc, dot, pps, ppt, xla, xls, wiz
        [0, 3, "00000100", "ico"], //ico
		[0, 3, "00000200", "cur"], //cur
        [6, 9,"4A464946", "jpeg"], //Jpeg jfif [FFD8FFE0 xxxx]
		[6, 10, "4578696600", "jpeg"], //jpeg exif [FFD8FFE1 xxxx]
		[6, 11, "535049464600", "jpeg"], //jpeg spiff UNTESTED [FFD8FFE8 xxxx]
        [0, 7,"89504E470D0A1A0A", "png"], //Png
        [0, 2,"435753", "swf"], //Shockwave flash
        [0, 13,"3C3F786D6C2076657273696F6E3D", "xml"], //XML Manifest
        [0, 5,"474946383761", "gif"], //GIF87a
        [0, 5,"474946383961", "gif"] //GIF89a
    ];
    
	//console.log("This field is:", getBytes(data, 0, 1));
	
	for(var x = 0; x<fileTypes.length;x++){
		//Convert to hex offset
		var start = fileTypes[x][0];
		var end = fileTypes[x][1];
		
		var hstart = fileTypes[x][0];
		var hend = fileTypes[x][1];
		var hex = getHex(data, hstart, hend-hstart+1); //You need the +1 for some reason. I forget why
        //console.log("This field is:", readField(bytes, 12, 22));
		//console.log("This field is:", view.getString(20, 0));
		if (checkConstant(hex, 0, hex.length, fileTypes[x][2])){
			meta.push([start, end, "Content-Type: " + fileTypes[x][3], "Filetype determined with presence of the signature: " + fileTypes[x][2], fileTypes[x][3]]);
		}
	}
    return meta;
}

var addHex = function(id){
	//Retrieve vars
	var data = progress[id].data;
	var offset = progress[id].offset;
	var completed = progress[id].completed;

	//Retrieve meta and restrict search to this chunk
	var meta = getMeta(data.substring(offset, offset+max));
	
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
		var start = meta[x][0]*2; //Convert to hex offset
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
				if(offset==1000){
                }
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
					
                    title = title.length>250?title.substring(0,250)+"...":title;
                    desc = desc.length>250?desc.substring(0,250)+"...":desc;

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
