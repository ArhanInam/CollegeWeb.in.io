var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("Vbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("Vbox").innerHTML = Content;
    console.log(Content);
        speak();
}


function speak()
{
    var synth = window.speechSynthesis ;
    speak_data = document.getElementById("Vbox").value ;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format : 'png',
    png_quality: 90
});

camera = document.getElementById("camera");