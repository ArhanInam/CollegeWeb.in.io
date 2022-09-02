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
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
     { take_snapshot();
         save();
         }, 5000);
}









Webcam.set({
    width: 360,
    height: 250,
    image_format : 'png',
    png_quality: 90
});
camera = document.getElementById("camera");




function take_snapshot(){
    Webcam.snap(function (data_uri){


        document.getElementById("result_1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'; 

        document.getElementById("result_2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';

        document.getElementById("result_3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';


    })
}
function save() {
     link = document.getElementById("link");
      image = document.getElementById("selfie1").src ;
       link.href = image;
        link.click();
    }