function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 210, 150, 240, 210);
    
    
     fill(0,128,0); 
     stroke(128,0,0); 
     rect(90,40,460,20); 
     rect(90,420,460,20);
     rect(40,40,20,400); 
     rect(580,40,20,400)

     fill(128,0,0);
     stroke(128,0,0);
     circle(60,40,80);
     circle(585,40,80);
     circle(585,420,80);
     circle(60,420,80);
}