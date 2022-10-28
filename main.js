var mouseEvent = "empty";
canvas = document.getElementById("Mycanvas");
ctx = canvas.getContext("2d");
color = "blue";
width_of_the_line = 3;
radius = 5;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    mouseEvent = "mousedown";  
color = document.getElementById("color").value;
width_of_the_line = document.getElementById("width_of_the_line").value;
radius = document.getElementById("radius").value;
console.log("mousedown");


}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

mouseEvent = "mouseup";
console.log("mouseup");

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

mouseEvent = "mouseleave";
console.log("mouseleave");
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

console.log("mousemoved");


if (mouseEvent == "mousedown") 
{

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_the_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,
 2 * Math.PI);
    ctx.stroke();

}


}
