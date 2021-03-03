var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("selfie_textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("selfie_textbox").innerHTML=content;
    if (content=="take my selfie") {
        console.log("taking your selfie in 5 seconds")
        speak();  
    }
}

function speak()
{
    var synth=window.speechSynthesis;
    //speak_data=document.getElementById("selfie_textbox").value;//
    speak_data="taking your selfie in 5 seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach( '#camera' );
    setTimeout(function (){
        take_snapshot();
        save();
    }, 5000);
}
camera=document.getElementById("camera");
   Webcam.set({
    width:360,
    height:220,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(Data_uri){
        document.getElementById("result").innerHTML="<img id='Image_of_someone' src='"+Data_uri+"'/>";
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("Image_of_someone");
    link.href=image;
    link.click();
}