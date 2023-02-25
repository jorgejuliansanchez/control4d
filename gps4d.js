var fs = require('fs'),
    path = require('path'),
    xmlReader = require('read-xml');

var convert = require('xml-js');

var FILE = path.join(__dirname, './Medellin+.kml'); 
xmlReader.readXML(fs.readFileSync(FILE), function(err, data) {
    if (err) {
        console.error(err);
    }
    var xml = data.content;
    var result = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
	var listado=result.kml.Document.Folder.Placemark;
	var rta="<html><head><title>Medellin+</title><meta name='Autor' content='GPS4D' /><meta name='Topico' content='train4d' /><meta name='Entidad' content='Medellin4D' /><meta name='lat' content='6.211122' /><meta name='lon' content='-75.565818' /><meta name='alt' content='1600' /><meta name='tim' content='2023/01/30_17:46:19' />    <style>.rotado {transform: rotateX(180deg); -webkit-transform:rotateX(180deg); -moz-transform:rotateX(180deg);} .rotadot {transform: rotateY(90deg); -webkit-transform:rotateY(90deg); -moz-transform:rotateY(90deg);}</style></head><body style='margin:0;padding:0; background: black;'><svg    id='hoja4d' viewBox='0 0 512 512' style='display: block; width:512px;height:512px;position:absolute;left: 0;right: 0;top: 0px;margin: 0 auto;outline: blue solid 1px; background: white; '><text shape-rendering='geometricPrecision' id='mensaje' x='314' y='136' style='fill: black; stroke: none;font-family:monospace;font-size:10px'>Mensaje</text><text shape-rendering='geometricPrecision' id='mensaje' x='50' y='45' style='fill: lime; stroke: purple;font-family:monospace;font-size:40px'>Medellin+</text></svg><svg viewBox='-75.740 5.926 0.512 0.512' style='display: block; width:512px; height:512px;  position:absolute; left: 0;right: 0;top: 0px; margin: 0 auto; outline: blue solid 1px;' class='rotado' id='panel4d'>";
	for (var i=0; i< listado.length; i++){
		var nombre=listado[i].name._text;
		if (listado[i].LookAt){
			//console.log(listado[i].name._text,listado[i].LookAt.longitude._text,listado[i].LookAt.latitude._text);
			var lat=listado[i].LookAt.latitude._text;
			var lon=listado[i].LookAt.longitude._text;
			rta=rta + '<circle shape-rendering="geometricPrecision" id="' + nombre + '" cx="' + lon + '" cy="' + lat + '"  r="0.002" style="fill: black; stroke: white; stroke-width: 0.001; stroke-linecap: round;stroke-linejoin: round;"><title>' + nombre + '</title></circle>';
			//rta=rta + '<text  shape-rendering="geometricPrecision" id="t' + nombre + '" x="' + lon + '" y="' + lat + '" style="fill: black; stroke: none; font-family:monospace; font-size:0.01px">' + nombre + '</text>';
		}
		if (listado[i].LineString){
			//console.log(listado[i].name._text,listado[i].LineString.coordinates._text);

			var coordenadas = listado[i].LineString.coordinates._text;
			var nodos = coordenadas.split(" ");
			var pruta = "";
			for (var j=0; j< (nodos.length-1); j++){
				texto=nodos[j].replace(/[\s*|\s*$\n\t]/g,'');
				var coord = texto.split(",");
				var lat=coord[1];
				var lon=coord[0];
				//var alt = coord[2];
				pruta=pruta + lon +"," + lat + " ";
			}
			rta=rta + '<polyline shape-rendering="geometricPrecision" id="' + nombre + '" points="' + pruta + '" style="fill: none; stroke: rgb(255,216,103); stroke-width: 0.001; stroke-linecap: round; stroke-linejoin: round;"><title>' + nombre + '</title></polyline>'
		}
	};
	rta=rta + "</svg>";
	rta=rta + "<script>";
	rta=rta + "var lado, resto, pan, id, ancho = Math.max(document.documentElement.clientWidth, window.innerWidth), alto =  Math.max(document.documentElement.clientHeight, window.innerHeight); if (ancho>alto){ lado=alto; resto=ancho-lado; } else {lado=ancho; resto=alto-lado; }; document.getElementById('panel4d').setAttribute('style', ' display: block; position:absolute; left: 0;right: 0;top: 0px; margin: 0 auto; outline: silver solid 1px; width:'+lado+'px; height:'+lado+'px;'); ; document.getElementById('hoja4d').setAttribute('style', ' display: block; position:absolute; left: 0;right: 0;top: 0px; margin: 0 auto; outline: silver solid 1px; width:'+lado+'px; height:'+lado+'px; background: #228b22;');"	
	rta=rta + "var apidata=document.getElementById('mensaje'); var nodo='https://app9000doc-001-site1.atempurl.com/'; var servicio='vueltas'; theUrl=nodo+servicio; var xmlHttp = new XMLHttpRequest(); xmlHttp.open('GET', theUrl, true); xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); xmlHttp.onreadystatechange = function() { if (xmlHttp.readyState == 4 && xmlHttp.status == 200)  { var rta=xmlHttp.responseText; apidata.textContent= rta; } else { apidata.textContent=xmlHttp.status +'...'; if(xmlHttp.status==404) { apidata.textContent='Servicio no encontrado .!'; } if(xmlHttp.status==0) { apidata.textContent='Sin conexión .!'; }}};  xmlHttp.send();";	
	rta=rta + "</script>";
	rta=rta + "</body></html>";
	fs.writeFile('./Medellin+.htm', rta, function (err) {
    if (err) throw console.log(err);
    console.log("archivo generado")
  });
});

