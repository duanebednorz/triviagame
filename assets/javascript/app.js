
var timeLeft = 45;
var elem = document.getElementById("display");

var timerId = setInterval(countdown, 1000);



function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        document.getElementById("display").innerHTML = ("Yay");
    } else {
        // elem.innerHTML = timeLeft + " seconds remaining";
        document.getElementById("display").innerHTML = timeLeft;
        timeLeft--;

    }
}

var correct = 0;
var wrong = 0;
var counter = 0;

// $(document).ready(function () {
// read input from radial button
// collect whether input is correct or wrong for each selection
// function for incrementing correct w/ radial button
// call correct function
// function for incrementing wrong w/ radial button
// call wrong function

$( "input" ).on( "click", function() {
    $( "#content" ).html( $( "input:checked" ).val() + " is checked!" );
  });



// var selectedOption = document.getElementById("id");
// console.log(selectedOption);

// $(document).ready(function () {
//     $('#btnGetValue').click(function () {
//         var selValue = $('input[name=bird]:checked').val();
//         $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
//         console.log(val);
//     });
// });
// if (bird === "Hedwig") {
//     correct++;
// } else if (bird !== "Hedwig") {
//     wrong++;
// }
// if (perName === "Hermione Granger") {
//     correct++;
// } else if (perName !== "Hermione Granger") {
//     wrong++;
// }
// if (House === "Gryffindor, Ravenclaw, Hufflepuff, Slytherin") {
//     correct++;
// } else if (House !== "Gryffindor, Ravenclaw, Hufflepuff, Slytherin") {
//     wrong++;
// }
// if (Book === "Harry Potter and The Philosopher’s Stone") {
//     correct++;
// } else if (Book !== "Harry Potter and The Philosopher’s Stone") {
//     wrong++;
// }
// if (Year === "2001") {
//     correct++;
// } else if (Year !== "2001") {
//     wrong++;
// }
// if (School === "Hogwarts School of Witchcraft and Wizardry") {
//     correct++;
// } else if (School !== "Hogwarts School of Witchcraft and Wizardry") {
//     wrong++;
// }
// if (Director === "Peter Jackson") {
//     correct++;
// } else if (School !== "Peter Jackson") {
//     wrong++;
// }

// else {
//     document.write("That's crazy talk son!");
// }});

// Creating a variable to hold our new HTML.Our HTML now keeps track of the user info
"<p>Number of Correct: " + correct + "</p>" +
    "<p>Number Wrong: " + wrong + "</p>";


// display total number of correct/wrong in results div    

// Set the inner HTML contents of the #game div to our html string
// document.querySelector("#Results").innerHTML = html;



// find out how to hide div / make visible when counter ends play in countdown if timeLeft ==0 if then statement