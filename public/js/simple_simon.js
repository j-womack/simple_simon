"use strict";

// (function(){

//     var game = {

//         buttons: $('.button'),
//         simonSeq: [],
//         userIndex: 0,
//         buttonPosition: null,
//         square: null, 

//         init: function() {
//             $('#start').click(function(){
//                 game.buttonBlackout();
//             }); 
//         },

//         buttonBlackout: function() {
//             // disableStart();
//             // disableButtons();
            
//             setTimeout(game.simonsTurn, (simonSeq.length * 1000 + 1));
//             setTimeout(game.enableButtons, (simonSeq.length * 1000 + 1));
//         }


//     }

//     game.init();

// })();























// declaring the buttons array and empty sequences
var buttons = $('.button');
var simonSeq = [];
var userIndex = 0;
var buttonPosition;
var square;

// game structure
function game() {
    
    $('#start').click(function(){
        // simonsTurn();
        buttonBlackout();
    });  
    
}

// listens for the start button and runs the Simon function
// function clickStart() {
    
// };

                // // initial start button functionality
                // function enableStart() {
                //     // disableStart();
                //     simonsTurn();
                // }

// disables all buttons while animating
function buttonBlackout() {
        //      MOCKUP
        // off();
        // setTimeout(enable, simonSeq.length
    disableStart();
    disableButtons();
    
    setTimeout(simonsTurn, (simonSeq.length * 1000 + 1));
    setTimeout(enableButtons, (simonSeq.length * 1000 + 1));
};

// adds a new value to the simon array

function simonsTurn(){
    playSimonSeq();
    // enableButtons();
};


// selecting random numbers and pushing to simon seq 
// and animating simon sequence
function playSimonSeq() {
    var decision = Math.floor((Math.random() * 4));
    simonSeq.push(decision);
    console.log("Simon: [" + simonSeq + "]");
    var i=0;
    var intervalId = setInterval(function() {
        if(i>=simonSeq.length){
            clearInterval(intervalId);
        }
        console.log(buttons[simonSeq[i]]);
        animateSquare(buttons[simonSeq[i]]);
        i++
    }, 600); 

    $('.round').html('Round: ' + simonSeq.length);
};

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

// listens for user clicks on the buttons
function enableButtons() {
    $('.button').on('click', function(){

        var squareClicked = $(this);
        console.log(squareClicked.attr('id'));
        var buttonPosition = squareClicked.attr('id');
        
        animateSquare(squareClicked);
        console.log(buttonPosition);
        console.log(simonSeq);
        if(check(buttonPosition)) {
            simonsTurn();
        }
    
    });
};


// compares your value to simons value
function check(buttonPosition) {
    // userIndex = 0;
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
            // simonsTurn();
            return true;
        }
    } else {
        console.log(simonSeq[userIndex]);
        gameOver();
    }
};



// game over behavior
function gameOver(){
    alert('Game Over')
    simonSeq = [];
    game();
}


game();





//////////////////////////////

// disables start button
function disableStart() {
    $('#start').off('click');
};

// disables 4 buttons
function disableButtons() {
    $('.button').off('click');
};
