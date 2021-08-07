canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=5;
ctx.rect(200,150,450,210);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(320,220,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(420,220,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(520,220,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(370,260,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(470,260,40,0,2*Math.PI);
ctx.stroke();
