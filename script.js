//declaring these variables for the console
var heroScore = 0;
var villainScore = 0;
var questionCount = 0;

var result = document.getElementById("result");
  
//for the restart button
var restart = document.getElementById("restart");

//declaring variables for the 5 questions
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var btn = document.getElementById('btn');



//declaring the variable needed for the click for result  button
var displayResult = document.getElementById("displayResult");

//starting place of the heading 
var start = document.getElementById("starting");
                                   
//questions listen for a click and assign the corresponding value to it
q1a1.addEventListener("click", hero);
q1a2.addEventListener("click", villain);

q2a1.addEventListener("click", villain);
q2a2.addEventListener("click", hero);

q3a1.addEventListener("click", hero);
q3a2.addEventListener("click", villain);

q4a1.addEventListener("click", hero);
q4a2.addEventListener("click", villain);

q5a1.addEventListener("click", villain);
q5a2.addEventListener("click", hero);

reset.addEventListener("click", restartQuiz);
displayResult.addEventListener("click", display);

//disables the click for results button
document.getElementById("displayResult").disabled = true;

//functions for hero and villain score to increase by 1
function hero() {
  heroScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " heroScore = " + heroScore);
  if (questionCount == 5) {
    console.log("The quiz is done.");
    //enables click for results button if all questions are answered
    document.getElementById("displayResult").disabled = false;
    }
  else {
    document.getElementById("displayResult").disabled = true;
  }
}

function villain() {
  villainScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " villainScore = " + villainScore);
  //enables click for results button if all questions are answered
  if (questionCount == 5) {
    console.log("The quiz is done.");
    document.getElementById("displayResult").disabled = false; 
  }
  else {
    document.getElementById("displayResult").disabled = true;
  }
}

//enables all buttons after restart is clicked
function enableBtn() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  //click for results gets disabled again
  document.getElementById("displayResult").disabled = true;
}

//disables buttons after clicked
function disableBtnOne() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
}
function disableBtnTwo(){
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
}
function disableBtnThree() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
}
function disableBtnFour(){
   document.getElementById("q4a1").disabled = true;
   document.getElementById("q4a2").disabled = true;
}
function disableBtnFive(){
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
}

    

//displays the results immediately after answering the last question (commented for now)
/*function updateResult() {
  if (heroScore >= 3) {
    result.innerHTML = "You are the hero. You want to save the world.";
    console.log("You are a hero!");
  } else if (villainScore >= 3) {
    result.innerHTML = "You are the villain. You want to watch the world burn.";
    console.log("You are a villain!");
  }
}
*/

//displays the results after you press the button "Click for results!"

function display() {
   if (heroScore >= 3) {
    result.innerHTML = "You are the hero. You want to save the world.";
    console.log("You are a hero!");
  } else if (villainScore >= 3) {
    result.innerHTML = "You are the villain. You want to watch the world burn.";
    console.log("You are a villain!");
  }
}

//to restart the quiz back to 0 questions answered
function restartQuiz () {
  result.innerHTML = "You are the...";
  heroScore = 0;
  villainScore = 0;
  questionCount = 0;
  console.log(" heroScore = " + heroScore + " villainScore = " + villainScore + " and questionCount = " + questionCount);
  //enables all the buttons previously disabled
 enableBtn();
  start.scrollIntoView();
}