
var buttonColours = ["red", "blue", "green", "yellow"]; //step 3

var gamePattern = []; //step 5

var userClickedPattern = []; //step 9

var started = false; // step 19

var level = 0; //step 20

$(document).keypress(function(){  // step 21
  if(!started){

    $("#level-title").text("Level " + level);  //step 22
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() { // step 10
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour); // step11

    playSound(userChosenColour); //step 15

    animatePress(userChosenColour); // Step 19

    checkAnswer(userClickedPattern.length-1); //step 26
});

function checkAnswer(currentLevel){ // step 25

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){ //step 27

    console.log("success");

    if(userClickedPattern.length === gamePattern.length){ // step 28

      setTimeout(function(){ //step 29
        nextSequence();
      }, 1000);
    }
  } else{
    console.log("wrong");

    playSound("wrong"); //step 31

    $("body").addClass("game-over"); //step 32
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 500);

    $("#level-title").text("Game Over, Press Any Key to Restart"); //step 33

    startOver(); //step 35
  }
}


function nextSequence(){ //step 1

  userClickedPattern = []; //step 30

  level++;  //step 23

  $("#level-title").text("Level " + level); //step 24

  var randomNumber = Math.floor(Math.random() * 4); //step 2
  var randomChosenColour = buttonColours[randomNumber]; // step 4
  gamePattern.push(randomChosenColour); //step 6

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //step 7

  playSound(randomChosenColour); //step 14

}

function playSound(name){ //step 12
  var music = new Audio("sounds/" + name + ".mp3"); //step 8 / 13
  music.play();
}

function animatePress(currentColor){ // step 16
  $("#" + currentColor).addClass("pressed"); //step 17

  setTimeout(function () { //step 18
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver(){ //step 34
  level = 0;
  gamePattern = [];
  started = false;
}
