"use strict";
var buttons = [btn1, btn2, btn3, btn4];
var simonSeq = [];
var yourSeq = [];

function animateSquare(square){
    $(square).animate({
        opacity: 0.25,
        top: "+=5",
        left: "+=5"
    }, 100);

    $(square).animate({
        opacity: 1,
        top: "-=5",
        left: "-=5",
        "box-shadow": 0
    }, 100);
    // $(buttons[sequence[i]]).delay(200);
};


$('#start').click(function(){
    var decision = Math.floor((Math.random() * 4));

    simonSeq.push(decision);
    console.log("Simon: [" + simonSeq + "]");
        
    for (var i=0; i<simonSeq.length; i++){
        setTimeout(animateSquare(buttons[simonSeq[i]]),200);

    };
});

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