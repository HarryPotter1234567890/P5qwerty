function preload(){

}
function setup(){
canvas = createCanvas(680, 480)
;
video = createCapture(VIDEO);
video.hide();
mint = "";
}
function draw(){
image(video, 0,0,680,480);
tint(mint);
}

function filter_tint(){
mint = document.getElementById("input1").value;
}

function save(){
    save('dontsave.png');
    
}