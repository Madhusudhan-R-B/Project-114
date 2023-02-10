function preload(){

}

function setup(){
    canvas = createCanvas(650,500);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,100,50,440,400);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(0,255,0);
    stroke(0,255,0);
    rect(90,25,460,50);
    rect(90,405,460,50);
    rect(25,90,50,300);
    rect(565,90,50,300);
}