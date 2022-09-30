canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function Add()
{
    background_imgTag = new Image();
    background_imgTag.onLoad = uploadBackground();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onLoad = uploadRover();
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_Keydown);
function my_Keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        up();
        console.log("Up");
    }
    if (keyPressed == '40'){
        down();
        console.log("Down");
    }
    if (keyPressed == '37'){
        left();
        console.log("Left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = "+ rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(rover_y <= 550)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(rover_x <= 750)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}