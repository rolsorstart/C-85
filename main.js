canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
roverheight=90;
roverwidth=100;
rover_x=10;
rover_y=10;
backgroundimage="mars.jpg";
roverimage="rover.png";
function add(){
    bg=new Image();
    bg.onload=uploadbackground;
    bg.src=backgroundimage;

    r=new Image();
    r.onload=uploadrover;
    r.src=roverimage;
}
function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(r,rover_x,rover_y,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up is pressed,x="+rover_x+",y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down is pressed,x="+rover_x+",y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right is pressed,x="+rover_x+",y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when right is pressed,x="+rover_x+",y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}