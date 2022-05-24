img = "";
Status = "";

function preload() {
    img = loadImage('tv-img.jfif');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Object is Detecting";
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
}
function draw() {
    image(img, 0, 0, 600, 400);
    if (Status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img, gotResult);
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Number of Objects Detected are : " + objects.length;
            percentage = Math.floor(objects[i].confidence * 100) + "%";
            label = objects[i].label;
            fill(r,g,b);
            text(label + " " + percentage, objects[i].x + 20, objects[i].y + 20)
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].height, objects[i].width);
        }
    }
}
function back(){
    window.location = "index.html";
}
function modelLoaded() {
    console.log("cocoSsd initialized");
    Status = true;
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
        console.log(results);
        objects = results;
    }