// question database 
const STORE = [
    {// 1 
        question: 'Which member of The Beatles died first?',
        answers: [
            'Paul McCartney',
            'Ringo Starr',
            'George Harrison',
            'John Lennon'
        ],
        correctAnswer: 'John Lennon'
    },
    {// 2 
        question: 'Which Metallica member is the most recent addition to their lineup?',
        answers: [
            'Jason Newsted',
            'Lars Ulrich',
            'Robert Trujillo',
            'Cliff Burton',
        ],
        correctAnswer: 'Robert Trujillo'
    },
    {// 3 
        question: 'Which of the following is NOT a song by Led Zeppelin?',
        answers: [
            'Immigrant Song',
            'Going to California',
            'Tears in Heaven',
            'Wanton Song',
        ],
        correctAnswer: 'Tears in Heaven'
    },
    {// 4
        question: 'Which of these frontmen is referred to as the "Prince of Darkness"?',
        answers: [
            'Ozzy Osbourne',
            'Robert Plant',
            'Ted Nugent',
            'Bruce Dickinson',
        ],
        correctAnswer: 'Ozzy Osbourne',
    },
    { // 5
        question: 'Fill in the correct lyrics to the following: "For those about to rock, ____."',
        answers: [
            "We're not gonna take it!",
            "We salute you!",
            "Raise your horns!",
            "Put on your battle jackets!",
        ],
        correctAnswer: "We salute you!",
    },
    { // 6
        question: "Which Led Zeppelin song references J.R. Tolkien's LOTR character Gollum?",
        answers: [
            "Ramble On",
            "Whole Lotta Love",
            "Achilles' Last Stand",
            'Tangerine',
        ],
        correctAnswer: "Ramble On",
    },
    { // 7 
        question: "Who's considered the godfather of rock-n'-roll?",
        answers: [
            'James Jamerson',
            'Chuck Berry',
            'Elvis Presley',
            'Eric Clapton',
        ],
        correctAnswer: 'Chuck Berry',
    },
    { // 8
        question: 'Which member of the band Rush passed away in January, 2020?',
        answers: [
            'John Bonham',
            'Geddy Lee',
            'Alex Lifeson',
            'Neil Pert',
        ],
        correctAnswer: 'Neil Pert',
    },
    { // 9
        question: 'Creedence Clearwater Revival (CCR) were from which state?',
        answers: [
            'Texas',
            'Alabama',
            'Mississippi',
            'California',
        ],
        correctAnswer: 'California',
    },
    { // 10
        question: 'Which of the following bands consists only of American members?',
        answers: [
            'Iron Maiden',
            'AC/DC',
            'Megadeth',
            'Pink Floyd',
        ],
        correctAnswer: 'Megadeth',
    },
    { // 11
        question: 'Tony Iommi played guitar in which band?',
        answers: [
            'Immortal',
            'The Scorpions',
            'Neutral Milk Hotel',
            'Black Sabbath',
        ],
        correctAnswer: 'Black Sabbath',
    },
    {
        questionTally: [1],
    },
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    console.log('startQuiz ran');
    $('.start-button').on('click', function(event) {
        $('.welcome-text').hide();
        $(renderQuestionForm);
    })
}

function renderQuestionForm() {
    console.log('renderQForm ran')
    const formHTML = `
    <form class="form">
        <fieldset>
            <h3></h3>
            <ul class="js-quiz">
    
            </ul>
                <button type="button" class="submit-button button" >
                    Submit
                </button>
                <button type="button" class="next-button">
                    Next Question
                </button>
                <p>Question: <span class="js-q-tally">${STORE[11].questionTally++}</span> / 11   Score: <span class="js-score">${score}</span> / 11 </p>
        </fieldset>
    </form>`;
    $('.questionBox').append(formHTML);
}

function handleQuestions() {
    startQuiz(); //complete
}

$(handleQuestions());
