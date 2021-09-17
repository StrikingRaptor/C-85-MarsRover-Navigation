canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=100;

rover_x=10;
rover_y=10;

rover_image="rover.png";

nasa_mars_img_array=["mars.jpg","MarsImg2.jpg","MarsImg3.jpg","MarsImg4.jpg"];
random_img_number=Math.floor(Math.random()*4);
background_image=nasa_mars_img_array[random_img_number];

function addImage(){
background_imgTag=new Image();
background_imgTag.onload=uploadBg;
background_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadR;
rover_imgTag.src=rover_image;
}
function uploadBg(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadR(){
ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_height,rover_width);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 keyPressed=e.keyCode;
 console.log(keyPressed);
 
    if(keyPressed=='37'){
    left();
    console.log("leftkeyPressed");
 }
    if(keyPressed=='38'){
        up();
   console.log("upkeyPressed");
    }
    if(keyPressed=='39'){
        right();
       console.log("rightkeyPressed");
    }
    if(keyPressed=='40'){
            down();
           console.log("downkeyPressed");
        }}

function up(){
   if(rover_y >=10){
      rover_y=rover_y-10;
      console.log("When up arrowkey is pressed,x= "+rover_x+" y="+rover_y);
      uploadBg();
      uploadR();
   }
}
function down(){
   if(rover_y <=500){
      rover_y=rover_y+10;
      console.log("When down arrowkey is pressed,x="+rover_x+" y="+rover_y);
      uploadBg();
      uploadR();
   }
}
function right(){
   if(rover_x <=700){
      rover_x=rover_x+10;
      console.log("When right arrowkey is pressed,x="+rover_x+" y="+rover_y);
      uploadBg();
      uploadR();
   }
}
function left(){
   if(rover_x >=10){
      rover_x=rover_x-10;
      console.log("When left arrowkey is pressed,x="+rover_x+" y="+rover_y);
      uploadBg();
      uploadR();
   }
}