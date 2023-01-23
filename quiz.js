var readlineSync = require("readline-sync");

let userName = null;
let correctAnswer = 0;
let selection = 0;

const questionAndAnswer1 = [
    {
        question: "Who is the superhero that is also known as the Man of Steel? ",
        answer: "Superman"
    },
    {
        question: "What is Bruce Wayne's Superhero name ",
        answer: "Batman"
    },
    {
        question: "Who has an indestructible shield? ",
        answer: "Captain America"
    },
    {
        question: "Who gets his power from a ring? ",
        answer: "Green Lantern"
    },
    {
        question: "What is the real name of Iron Man's A.I. butler ",
        answer: "JARVIS"
    }
];

const questionAndAnswer2 = [
    {
        question: "What is my name? ",
        answer: "Manav"
    },
    {
        question: "Where do I live? ",
        answer: "jalgaon"
    }
];


function ask( userAns, ans)
{
    if(userAns.toUpperCase() === ans.toUpperCase())
    {
        console.log("Correct Answer");
        correctAnswer++;
    }
    else
    {
        console.log("Wrong Answer");
    }

    console.log("=-=");
}

//The Superhero Quiz
function game1(){
console.log("\nThe Superhero Quiz");
    for(i = 0; i< questionAndAnswer1.length; i++)
        ask(readlineSync.question(questionAndAnswer1[i].question), questionAndAnswer1[i].answer);
}
//"Do you know me"
function game2(){
    console.log("\nDo you know me");
    for(i = 0; i< questionAndAnswer2.length; i++)
        ask(readlineSync.question(questionAndAnswer2[i].question), questionAndAnswer2[i].answer);
}

function question() {
    if(selection == 1)
        game1();
    else if(selection == 2)
        game2();
}


function getUserName() {
    
    userName= readlineSync.question("Your Name: ").toUpperCase();
    console.log("\nCurrently we have 2 games to play choose! ");
    selection = readlineSync.question("\n\n1 The Superhero Quiz"+"\n2 Do you know me" + "1 or 2 >");
}

function result()
{
    console.log(userName + " thanks for playing the game\nYour score: " + correctAnswer + " Out of " + (selection == 1? "5":"2"));
}

getUserName();
question();
result();