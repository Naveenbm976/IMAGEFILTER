function preload(){

}

function setup(){
canvas=createCanvas(600,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
image(video,0,0,600,600);
}

function filter_tint(){
tint_color=document.getElementById("color_name").value;
tint(tint_color);
}

function take_snapshot(){
    save('dhruv.png');
}