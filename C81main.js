canvas = document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stro,keStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 ,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = color;
ctx. lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousesown", my_mousedown);
function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").ariaValueMax;
    console.log(color);
    //addition activitty ends
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth =2;
    ctx.arc(mouse_x, mouse_y, 40 , 0 , 2*Math.PI);
    ctx.stroke();
}
