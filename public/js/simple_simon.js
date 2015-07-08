"use strict";

// declaring the buttons array and empty sequences
var buttons = [btn1, btn2, btn3, btn4];
var simonSeq = [];
var yourSeq = [];
var userIndex = 0;
var buttonPosition;

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
    enableButtons();
    // yourSeq = [];
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
    disableStart();
    simonsTurn();

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
    // listens for user clicks on the buttons

function enableButtons() {
    $('.button').on('click', function(){

        var squareClicked = $(this);
        console.log(squareClicked.attr('id'));
        var buttonPosition;
        
        switch ($(this).attr('id')) {
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
        // yourSeq.push(buttonPosition);
        animateSquare(squareClicked);
        console.log(buttonPosition);
        console.log(simonSeq);
        check(buttonPosition);

        // console.log("You: [" + yourSeq + "]");
    
    })
};


function check(buttonPosition) {
    userIndex = 0;
    // if (buttonPosition !== simonSeq[userIndex]) {
    //     console.log(simonSeq[userIndex]);
    //     gameOver();
    // }
    console.log('button position' + buttonPosition);
    console.log('simonSeq' + simonSeq[userIndex]);
    if (buttonPosition == simonSeq[userIndex]) {
        console.log('keep going condition')
        userIndex++;
        if (userIndex == simonSeq.length) {
            console.log('end of turn')
            userIndex = 0;
            // yourSeq = [];
            simonsTurn();
        }
    } else {
        console.log(simonSeq[userIndex]);
        gameOver();
    }
};

// compares your value to simons value
function comparison() {
        disableStart();
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

