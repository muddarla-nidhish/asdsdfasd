status="";
function preload(){

}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}
function Start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="stateus:detecting object";
}
function modelLoaded(){
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
    connsole.log("modelLoded");
}