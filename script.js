






function answer1(){
    
    document.getElementById("question1").innerHTML = "what is the sum of  5 + 5 =" + "</br></br></br>" + "<button onclick = myFunction1()  id = q1 > 10 </button></br></br>" +  "<button onclick = myFunction2()  id = q2 > 20 </button></br></br>" + "<button onclick = myFunction3()  id = q3 > 15 </button></br></br>";
 document.getElementById("start").innerHTML = "";
}
function myFunction1(){

     document.getElementById("question1").innerHTML = "correct" 
     document.getElementById("question1").style.color = "green";
    document.getElementById("start").innerHTML = "";
    document.getElementById("n001").innerHTML ="<button onclick = begin() id = begin12  > next </button> ";

   
}
function myFunction2(){
    document.getElementById("question1").innerHTML = "incorrect" ;
    document.getElementById("question1").style.color = "red";
    document.getElementById("start").innerHTML = "";
    document.getElementById("n001").innerHTML ="<p> try again </p>";
}
function myFunction3(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("question1").style.color = "red";
    document.getElementById("start").innerHTML = "";
    document.getElementById("n001").innerHTML = "<p> try again </p> ";
}
function begin() {
    document.getElementById("question1").innerHTML = "what is  the multiple of 15 * 6  ="  + "</br></br></br>" + "<button onclick = myFunction4()  id = q4 > 65 </button></br></br>" +  "<button onclick = myFunction5()  id = q5 > 90 </button></br></br>" + "<button onclick = myFunction6()  id = q5 > 120 </button></br></br>";
    document.getElementById("n001").innerHTML = "";

    
}
function myFunction4(){
    document.getElementById("question1").innerHTML = "incorrect" ;
    document.getElementById("q4").style.color = "	#FF0000";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML =/*"<button onclick = try3 ()*/"<P> try again </p> ";
}
function myFunction5(){
    document.getElementById("question1").innerHTML = "correct";
    document.getElementById("q5").style.color = "#008000";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML = "<button onclick = go() id = go  > next </button> ";
}

function myFunction6(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("q6").style.color = "	#FF0000";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML =/*"<button onclick = go()*/ "<P> try again </p>";
}
function go(){
    document.getElementById("question1").innerHTML = "what is the division of  86 / 2 ="  + "</br></br></br>" + "<button onclick = myFunction7()  id = q7 > 42 </button></br></br>" +  "<button onclick = myFunction8()  id = q8 > 45 </button></br></br>" + "<button onclick = myFunction9()  id = q9 > 43 </button></br></br>";
    document.getElementById("m001").innerHTML = "";
}
function myFunction7(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("q7").style.color = "red";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML =/*" <button onclick = finishGame() >try again </button>"*/"<P> try again </p>";
}
function myFunction8(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("q8").style.color = "red";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML =/*" <button onclick = finishGame() id = finish3 > try again </button>";*/"<P> try again </p>";
}
function myFunction9(){
    document.getElementById("question1").innerHTML = "correct";
    document.getElementById("q9").style.color = "green";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML =/*" <button onclick = finishGame() id = finish3 > correct </button>";*/"<P> try again </p>";
}

function finishGame(){
    document.getElementById("question1").innerHTML = "congratulation!   You win "  + "you are great in mathematics " + "</br></br>  " +  " THIS GAME WAS MADE BY AREESHA MUSKAN </br></br></br></br>  this game was published for kids as they will great in mathematics by playing it" 
 document.getElementById("d001").innerHTML = "";
 document.getElementById("d001").style.color = "grey";
 document.getElementById
}
function finishGame2(){
    document.getElementById("question1").innerHTML = " ";
    document.getElementById("d001").innerHTML ="";
}
