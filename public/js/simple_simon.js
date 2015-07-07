"use strict";

// declaring the buttons array and empty sequences
var buttons = [btn1, btn2, btn3, btn4];
var simonSeq = [];
var yourSeq = [];
var userIndex = 0;

// animation function
function animateSquare(square){
    $(square).animate({
        opacity: 0.25,
        top: "+=5",
        left: "+=5"
    }, 300);
    $(square).animate({
        opacity: 1,
        top: "-=5",
        left: "-=5",
        "box-shadow": 0
    }, 300);
};

// running the randomized sequence
function playSimonSeq() {
    var i=0;
    var intervalId = setInterval(function() {
        if(i>=simonSeq.length){
            clearInterval(intervalId);
        }
        animateSquare(buttons[simonSeq[i]]);
        i++
    }, 600); 
    // yourSeq = []; 
    $('.round').html('Round: ' + simonSeq.length);
};

// selecting random numbers and pushing to simon seq
function getRandom() {
    var decision = Math.floor((Math.random() * 4));

    simonSeq.push(decision);
    console.log("Simon: [" + simonSeq + "]");
};

// disables start button
function disableStart() {
    $('#start').off('click');
};

// adds a new value to the simon array
function simonsTurn(){
    getRandom();
    playSimonSeq();
    yourSeq = [];
};

// listens for the start button and runs the Simon function
function clickStart() {
    $('#start').click(function(){
        enableStart();
    });  
};

// initial start button functionality
function enableStart() {
    buttonBlackout();
    getRandom();
    playSimonSeq();
    disableStart();
}

// disables 4 buttons
function disableButtons() {
    $('.button').off('click');
};

// disables all buttons while animating
function buttonBlackout() {
        //      MOCKUP
        // off();
        // setTimeout(enable, simonSeq.length
    disableStart();
    disableButtons();
    
    setTimeout(clickStart, (simonSeq.length * 1000 + 1));
    setTimeout(enableButtons, (simonSeq.length * 1000 + 1));
};

// enables color buttons and pushs to your array
function enableButtons() {
    // listens for user clicks on the buttons
    $('.button').click(function(e) {
        var squareClicked = $(this);
        var buttonPosition;
        var userIndex;
        switch (squareClicked.context.id) {
            case "btn1":
                buttonPosition = 0;
                break;
            case "btn2":
                buttonPosition = 1;
                break;
            case "btn3":
                buttonPosition = 2;
                break;
            case "btn4":
                buttonPosition = 3;
                break;
        }


        yourSeq.push(buttonPosition);
        animateSquare(squareClicked);

        comparison();

        console.log("You: [" + yourSeq + "]");
        
    });
};

function check(userIndex) {
    if (yourSeq[userIndex] !== simonSeq[userIndex]) {
        gameOver();
    }
    if (yourSeq[userIndex] == simonSeq[userIndex] && userIndex !== simonSeq.length) {
        userIndex++;
    }
    if (yourSeq[userIndex] == simonSeq[userIndex] && userIndex == simonSeq.length) {
        userIndex = 0;
        simonsTurn();
    }
};

// compares your value to simons value
function comparison() {
        disableStart();
        enableButtons();
        check(userIndex);

};

// game over behavior
function gameOver(){
    alert('Game Over')
    simonSeq = [];
    yourSeq =[];
    game();
}

// game structure
function game() {
    
    disableButtons();

    clickStart();
    // comparison();
    
}; 

game();

