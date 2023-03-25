x = 0;
y = 0;
var screenwidth = 0;
var screenheight = 0;
apple = "";
draw_apple = "";
speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    console.log(x);
    console.log(y);
    console.log(screenwidth);
    console.log(screenheight);
    console.log(apple);
    console.log(draw_apple);
    console.log(speak_data);
    console.log(to_number);
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    draw_apple = "set";
  }
  else{
    draw_apple = "The speech has not recognized a number";
  }

}

function setup() {
 screenwidth = window.innerWidth;
 screenheight = window.innerHeight;
 canvas = createCanvas(screenwidth,screenheight - 150);
 canvas.position(100,100);
}

function draw() {
  if(draw_apple == "set")
  {
    console.log(to_number);
    speak_data = document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1; i <= to_number; i++){
x = Math.floor(Math.random()* 700);
y = Math.floor(Math.random()* 400);
image("apple.png", x ,y, 50, 50);
    }
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload(){
  apple = loadImage("apple.png");
}

