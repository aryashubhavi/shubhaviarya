//awards---------------
var pic_over = new Image();
pic_over.src = "images/menuleft2.html";

function doButtons(name,pic) {
	document[name].src=pic;
}

function changeImage(imgDocID,imgObjName)
{
	//document.images [imgDocID].src=eval(imgObjName + ".src")
	document.images [imgDocID].src=imgObjName
}

function DisplayDiv(Info)
{
//	alert("ooo");
//	document.getElementById('detail').innerHTML = document.getElementById(divElement).innerHTML
	document.getElementById('detail').innerHTML = Info
}

function ChgClass(obj,nc){
	if(document.layers){
		eval('document.layers["'+obj+'"].className=nc')
	}
	if(document.all){
		eval('document.all["'+obj+'"].className=nc')
	}
	if(!document.all && document.getElementById){
		document.getElementById(obj).className=nc
	}

//	obj.nc=obj.className;
//	obj.className=nc;
//	obj.onmouseout=function(){ this.className=this.nc; }
}

// Misc Variables
	Menu_XOffset = 0	// 180
	Menu_YOffset = 20	// -2
	Menu_Over = null	// Menu currently highlighted

function ColorTD(elem,color){
	eval('document.all["'+elem+'"].style.backgroundColor="'+color+'"')
}

function ShowMenu(elem,LayerName,Level,option){
	//if (LayerName != "Search") {HideDiv();}
	if (option==1){
		Menu_XOffset = -100	// 180
		Menu_YOffset = 10	// 0
		Menu_Over = null	// Menu currently highlighted
	} else if (option==3) {
		Menu_XOffset = 200	// 180
		Menu_YOffset = 280	// 0
		Menu_Over = null	// Menu currently highlighted
	} else if (option==11) {
		Menu_XOffset = -10	// 180
		Menu_YOffset = -85	// 0
		Menu_Over = null	// Menu currently highlighted
	} else if (option==12) {
		Menu_XOffset = -20	// 180
		Menu_YOffset = -61	// 0
		Menu_Over = null	// Menu currently highlighted
	} else if (option==13) {
		Menu_XOffset = -20	// 180
		Menu_YOffset = -88	// 0
		Menu_Over = null	// Menu currently highlighted
	} else if (option==14) {
		Menu_XOffset = -0	// 180
		Menu_YOffset = -146	// 0
		Menu_Over = null	// Menu currently highlighted
	} else if (option==16) {
		Menu_XOffset = -0	// 180
		Menu_YOffset = -118	// 0
		Menu_Over = null	// Menu currently highlighted
	} else {
		Menu_XOffset = -1	// 180
		Menu_YOffset = 0	// 0
		Menu_Over = null	// Menu currently highlighted
	}

	if(document.layers){
		if (Level==0){
			eval('document.layers["'+LayerName+'"].left = findPosX(elem) + Menu_XOffset + 1')
			eval('document.layers["'+LayerName+'"].top = findPosY(elem) + Menu_YOffset')
		}
		eval('document.layers["'+layerName+'"].visibility="visible"')
	}
	if(document.all){
		if (Level==0){
			eval('document.all["'+LayerName+'"].style.left = findPosX(elem) + Menu_XOffset')
			eval('document.all["'+LayerName+'"].style.top = findPosY(elem) + Menu_YOffset')
		}
		eval('document.all["'+LayerName+'"].style.visibility = "visible"')
	}
	if(!document.all && document.getElementById){
		if (Level==0){
			document.getElementById(LayerName).style.left = findPosX(elem) + Menu_XOffset
			document.getElementById(LayerName).style.top = findPosY(elem) + Menu_YOffset
		}
		document.getElementById(LayerName).style.visibility = "visible"
	}
}

function ShowMenuNew(elem,LayerName,Level,Menu_XOffset, Menu_YOffset){
	//if (LayerName != "Search") {HideDiv();}
	Menu_Over = null

	if(document.layers){
		if (Level==0){
			eval('document.layers["'+LayerName+'"].left = findPosX(elem) + Menu_XOffset + 1')
			eval('document.layers["'+LayerName+'"].top = findPosY(elem) + Menu_YOffset')
		}
		eval('document.layers["'+layerName+'"].visibility="visible"')
	}
	if(document.all){
		if (Level==0){
			eval('document.all["'+LayerName+'"].style.left = findPosX(elem) + Menu_XOffset')
			eval('document.all["'+LayerName+'"].style.top = findPosY(elem) + Menu_YOffset')
		}
		eval('document.all["'+LayerName+'"].style.visibility = "visible"')
	}
	if(!document.all && document.getElementById){
		if (Level==0){
			document.getElementById(LayerName).style.left = findPosX(elem) + Menu_XOffset
			document.getElementById(LayerName).style.top = findPosY(elem) + Menu_YOffset
		}
		document.getElementById(LayerName).style.visibility = "visible"
	}
}


function HideMenu(elem,LayerName,Level){

	if(document.layers){
		eval('document.layers["'+layerName+'"].visibility="hidden"')
	}
	if(document.all){
		eval('document.all["'+LayerName+'"].style.visibility = "hidden"')
	}
	if(!document.all && document.getElementById){
		document.getElementById(LayerName).style.visibility = "hidden"
	}
}


function findPosX(obj){
	var curleft=0;
		if(document.getElementById||document.all){while(obj.offsetParent){curleft+=obj.offsetLeft;obj=obj.offsetParent;}}
		else if(document.layers){curleft+=obj.x;}
	return curleft;}

function findPosY(obj){
	var curtop=0;
		if(document.getElementById||document.all){while(obj.offsetParent){curtop+=obj.offsetTop;obj=obj.offsetParent;}}
		else if(document.layers){curtop+=obj.y;}
	return curtop;}

//if(document.layers)document.captureEvents(Event.MOUSEMOVE);document.onmouseup=HideDiv;
function HideDiv(){
	if(document.layers){document.Search.top = -999}
	if(document.all){Search.style.top = -999}
	if(!document.all && document.getElementById){document.getElementById('Search').style.top = -999}
	//changeImage("img5","img51");
}

function checkString(){
	var srchString = "";
	srchString = document.frmSearch.srchstring.value;
	if(srchString.length == 0)
	{
		alert("Please enter atleast one word for the search");
		document.frmSearch.srchstring.focus();
		return false;
	}
	else
		return true;
}

function doParent(name,pic) {
	parent.document[name].src=pic;
}

function doCaptionPar(caption) {
	parent.document.getElementById("caption").innerText = caption;
}

///REST OF THE page
