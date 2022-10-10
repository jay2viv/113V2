function preload() {}


function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()

}
function draw() 
{


    


    fill(191, 0, 255);
    rect(40, 20, 15, 453);

    fill(191, 0, 255);
    rect(445, 20, 15, 453);

    fill(191, 0, 255);
    rect(40, 20, 431, 15);

    fill(191, 0, 255);
    rect(40, 445, 431, 15);


    fill(0, 128, 255);
    circle(50, 30, 50);

    fill(0, 128, 255);
    circle(450, 450, 50);


    fill(0, 128, 255);
    circle(50, 450, 50);


    fill(0, 128, 255);
    circle(450, 30, 50);
    

    image(video,100,100,300,300)
    
}



