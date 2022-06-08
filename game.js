let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;
let isStarted = false;

$(document).keypress(function () {
    if (isStarted === false) {
        $("h1").text("Level " + level);
        nextSequence();
        isStarted = true;
    }

});

$(".btn").click(function () {

    let userChosenColour = this.id;
    console.log("click" + this.id);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    // animatePress(userChosenColour);

    checkSequence(userClickedPattern.length - 1);

});

function checkSequence(index) {

    if (userClickedPattern[index] === gamePattern[index]) {
        console.log("sucess");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        console.log("Error");
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        // console.log("wrong");
        // playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        level = 0;
        gamePattern = [];
        isStarted = false;
    }

}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    let randonNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randonNumber];

    gamePattern.push(randomChosenColour);
    // console.log("netx sequence" + "#" + randomChosenColour)

    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    // console.log("sounds/" + name + ".mp3")
    // let audio = new Audio("sounds/" + name + ".mp3");
    // audio.play();

    switch (name) {

        case value = "green":
            $(".green").fadeOut(100).fadeIn(100);
            audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case value = "red":
            $(".red").fadeOut(100).fadeIn(100);
            audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case value = "yellow":
            $(".yellow").fadeOut(100).fadeIn(100);
            audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case value = "blue":
            $(".blue").fadeOut(100).fadeIn(100);
            audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

// function animatePress(currentColor) {
//     $("#" + currentColor).addClass("pressed");
//     setTimeout(function () {
//         $("#" + currentColor).removeClass("pressed");
//     }, 100);
// }


