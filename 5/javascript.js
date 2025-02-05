var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";

//X, Y
ctx.moveTo(400, 200);
//zabalera, altuera
ctx.lineTo(200, 100);
ctx.stroke();