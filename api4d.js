var apidata=document.getElementById("mensaje");
var nodo="https://app9000doc-001-site1.atempurl.com/";
//var nodo="http://localhost:3000/";
var servicio="vueltas"
theUrl=nodo+servicio;
parametros="email=test";
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", theUrl, true);
xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xmlHttp.onreadystatechange = function() {  
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)  { 
        var rta=JSON.parse(xmlHttp.responseText);
        apidata.textContent="Conectados: " + rta;  
    } else {
        apidata.textContent=xmlHttp.status +'...';
        if(xmlHttp.status==404) {
            apidata.textContent="Servicio no encontrado .!";
        }
        if(xmlHttp.status==0) {
            apidata.textContent="Sin conexión .!";
        }        
    }
}
xmlHttp.send(parametros);