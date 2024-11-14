const questions = [
    {
        'que':"which of the following is a markup language?",
        'a':"HTML",
        'b':"CSS",
        'c':"JavaScript",
        'd':"PHP",
        'answer':"a"
    },
    {
        'que':'What year was JavaScript launched?',
        'a':"1996",
        'b':"1995",
        'c':"1994",
        'd':"none of the above",
        'answer':"b"
    },
    {
        'que':"What does CSS stand for?",
        'a':"Hypertext Markup Language",
        'b':"Cascading Style Sheets",
        'c':"JSON",
        'd':"Helicopters Terminals Motorboats Lamborginis",
        'answer':"b"
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerHTML = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];
    let ans = getAnswer();
    if (!ans) {
        alert("Please select an answer!");
        return;
    }
    if(ans === data.answer){
        right += 1;
        console.log('Correct:', right);
    } else {
        wrong += 1;
        console.log('Wrong:', wrong);
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let selectedAnswer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    return selectedAnswer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
   document.querySelector(".box").innerHTML = `
   <div id="end">
    <h3> Thank you for playing the quiz! </h3>
    <h2> Right: ${right} / Wrong: ${wrong} </h2>
   </div>
   `;
};

loadQuestion();
