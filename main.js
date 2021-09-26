function soundClassify(){
    navigator.mediaDevices.getUserMedia({
       audio:true 
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ebdXozvWY/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomNumberR=Math.floor(Math.random()*255)+1;
        randomNumberG=Math.floor(Math.random()*255)+1;
        randomNumberB=Math.floor(Math.random()*255)+1;
        document.getElementById("resulting").innerHTML='Animal--'+results[0].label;
        document.getElementById("resultTwo").innerHTML='Animal Sound--'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("resulting").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        document.getElementById("resultTwo").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        img1= document.getElementById("earPic");
        img2= document.getElementById("cat.jpg");
        img3= document.getElementById("dog.jpg");
    }
