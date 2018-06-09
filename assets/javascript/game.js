    // create array of titles
    var titles =   ["UNFORGIVEN", "TOMBSTONE", "TRUE GRIT", "THE OUTLAW JOSEY WALES", 
                    "DJANGO UNCHAINED", "HANG EM HIGH", "FISTFUL OF DOLLARS", "RED RIVER",
                    "THE SEARCHERS", "THE WILDBUNCH", "ONCE UPON A TIME IN THE WEST",
                    "HIGH PLAINS DRIFTER"];

    // hints
    var hints = ["As of 2017, this is Clint Eastwood's final Western.",
                "Val Kilmer played Doc Holliday, a role previously played in three different 1959 television productions by Adam West, who later became Batman.",
                "The Coen Brothers remade this 1969 classic in 2010.",
                "A Missouri farmer joins a Confederate guerrilla unit and winds up on the run from the Union soldiers who murdered his family.",
                "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                "When an innocent man barely survives a lynching, he returns as a lawman determined to bring the vigilantes to justice.",
                "The first film in Sergio Leone's Man with No Name Trilogy.",
                "Filmed in 1946 but held for release for two years, in part due to legal problems with Howard Hughes who claimed it was similar to his The Outlaw (1943).",
                "An American Civil War veteran embarks on a journey to rescue his niece from the Comanches.",
                "An aging group of outlaws look for one last big score as the traditional American West is disappearing around them.",
                "Charles Bronson as the mysterious stranger with a harmonica in this Sergio Leone Classic.",
                "A gunfighting stranger comes to the small settlement of Lago and is hired to bring the townsfolk together in an attempt to hold off three outlaws who are on their way."];

    // pick a random title               
    var currentTitle = "";

    // create answer array
    var answerArray = [];

    // guess counter
    var guessCounter = 20;

    // guessed letters
    var guessedLetters = "";

    //guess display 
    var guessDisplay = [];

    // empty guess var
    var userGuess = "";

    var gameOver;

    var winTimeout;

    // connect button with relevant hint
    document.getElementById("hint").addEventListener("click", function() {
        for (var i = 0; i < titles.length; i++) {
            if (currentTitle === titles[i]) {
                document.getElementById("hints").innerHTML = hints[i];
            }
        }
    });

    // function that changes answerarray to underscores & prints
    function answerBlank(a) {
        for (var i = 0; i < currentTitle.length; i++) {
            if (currentTitle[i] === " ") {
                a[i] = " ";
            } else {
                a[i] = "_";
            }
        }
    }
    // win message function
    function winMsg() {
        document.getElementById("answerArray").innerHTML = "YOU WIN!!";
    }


// function to start game
function startGame() {  
    
    gameOver = false;

    // clears the hint
    document.getElementById("hints").innerHTML = "";

    //clears win timeout
    clearTimeout(winTimeout);

    // pick a random title               
    currentTitle = titles[Math.floor(Math.random()*titles.length)];

    //reset answerArray to empty
    answerArray = [];
    
    // fills answer array with underscores 
    answerBlank(answerArray);

    // print answer array to html
    document.getElementById("answerArray").innerHTML = answerArray.join("");

    // reset guesses
    guessCounter = 20;

    guessedLetters = [];

     // Prints the blanks at the beginning of each round in the HTML.
    document.getElementById("guesses").innerHTML = guessedLetters.join(" ");
}

// starts game
startGame();

// function run when user starts guessing
document.onkeyup = function(e) {

    if (!gameOver) {
    // determines guess
    userGuess = e.key;
     
    // change answer array to reflect guess if it's correct
    for (var g = 0; g < currentTitle.length; g++) {
        if (userGuess.toUpperCase() === currentTitle[g]) {
            answerArray[g] = userGuess.toUpperCase();
        }
    } 
    // re-print answer array with answerto html
    document.getElementById("answerArray").innerHTML = answerArray.join("");

    // save guesses to guessLetters
    guessedLetters.push(userGuess.toUpperCase());
    // display guessed letters
    guessDisplay = document.getElementById("guesses").textContent += userGuess.toUpperCase();

    // guess counter display
    document.getElementById("counter").textContent = "GUESSES LEFT:" + (guessCounter--);
}

    // restart function conditions
    if (guessedLetters.length === 20) {
        gameOver = true;
        startGame();
    } else if (answerArray.join("") === currentTitle) {
        gameOver = true;
        winTimeout = setTimeout(function() {
            winMsg();  
        }, 2000);
        setTimeout(function() {
            startGame();
        }, 5000);
    }
};




