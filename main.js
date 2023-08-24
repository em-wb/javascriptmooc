// subscribe form

function formSubmission(){
    alert('Thank you for subscribing!');
    return false; 
  }


// PLAY GAME 
// Get divs from html

const restart = document.querySelector('#restart');
const gameContainer = document.querySelector('#game-container');

//Create div/h1 for questions. Create div for options for each question.  

const questionBox = document.createElement('div');
questionBox.classList.add('questionBox');
questionBox.style.height = '100px';
questionBox.style.width = '100%';
gameContainer.append(questionBox);

const questions = document.createElement('h1');
questions.classList.add('questions');
questions.innerText = "";
questionBox.append(questions);

const optionsContainer = document.createElement('div');
optionsContainer.classList.add('optionsContainer');
gameContainer.append(optionsContainer);


// Add options for questions one - unhidden

questions.innerText = "Who's at your BNI?";

const peopleI = document.createElement('div');
peopleI.classList.add('people');
peopleI.classList.add('option');
peopleI.innerText = "👤";
optionsContainer.append(peopleI);

const peopleII = document.createElement('div');
peopleII.classList.add('people');
peopleII.classList.add('option');
peopleII.innerText = "👤👤";
optionsContainer.append(peopleII);

const peopleIII = document.createElement('div');
peopleIII.classList.add('people');
peopleIII.classList.add('option');
peopleIII.innerText = "👤👤👤 +";
optionsContainer.append(peopleIII);


// Add options for question two, make them hidden at start of game

const energyI = document.createElement('div');
energyI.classList.add('energy');
energyI.classList.add('hidden');
energyI.classList.add('option');
energyI.innerText = "😎 Chill";
optionsContainer.append(energyI);

const energyII = document.createElement('div');
energyII.classList.add('energy');
energyII.classList.add('hidden');
energyII.classList.add('option');
energyII.innerText = "⚡ Active";
optionsContainer.append(energyII);


// Add options of question three, make them hidden at start of game

const vibeI = document.createElement('div');
vibeI.classList.add('vibe');
vibeI.classList.add('hidden');
vibeI.classList.add('option');
vibeI.innerText = "🥘";
optionsContainer.append(vibeI);

const vibeII = document.createElement('div');
vibeII.classList.add('vibe');
vibeII.classList.add('hidden');
vibeII.classList.add('option');
vibeII.innerText = "🎲";
optionsContainer.append(vibeII);

const vibeIII = document.createElement('div');
vibeIII.classList.add('vibe');
vibeIII.classList.add('hidden');
vibeIII.classList.add('option');
vibeIII.innerText = "🎨";
optionsContainer.append(vibeIII);

const vibeIV = document.createElement('div');
vibeIV.classList.add('vibe');
vibeIV.classList.add('hidden');
vibeIV.classList.add('option');
vibeIV.innerText = "🤔";
optionsContainer.append(vibeIV);


//Create variables for each class of options. 

const peopleDivs = document.querySelectorAll('.people');
const energyDivs = document.querySelectorAll('.energy');
const vibeDivs = document.querySelectorAll('.vibe');


// Create scoring system and div to display results

let peoplescore = 0;
let energyscore = 0;
let vibescore = 0;

const displayShuffle = document.createElement('div');
displayShuffle.classList.add('displayShuffle');
displayShuffle.classList.add('result');
displayShuffle.classList.add('hidden');
displayShuffle.textContent = ("")
optionsContainer.append(displayShuffle);

// Create randomiser to give a result at the end of gameplay based on the options chosen by the user.

function getShuffle332() {
    let demoActivityArray322 = ['Write your own PUB QUIZ', 'Play a good old game of CHARADES', 'Play a free MURDER MYSTERY at whodunitmysteries.com', 'Have a dance a tutorial from STEEZY on Youtube']
    let shufflePick1 = demoActivityArray322[Math.floor(Math.random() * demoActivityArray322.length)];
    return shufflePick1;
  };


  function getShuffle114() {
    let demoActiviyArray114 = ['Learn about philosophy at THE SCHOOL OF LIFE on YouTube', 'Watch free CULTURAL SHOWS at Arte.tv', 'Watch the docuseries OUR PLANET on Youtube']
    let shufflePick2 = demoActiviyArray114[Math.floor(Math.random() * demoActiviyArray114.length)];
    return shufflePick2;
  };

  function getShuffleRest() {
    let allOtherActivityArray = ['test1', 'test2', 'test3']
    let shufflePick3 = allOtherActivityArray[Math.floor(Math.random() * allOtherActivityArray.length)];
    return shufflePick3;
  };


// Add event listeners for question one, add scoring and call a function to move to the next step.

    peopleI.addEventListener("click", (e) =>{ 
        peoplescore =0;
        peoplescore++;
        questionTwo();
    });

    peopleII.addEventListener("click", (e) =>{ 
        peoplescore =0;

        peoplescore+=2;
        questionTwo();
    });

    peopleIII.addEventListener("click", (e) =>{ 
        peoplescore =0;
        peoplescore+=3;
        questionTwo();
    });

// Update the question text, hide the previous options and unhide the current options.
// Add event listeners for question two and three, add scoring and call a function to move to the next step.

    function questionTwo() {
        questions.innerText = "What's your energy?";
        energyscore=0;
        peopleDivs.forEach(div => {
            div.classList.add('hidden')
        });
        energyDivs.forEach(div => {
            div.classList.remove('hidden')
        });

        energyI.addEventListener("click", (e) => {
            energyscore=0;
            energyscore++;
            questionThree();
        });
        energyII.addEventListener("click", (e) => {
            energyscore=0;
            energyscore+=2;
            questionThree();
        });
    }

    function questionThree () {    
        questions.innerText = "What's your vibe";
        energyDivs.forEach(div => {
            div.classList.add('hidden')
        });
        vibeDivs.forEach(div => {
            div.classList.remove('hidden')
        });

        vibeI.addEventListener("click", (e) => {
            vibescore = 0;
            vibescore++;
            endGame();
        });

        vibeII.addEventListener("click", (e) => {
            vibescore = 0;
            vibescore+=2;
            endGame(); 
        })   

        vibeIII.addEventListener("click", (e) => {
            vibescore = 0;
            vibescore+=3;
            endGame();
        })

        vibeIV.addEventListener("click", (e) => {
            vibescore = 0;
            vibescore+=4;
            endGame();
    
    })
}

// Hide options to the last question.
// End game and select a random result from the relevant array 
// In future, this demo would be replaced with a database using node.js.

    function endGame () {
        vibeI.classList.add('hidden');
        vibeII.classList.add('hidden');
        vibeIII.classList.add('hidden');
        vibeIV.classList.add('hidden');
        questions.innerText = "Your BNI Shuffle results 🔀";
        getResult();
        console.log(peoplescore, energyscore, vibescore)
    }

    function getResult(){
        displayShuffle.classList.remove('hidden');
        if (peoplescore==3 && energyscore==2 && vibescore==2) {
            displayShuffle.textContent = getShuffle332();   
        } else if (peoplescore==1 && energyscore==1 && vibescore==4) {
            displayShuffle.textContent = getShuffle114();
        } else displayShuffle.textContent = getShuffleRest();
            

    }

// Button to play again from the start 

restart.addEventListener("click", (e) => {
    displayShuffle.classList.add('hidden');
    energyDivs.forEach(div => {
       div.classList.add('hidden')
    });
    vibeDivs.forEach(div => {
    div.classList.add('hidden')
    });
    displayShuffle.classList.add('hidden');
    questions.innerText = "Who's at your BNI?";
    
    peopleDivs.forEach(div => {
     div.classList.remove('hidden')
   });
    
})



