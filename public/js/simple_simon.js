"use strict";

// declaring the buttons array and empty sequences
var buttons = [btn1, btn2, btn3, btn4];
var simonSeq = [];
var yourSeq = [];

// animation function
function animateSquare(square){
    $(square).animate({
        opacity: 0.25,
        top: "+=5",
        left: "+=5"
    }, 200);
    $(square).animate({
        opacity: 1,
        top: "-=5",
        left: "-=5",
        "box-shadow": 0
    }, 200);
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
    }, 500); 
    yourSeq = []; 
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

// listens for the start button and runs the Simon function
function enableStart() {
    $('#start').click(function(){

        //      MOCKUP
        // off();
        // setTimeout(enable, simonSeq.length


        //      NOTES
        // $(this).off('click');
        // setTimeout(function(){
        //     $(this).on('click', function(){
        //     });
        // }, (simonSeq.length * 1000 + 1));

        getRandom();
        playSimonSeq();
    });  
};

function disableButtons() {
    $('.button').off('click');
};

function enableButtons() {
    // listens for user clicks on the buttons
    $('.button').click(function(e) {
        var squareClicked = $(this);
        var buttonPosition
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
        console.log("You: [" + yourSeq + "]");
    });
};

enableStart();
enableButtons();
