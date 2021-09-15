var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx = getContext("2d");

color = "black";
widt_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;

    radius= document.getElementById("radius").value;

    widt_of_line  = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown"

}

canvas.addEventListener("mymousemove" , my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX -  canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
}

if (mouseEvent == "mouseDown")
{
  console.log("current position of x and y coordinates = ");
  console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = widt_of_line;
  ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y radius, 0 , 2 * Math.PI);

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}