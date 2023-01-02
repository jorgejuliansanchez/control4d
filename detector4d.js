<html lang="es" xmlns="http://www.w3.org/1999/xhtml"><head><title>EditorC4D</title><!--Obra : EditorC4D : Software para ilustrar en la Web, Autor: Jorge Julian Sanchez Velez, DNDA: Registro nacional de Derechos de autor Libro 13 Tomo 32 Partida 433 20120320 --><meta name="Autor" content="JULI4"><meta name="Latitud" content="6.2529001235962"><meta name="Longitud" content="-75.564598083496"><meta name="Altitud" content="1600.00"><meta name="Instante" content="2022/03/15_11:27:00">        <meta name="Email" content="jorgejuliasanchez@gmail.com"><meta name="keywords" content="Editor SVG Cuarta Dimension"><meta name="description" content="SocioSistema de ilustracion vectorial"><meta http-equiv="Expires" content="Tue, 25 Abr 1990 09:30:00 -0700"><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="encoding" content="utf-8"><link rel="shortcut icon" href="EditorC4D.ico">
<script src="/node_modules/socket.io/client-dist/socket.io.js"></script>
<style>.rotado{transform: rotateY(180deg); -webkit-transform:rotateY(180deg); -moz-transform:rotateY(180deg);}polyline {stroke-linecap: round; stroke-linejoin: round;} .borde333 {fill: none; stroke: black;stroke-width: 0.333;} .borde1 {fill: none; stroke: black; stroke-width: 1;} .base {fill: none; stroke: black; stroke-width: 1; } .flecha { fill: none; stroke: black; stroke-width: 1; } .azul { fill: blue; stroke: blue; stroke-width: 1; } .verde { fill: green; stroke: green; stroke-width: 1; } .verde1 { fill: none; stroke: green; stroke-width: 1; } .lima { fill: lime; stroke: lime; stroke-width: 1; } .negro { fill: black; stroke: black; stroke-width: 1; } .blanco { fill: white; stroke: white; stroke-width: 1; } .nada { fill: none; stroke: black; stroke-width: 1; } .vidrio { fill: none; stroke: black; stroke-width: 1; } .chupa { fill: blue; stroke: blue; stroke-width: 1; } .plata { fill: silver; stroke: rgb(128,128,128); stroke-width: 1; } .boton { position:absolute; background-color: #d7d7d7; cursor: pointer; cursor: hand; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; width: 64px; height: 64px; } .boton:hover { background-color: rgb(128,128,128); } .bactivo { position: absolute; background-color: yellow; cursor: pointer; cursor: hand; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; width: 64px; height: 64px; }</style></head>    
<body style="margin: 0; padding: 0;">
<video id="video" class="rotado" style="background: #D0D0D0 ;width:512px;height:384px;position: absolute; left: 0px; top: 64px;" playsinline="" autoplay=""></video>
<canvas id="canvas384" class="rotado" width="384px" height="384px" style="position:absolute; left:81px;top:81px;width:486px;height:486px;"></canvas>
<svg id="publi4d" style="background-color: black; position:absolute; left: 649px;top:0px;width:15px;height:649px;" viewBox="0 0 512 512"></svg>
<svg id="panel4d" class="rotado" style=" outline: rgb(64,64,64) solid 1px;position:absolute; left:0px;top:0px;width:649px;height:649px;" viewBox="0 0 512 512">    <defs>                <linearGradient id="grado" x1="0%" y1="0%" x2="100%" y2="0%">                      <stop offset="0%" style="stop-color: rgb(64,64,64);stop-opacity:1"></stop>                      <stop offset="100%" style="stop-color: white;stop-opacity:1"></stop>                </linearGradient>                <linearGradient id="gradn" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="0%">                        <stop offset="0%" style="stop-color: rgb(64,64,64);stop-opacity:1"></stop>                        <stop offset="100%" style="stop-color: white;stop-opacity:1"></stop>                  </linearGradient>                             <linearGradient id="grads" gradientTransform="rotate(90)" x1="0%" y1="0%" x2="100%" y2="0%">                        <stop offset="0%" style="stop-color: white;stop-opacity:1"></stop>                        <stop offset="100%" style="stop-color: rgb(64,64,64);stop-opacity:1"></stop>                  </linearGradient>                <linearGradient id="grade" x1="0%" y1="0%" x2="100%" y2="0%">                        <stop offset="0%" style="stop-color: white;stop-opacity:1"></stop>                        <stop offset="100%" style="stop-color: rgb(64,64,64);stop-opacity:1"></stop>                  </linearGradient>                       </defs><polyline shape-rendering="geometricPrecision" id="__tapao" points="0,0 64,64 64,448 0,512 0,0" style="fill: url(#grado); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__tapae" points="512,0 448,64 448,448 512,512 512,512" style="fill: url(#grade); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__tapan" points="0,0 512,0 448,64 64,64 0,0" style="fill: url(#gradn); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__tapas" points="0,512 64,448 448,448 512,512 0,512" style="fill: url(#grads); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax0" points="64,64 64,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay0" points="64,64 448,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan0" points="0,0 64,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas0" points="0,512 64,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae0" points="512,0 448,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao0" points="0,0 64,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax1" points="112,64 112,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay1" points="64,112 448,112" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan1" points="64,0 112,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas1" points="64,512 112,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae1" points="512,64 448,112" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao1" points="0,64 64,112" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax2" points="160,64 160,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay2" points="64,160 448,160" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan2" points="128,0 160,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas2" points="128,512 160,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae2" points="512,128 448,160" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao2" points="0,128 64,160" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax3" points="208,64 208,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay3" points="64,208 448,208" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan3" points="192,0 208,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas3" points="192,512 208,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae3" points="512,192 448,208" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao3" points="0,192 64,208" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax4" points="256,64 256,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay4" points="64,256 448,256" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan4" points="256,0 256,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas4" points="256,512 256,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae4" points="512,256 448,256" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao4" points="0,256 64,256" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax5" points="304,64 304,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay5" points="64,304 448,304" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan5" points="320,0 304,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas5" points="320,512 304,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae5" points="512,320 448,304" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao5" points="0,320 64,304" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax6" points="352,64 352,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay6" points="64,352 448,352" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan6" points="384,0 352,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas6" points="384,512 352,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae6" points="512,384 448,352" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao6" points="0,384 64,352" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax7" points="400,64 400,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay7" points="64,400 448,400" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan7" points="448,0 400,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas7" points="448,512 400,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae7" points="512,448 448,400" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao7" points="0,448 64,400" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallax8" points="448,64 448,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallay8" points="64,448 448,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallan8" points="512,0 448,64" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallas8" points="512,512 448,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallae8" points="512,512 448,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__mallao8" points="0,512 64,448" style="fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__cuadro" points="179,152 342,152 342,422 179,422 179,152" style="fill: none; stroke: lime; stroke-width: 1; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__juli4" points="259,422 259,388 259,355 260,321 260,298 260,276 260,250 260,220 227,220 193,229 174,253 169,287 174,253 193,229 227,220 260,220 293,222 326,231 346,251 351,287 346,251 326,231 293,222 260,220 260,185 260,152 226,155 193,186 175,220 170,253 169,287 173,320 185,355 204,388 226,406 259,422 294,405 315,387 337,355 347,321 351,287 350,253 344,220 328,186 293,156 260,152 " style="fill: none ; stroke: red; stroke-width: 1; stroke-linecap: round;stroke-linejoin:  round;"></polyline><polyline shape-rendering="geometricPrecision" id="20230102142221538" points="255,448 255,399 255,352 256,304 256,272 256,240 256,204 256,160 209,161 161,174 133,208 126,256 133,208 161,174 209,161 256,160 303,163 350,176 379,205 385,256 379,205 350,176 303,163 256,160 256,111 256,64 208,68 160,112 135,160 128,208 126,256 132,303 150,352 177,399 208,425 255,448 304,424 334,398 366,352 380,304 385,256 384,208 376,160 352,112 303,69 256,64" style="fill: none; stroke: #0000FF; stroke-width: 1; stroke-linecap: round;stroke-linejoin: round;"></polyline><polyline shape-rendering="geometricPrecision" id="__Vector1" points="250,152 342,162 274,422 179,265 250,152" style="fill: none; stroke: #000000; stroke-width: 1; stroke-linecap: round;stroke-linejoin: round;"></polyline></svg>
<svg id="hoja4d" style=" outline: rgb(64,64,64) solid 1px;position:absolute; left:0px;top:0px;width:649px;height:649px;" viewBox="0 0 512 512">    <polyline shape-rendering="geometricPrecision" id="guia" points="0,511 222,511 222,512 0,512" style="fill: #8a0303; stroke: #8a0303; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round;"></polyline>    <text shape-rendering="geometricPrecision" id="mensaje" x="4" y="490" style="fill: white; stroke: black; font-family:monospace;font-size:30px">Conectados: 1</text><text shape-rendering="geometricPrecision" id="__puntaje1" x="232" y="30" style="fill: #FFFFFF; stroke: #FF0000;font-family:monospace;font-size:30px">10%</text></svg>
<canvas id="canvas64" class="boton rotado" onclick="foto4d()" width="64px" height="64px" style="left: 0px; top: 0px; width: 64px; height: 64px;"></canvas>
<script>
var canvas1=document.getElementById("canvas384"); var canvas4d = canvas1.getContext("2d"); var canvas2 = document.getElementById("canvas64");var canvas24d = canvas2.getContext("2d");const video = document.getElementById("video");const constraints = { audio: false,video: { width: { ideal: 512 }, height: { ideal: 384 } }};var localstream, elId;videoON(); async function videoON() { try { const stream = await navigator.mediaDevices.getUserMedia(constraints); exitosa(stream);} catch (e) {                 alert(`navigator.getUserMedia error:${e.toString()}`);}} function exitosa(stream) { window.stream = stream; video.srcObject = stream; localstream = stream;}; function videoOFF(){ video.pause();  video.currentTime = 0; localstream.getTracks()[0].stop(); } 
tapas(); malla4d(); 
function tapas()  {var pts= "0,0 64,64 64,448 0,512 0,0";poli4d("__tapao", pts, "fill: url(#grado); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= "512,0 448,64 448,448 512,512 512,512";poli4d("__tapae", pts, "fill: url(#grade); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= "0,0 512,0 448,64 64,64 0,0";poli4d("__tapan", pts, "fill: url(#gradn); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= "0,512 64,448 448,448 512,512 0,512";poli4d("__tapas", pts, "fill: url(#grads); stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ; }function malla4d(){var lado=512, partes=8, p4d=8; var cara=lado/partes, prop=lado/p4d, p1=(lado-2*prop)/partes, p2=(lado-prop);for(var i= 0; i <= partes ;i=i+1){var propi=(prop+i*p1),pi=cara*i;pts= propi +","+prop + " "+ propi+ ","+p2;poli4d("__mallax"+i, pts, "fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= prop+","+ propi + " "+p2+","+propi;poli4d("__mallay"+i, pts, "fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= pi +",0 "+propi+","+prop;poli4d("__mallan"+i, pts, "fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= pi +",512 "+propi+","+p2;poli4d("__mallas"+i, pts, "fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= "512,"+ pi +" "+p2 +","+ propi;poli4d("__mallae"+i, pts, "fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;pts= "0,"+ pi +" "+prop+","+ propi;poli4d("__mallao"+i, pts, "fill: none; stroke: black; stroke-width: 0.3; stroke-linecap: round;stroke-linejoin: round;") ;} }   
panel(); window.addEventListener('resize', function(event){panel();}); 
function panel(){ 
    var lado, resto, pan, id; 
    var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth);    
    var alto =  Math.max(document.documentElement.clientHeight, window.innerHeight);   
    if (ancho>alto){
        lado=alto; 
        resto=ancho-lado;
        pan="HOR";
        document.getElementById('publi4d').setAttribute('style', 'background-color: black; position:absolute; left: '+lado+'px;top:0px;width:'+resto+'px;height:'+lado+'px;');
    } else {
        lado=ancho; 
        resto=alto-lado;
        pan="VER";
        document.getElementById('publi4d').setAttribute('style', 'background-color: black; position:absolute; left: 0px;top: '+lado+'px;width:'+ lado+'px;height:'+resto+'px;');
    } 	    
    document.getElementById('canvas384').setAttribute('style', 'position:absolute; left:'+ parseInt(lado*64/512) +'px;top:'+ parseInt(lado*64/512) +'px;width:'+ parseInt(lado*384/512) +'px;height:'+ parseInt(lado*384/512) +'px;');
    document.getElementById('panel4d').setAttribute('style', ' outline: rgb(64,64,64) solid 1px;position:absolute; left:0px;top:0px;width:'+lado+'px;height:'+lado+'px;');
    document.getElementById('hoja4d').setAttribute('style', ' outline: rgb(64,64,64) solid 1px;position:absolute; left:0px;top:0px;width:'+lado+'px;height:'+lado+'px;');
}

var t=0; var startTime, endTime; startTime = new Date();
function pulso4d(){try {var inidate = new Date();instante = inidate.getFullYear() + "/" + ("0" + (inidate.getMonth() + 1)).slice(-2) + "/" + ("0" + inidate.getDate()).slice(-2) +" " + ("0" + inidate.getHours()).slice(-2) +":" + ("0" + inidate.getMinutes()).slice(-2) +":" + ("0" + inidate.getSeconds()).slice(-2);
canvas24d.drawImage(video, 64, 0, 384, 384, 0, 0, 64, 64);

var findate = new Date(); instante = findate.getFullYear() + "/" + ("0" + (findate.getMonth() + 1)).slice(-2) + "/" + ("0" + findate.getDate()).slice(-2) +" " + ("0" + findate.getHours()).slice(-2) +":" + ("0" + findate.getMinutes()).slice(-2) +":" + ("0" + findate.getSeconds()).slice(-2);if(findate-inidate){var fps=parseInt(1000/(findate-inidate));if (t >= 1000) {endTime = new Date();var timeDiff = endTime - startTime; timeDiff /= 1000;var seconds = Math.round(timeDiff);t=0;} else {t=t+19;pruta= "0,511 " + parseInt(t/2) + ",511" + " " + parseInt(t/2) + ",512 0,512";	          		poli4d("guia", pruta,"fill: #8a0303; stroke: #8a0303; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round;");}}elId = window.requestAnimationFrame(pulso4d);} catch (e) {alert(`Error en pulso4d :${e.toString()}`)}} pulso4d();

const socket = io();
socket.on("poli", function(msg){
    var array = msg.split("|");    
    poli4d(array[0],array[1],array[2]);
    document.getElementById("mensaje").textContent="Conectados: " + array[3]; 
});

socket.emit("poli","' + msg + '");

function foto4d(){ 
    canvas4d.drawImage(video,64,0,384,384,0, 0, 384, 384); 
    document.getElementById("canvas384").style.display = "block";videoOFF();
}

var t=0; var startTime, endTime;
    startTime = new Date();
    var canvas384_2d = document.getElementById("canvas384").getContext("2d");
    videoON();tapas(); malla4d();ia4d();
    var puntos="255,448 255,399 255,352 256,304 256,272 256,240 256,204 256,160 209,161 161,174 133,208 126,256 133,208 161,174 209,161 256,160 303,163 350,176 379,205 385,256 379,205 350,176 303,163 256,160 256,111 256,64 208,68 160,112 135,160 128,208 126,256 132,303 150,352 177,399 208,425 255,448 304,424 334,398 366,352 380,304 385,256 384,208 376,160 352,112 303,69 256,64";
    var estilo="fill: none; stroke: #FF0000; stroke-width: 1; stroke-linecap: round;stroke-linejoin: round;";
    poli4d("__juli4", puntos, estilo) ;
    var pixels=0;   
    function ia4d(){
        canvas384_2d.drawImage(video,64,0,384,384,0, 0, 384, 384); 
        var imageData = canvas384_2d.getImageData(0, 0, 384, 384); 
        var inidate = new Date(); instante = inidate.getFullYear() + "/" + ("0" + (inidate.getMonth() + 1)).slice(-2) + "/" + ("0" + inidate.getDate()).slice(-2) +" " + ("0" + inidate.getHours()).slice(-2) +":" + ("0" + inidate.getMinutes()).slice(-2) +":" + ("0" + inidate.getSeconds()).slice(-2);
        pixels=0;
        data = piel(imageData.data);
        //data = gris(imageData.data);
        //data = denominador(imageData.data);
        //data = blancoynegro(imageData.data);
        text4d("__puntaje1", 232, 30 ,"fill: #FFFFFF; stroke: #FF0000;font-family:monospace;font-size:30px",parseInt(100*pixels/147456) +"%"); 
        var findate = new Date(); instante = findate.getFullYear() + "/" + ("0" + (findate.getMonth() + 1)).slice(-2) + "/" + ("0" + findate.getDate()).slice(-2) +" " + ("0" + findate.getHours()).slice(-2) +":" + ("0" + findate.getMinutes()).slice(-2) +":" + ("0" + findate.getSeconds()).slice(-2);
        if(findate-inidate){
            if (t >= 1000) {
                endTime = new Date();
                var timeDiff = endTime - startTime;
                timeDiff /= 1000;
                var seconds = Math.round(timeDiff);
                t=0;
            } else {
                t=t+(findate-inidate); 
                pruta= '0,511 ' + parseInt(t/2) + ',511' + ' ' + parseInt(t/2) + ',512 0,512';	
                document.getElementById('guia').setAttribute('points', pruta);           
            }
        } 
        canvas384_2d.putImageData(imageData, 0, 0);
        elId = window.requestAnimationFrame(ia4d);
    }
    function rgb2hsv (r,g,b) {
        var computedH = 0;
        var computedS = 0;
        var computedV = 0;
        var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
        var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
        var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
        if ( r==null || g==null || b==null || isNaN(r) || isNaN(g)|| isNaN(b) ) { return [0,0,computedV]; }
        if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) { return [0,0,computedV];}
        r=r/255; g=g/255; b=b/255;
        var minRGB = Math.min(r,Math.min(g,b));
        var maxRGB = Math.max(r,Math.max(g,b));
        if (minRGB==maxRGB) {    computedV = minRGB;    return [0,0,computedV];    }
        var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
        var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
        computedH = 60*(h - d/(maxRGB - minRGB));
        computedS = (maxRGB - minRGB)/maxRGB;
        computedV = maxRGB;
        return [computedH,computedS,computedV];
    }
    function sigmoide(valor) {
        return (1/(1+Math.pow(Math.E, -valor)));
    }
    function RelU(valor){
        return Math.max(valor, 0);
    }
    function blancoynegro(data){
        var k=data.length;
        while (k>0){
            promedio=parseInt((data[k] + data[k+1] + data[k+2])/3);
           // data[k+2]=parseInt(255*sigmoide(promedio/255));data[k+1]=parseInt(255*sigmoide(promedio/255));data[k]=parseInt(255*sigmoide(promedio/255));
           data[k+2]=parseInt(255*RelU(promedio/255));data[k+1]=parseInt(255*RelU(promedio/255));data[k]=parseInt(255*RelU(promedio/255));
            k=k-4;
        }
        return data;
    }
    function gris(data){
        var k=data.length;
        while (k>0){
           gris1=parseInt(0.3 * data[k] + 0.59 * data[k+1] + 0.11 * data[k+2]);
           data[k+2]=gris1;data[k+1]=gris1;data[k]=gris1;
           k=k-4;
        }
        return data;
    }
    function denominador(data){
        var k=data.length;
        while (k>0){
            data[k+3]=data[k]+data[k+1]+data[k+2];
            data[k]=data[k]/data[k+3]; 
            data[k+1]=data[k+1]/data[k+3];  
            data[k+2]=data[k+2]/data[k+3]; 
            data[k]=parseInt(data[k]*data[k+3]); 
            data[k+1]=parseInt(data[k+1]*data[k+3]);  
            data[k+2]=parseInt(data[k+2]*data[k+3]); 
            data[k+3]=255;
            k=k-4;
        }
        return data;
    }
    function piel(data){
        var n = [], minx=384,miny=384,maxx=0,maxy=0,x,y,p1,p2,p3,p4,pmx,pmy,h; 
        var k=data.length;
        while (k>0){
            if((data[k+2]+data[k+1]+data[k])/3 < 4){              data[k]=0; data[k+1]=255; data[k+2]=0;  }
            var x = ((k / 4) % 384) + 64;
            var y = (Math.floor((k / 4) / 384)) + 64; 
            R=data[k];G=data[k+1];B=data[k+2];A=data[k+3];
            var r=R/(R+G+B);
            var g=G/(R+G+B);
            var l1=-0.776 * (r*r) + 0.5601 * r + 0.2123;
            var l2=-0.776 * (r*r) + 0.5601 * r + 0.1766;
            HSV= rgb2hsv(R,G,B);
            H=HSV[0];S=HSV[1];V=HSV[2];
            Y = 0.299*R + 0.287*G + 0.11*B;
            Cr= R - Y;
            Cb = B - Y;
            if((H>= 0.0 && H<= 50.0 && S>= 0.23 && S<= 0.68 && R > 95 && G>40 && B>20 && R > G && R > B && Math.abs(R - G) > 15 && A > 15) || ( R > 95 && G > 40 && B >20 && R > G && R > B && Math.abs(R - G) > 15 && A > 15 && Cr > 135 && Cb > 85 && Y > 80 && Cr <= (1.5862*Cb) + 20 && Cr >= (0.3448*Cb) + 76.2069 && Cr >= (-4.5652*Cb) + 234.5652 && Cr <= (-1.15*Cb) + 301.75 && Cr <= (-2.2857*Cb) + 432.85 ) ){
                pixels=pixels+1;
                //data[k+2]=20;data[k+1]=40;data[k]=95;  
                if (x<minx){minx=x; p4= x + "," + y;};
                if (y<miny){miny=y; p1= x + "," + y;};
                if (x>maxx){maxx=x; p2= x + "," + y;};
                if (y>maxy){maxy=y; p3= x + "," + y;};
                
            } else {
               // if ((l1 <= g <= l2) && (R>=20 && G>=20 && B>=20) ){                    data[k+2]=0;data[k+1]=255;data[k]=0;                  
               // } else {
                    data[k+2]=255;data[k+1]=255;data[k]=255;
               // }
                
            }
            k=k-4;
        }
        sty="fill: none; stroke: #000000; stroke-width: 1; stroke-linecap: round;stroke-linejoin: round;";
        pts=p1 + " " + p2 + " " + p3 + " " + p4 + " " + p1;
        if (pts!=' '){
            poli4d("__Vector1", pts, sty) ; 
        }
        pts=minx+','+miny + ' ' + maxx+','+ miny + ' ' + maxx+','+maxy + ' ' + minx +',' + maxy +' ' + minx+','+miny;
        poli4d('__cuadro',pts,'fill: none; stroke: lime; stroke-width: 1; stroke-linecap: round;stroke-linejoin: round;');
        var px=parseInt(minx+(maxx-minx)/2);
        var py=parseInt(miny+(maxy-miny)/2);
        var py=parseInt(miny);
        pts="255,448 255,399 255,352 256,304 256,272 256,240 256,204 256,160 209,161 161,174 133,208 126,256 133,208 161,174 209,161 256,160 303,163 350,176 379,205 385,256 379,205 350,176 303,163 256,160 256,111 256,64 208,68 160,112 135,160 128,208 126,256 132,303 150,352 177,399 208,425 255,448 304,424 334,398 366,352 380,304 385,256 384,208 376,160 352,112 303,69 256,64 ";
        pts=escala(pts,maxy,miny);
        pts=rutarelativa(px,py,pts,25);
        poli4d('__juli4', pts, 'fill: none ; stroke: red; stroke-width: 1; stroke-linecap: round;stroke-linejoin:  round;') ; 

        return data;
    }
function rutarelativa(x,y,pts,rel){
        var dx=0,dy=0,pr;
        var puntos=pts.split(" ");
        if(puntos[rel]){
            pr=puntos[rel].split(",");
            dx= parseInt(pr[0]) - x;
            dy= parseInt(pr[1]) - y;
        }
        puntos.forEach(punto=>{ 
            pr=punto.split(",");
            var px=parseInt(pr[0])-dx;
            var py=parseInt(pr[1])-dy;
            var puntosantes  =parseInt(pr[0])+','+parseInt(pr[1]);
            var puntosdespues= px + ',' + py ;
            pts = pts.replace(puntosantes, puntosdespues);
        })
        return pts;    
    }
    function escala(arreglo,maxy,miny){    
        proporcion=(maxy-miny)/384;
        desplazamiento=0;
        var ruta="";    
        var puntos = arreglo.split(' ');    
        puntos.forEach(punto=>{        
            pto=punto.split(',');        
            if (pto[1]){            ruta+= Math.round((pto[0]*proporcion)-desplazamiento)+','+Math.round((pto[1]*proporcion)-desplazamiento)+' ';                    }
        });    
        return ruta;
    }


function poli4d(pid, pts, sty) {
    if (pts.indexOf("undefined")<0 && pts.indexOf("NaN")<0){    
        var o4d; if (document.getElementById(pid)) {o4d = document.getElementById(pid);} else {o4d = document.createElementNS("http://www.w3.org/2000/svg", "polyline");o4d.setAttribute("shape-rendering", "geometricPrecision"); o4d.setAttribute("id", pid);}     o4d.setAttribute("points", pts); if (sty !== " ") {o4d.setAttribute("style", sty);} if (!document.getElementById(pid)) {document.getElementById("panel4d").appendChild(o4d); } 
    }
}
function text4d(pid, px, py, sty, txt) {var o4d;if (document.getElementById(pid)) {o4d = document.getElementById(pid);} else {o4d = document.createElementNS("http://www.w3.org/2000/svg", "text");o4d.setAttribute("shape-rendering", "geometricPrecision");o4d.setAttribute("id", pid);}o4d.setAttribute("x", px);o4d.setAttribute("y", py);if (sty !== " ") {o4d.setAttribute("style", sty);}o4d.textContent = txt;if (!document.getElementById(pid)) {document.getElementById("hoja4d").appendChild(o4d);}}
</script>
</body></html>