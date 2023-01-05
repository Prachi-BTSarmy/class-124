function setup(){
    canvas = createCanvas(550,550);
    canvas.position(580,150);
    video = createCapture(VIDEO);
    video.size(500, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);}
}