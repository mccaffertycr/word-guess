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
    var currentTitle = titles[Math.floor(Math.random()*titles.length)];

    // function to get hint 
    // function getHint() {
    //     for (var i = 0; i < this.titles.length; i++)
    //     while (currentTitle === titles[i]) {
    //         document.getElementById("hint").addEventListener("click", function() {
    //             document.getElementById("hints").innerHTML = hints[i];
    //         });
    // }
    // }

    // connect button with relevant hint
    if (currentTitle === titles[0]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[0];
        });
    } else if (currentTitle === titles[1]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[1];
        });
    } else if (currentTitle === titles[2]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[2];
        });
    } else if (currentTitle === titles[3]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[3];
        });
    } else if (currentTitle === titles[4]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[4];
        });
    } else if (currentTitle === titles[5]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[5];
        });
    } else if (currentTitle === titles[6]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[6];
        });
    } else if (currentTitle === titles[7]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[7];
        });
    } else if (currentTitle === titles[8]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[8];
        });
    } else if (currentTitle === titles[9]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[9];
        });
    } else if (currentTitle === titles[10]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[10];
        });
    } else if (currentTitle === titles[11]) {
        document.getElementById("hint").addEventListener("click", function() {
            document.getElementById("hints").innerHTML = hints[11];
        });
    } 
    // create answer array
    var answerArray = [];
    for (var i = 0; i < currentTitle.length; i++) { 
        if (i !== " ") {       
            answerArray[i] = "_";
        }
    }

    // function run when user starts guessing
    document.onkeyup = function(event) {

    // determines guess
    var userGuess = event.key;
    // print answer array to html
    document.getElementById("answerArray").innerHTML = answerArray.join("");
     
    // change answer array to guess
    for (var g = 0; g < currentTitle.length; g++) {
        if (userGuess.toUpperCase()  === currentTitle[g]) {
            answerArray[g] = userGuess.toUpperCase();
        // } else {
        //     document.getElementById("guesses").innerHTML += userGuess.toUpperCase();
        }  
    }
    // display guessed letters
    var guessedLetters = document.getElementById("guesses").textContent += userGuess.toUpperCase();
    if (guessedLetters.length === 20) {
        document.location.reload();
    }

}



