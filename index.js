var express = require('express')
var app = express()
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const fs = require('fs');
var favicon = require('serve-favicon')
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(__dirname + '/models' ));
app.use(favicon(__dirname + '/' +'Planeta4D.ico'))
app.get('/face-api.js',    (req, res)=>{res.sendFile(__dirname + '/face-api.js');});
app.get('/models/:objeto', (req, res)=>{res.sendFile(__dirname + '/models/' + req.params.objeto);});
app.get('/libjs/:objeto',  (req, res)=>{res.sendFile(__dirname + '/libjs/' + req.params.objeto);});
app.get('/login',          (req, res)=>{res.sendFile(__dirname + '/login4d.htm');});
app.get('/landing',        (req, res)=>{res.sendFile(__dirname + '/landing4d.htm');});
app.get('/',               (req, res)=>{res.sendFile(__dirname + '/4D.htm');});
app.get('/vueltas',        (req, res)=>{
	var vueltas = 0;
	var bisiesto= 0;
	var meses   = 0;
	let ts      = Date.now();
	let date_ob = new Date(ts);
	let year    = date_ob.getFullYear();
	let month   = date_ob.getMonth() + 1;
	if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){ bisiesto = 1;}
	const diaspormes = [];
	diaspormes[1] = 31;
	diaspormes[2] = 28 + bisiesto;
	diaspormes[3] = 31;
	diaspormes[4] = 30;
	diaspormes[5] = 31;
	diaspormes[6] = 30;
	diaspormes[7] = 31;
	diaspormes[8] = 31;
	diaspormes[9] = 30;
	diaspormes[10] = 31;
	diaspormes[11] = 30;
	diaspormes[12] = 31;
	for ( var i=1; i<month; i++){ meses = meses + parseInt(diaspormes[i]);}
	let dia = date_ob.getDate();
	vueltas= (year - 1) * 365.25 + meses + parseInt(dia);
	rta=parseInt(vueltas) + ' vueltas';
	res.send(rta);
});
app.get('/ayuda4d',        (req, res)=>{res.sendFile(__dirname + '/ayuda4d.htm');});
app.get('/test4d',         (req, res)=>{res.send(leedir('./Autores4D'));});
app.get('/API/:interfaz',  (req, res)=>{res.sendFile(__dirname + '/API/' + req.params.interfaz + '.htm');});
app.get('/intercolombia',  (req, res)=>{res.sendFile(__dirname + '/tableroisa.htm');});
app.get('/api4d/:objeto',  (req, res)=>{res.sendFile(__dirname + '/Autores4D/ia4d/' + req.params.objeto);});
app.get('/autores4d',      (req, res)=>{res.send(leerautores('./Autores4D'));});
app.get('/objetos4d',      (req, res)=>{res.send(leerobjetos('./Autores4D/demo4d'));});

app.post('/postear', (req, res)=>{
  var data0=req.body.data ;
  var imagen=req.body.imagen ;
  var nombre=req.body.nombre ;

  var rta="ok " ;
  res.send(rta);
});


http.listen(port, () => {  console.log(`Servidor ejecutando en http://localhost:${port}/`);});