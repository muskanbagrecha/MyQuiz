var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your username? ');
var score = 0;
console.log("Hello, ",userName);
console.log("Let's see how well do you know me!");


questions = [
    {
        question: "Which is my favourite cuisine",
        answer: "Chinese",
        options: ["Italian", "Chinese", "Mexican", "Thai"]
    },
    {
        question: "Who is my favourite artist? ",
        answer: "Anuv Jain",
        options: ["Anuv Jain", "Prateek Kuhaad", "Arijit Singh"]

    },
    {
        question: "What annoys me the most? ",
        answer: "Unhygienic places ",
        options: ["Unhygienic places", "Incomplete sleep", "Exams"]

    },

    {   
     question: "Which is my favourite place to travel?",
     answer: "Hill stations",
     options: ["Beach", "Hill stations", "High-tech cities"]
    },

    {   
     question: "Which is my favourite comfort food?",
     answer: "khichdi",
     options: ["khichdi", "dal chaawal", "roti-sabzi"]
    },

]

function play(question, answer, options)
{
    index = readlineSync.keyInSelect(options, question)
    if(options[index]==answer)
    {   
        console.log("That is correct!!!")
        score+=1
    }
    else{
        console.log("That is incorrect! :(")
    }
}

for(i=0;i<questions.length;i++)
{
    curr = questions[i]
    play(curr.question, curr.answer, curr.options)
}

console.log("Your final score is: ", score)
if(score==questions.length)
{
    console.log("Yayyyy, you know me super duper well!")
}