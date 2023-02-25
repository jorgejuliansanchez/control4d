//vueltas4d.js
var vueltas=0;
var bisiesto=0;
var meses =0;
let ts = Date.now();
let date_ob = new Date(ts);
let year = date_ob.getFullYear();
let month = date_ob.getMonth() + 1;
if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
	bisiesto = 1;
}
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
for ( var i=1; i<month; i++){
     meses = meses + parseInt(diaspormes[i]);
}
let dia = date_ob.getDate();
vueltas= (year - 1) * 365.25 + meses + parseInt(dia);
console.log(vueltas);
