var express = require('express')
var app = express()
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const fs = require('fs');

var favicon = require('serve-favicon')
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(favicon(__dirname + '/' +'Planeta4D.ico'))
app.get('/',         (req, res)=>{res.sendFile(__dirname + '/control4d.htm');});
http.listen(port, () => {  console.log(`Servidor ejecutando en http://localhost:${port}/`);});