const quizz = document.querySelector(".quiz-section");
let result=0;
const getQuestions = async () => {
    try {
        const data = await fetch("https://the-trivia-api.com/v2/questions");
        const response = await data.json();
        console.log(response);
        renderQuestion(response, 0);
    } catch (error) {
        console.log("error===>", error);
    }
};
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
getQuestions();




const next = (arr, index) => {
    
    
    let radio = document.querySelectorAll(".radio");
radio.forEach((item)=>{
    if (item.checked && item.value==arr[index].correctAnswer) {
      result+=1;
    }
   
   
})
if (index == arr.length-1) {

    localStorage.setItem("result", JSON.stringify(result));
    result=0;
    window.location.href="result.html";
    return;
}
    renderQuestion(arr, index + 1);
};

const renderQuestion = (arr, index) => {
    quizz.innerHTML = "";
    if (index == arr.length) {
      
        return;
    }
    
    let answer=arr[index].correctAnswer;
     answer=[...arr[index].incorrectAnswers,answer]
  shuffleArray(answer)
    quizz.innerHTML += `
        <p>${index + 1}. ${arr[index].question.text}</p>
        <ul>
            ${answer.map((item) => {
               return `<li><input type="radio" name="answer" class="radio" value="${item}"><span>${item}</span></li>`
})}        

        </ul>
        
        
<div>
            <button id="next-btn">Next</button>
             </div>
    
    
        
    `;
   
    

    

    document.getElementById("next-btn").addEventListener("click", (e) => {e.preventDefault();next(arr, index)});
}
