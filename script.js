let currentSlide = 0;
 
function showSlide(index) {
    const slides = document.querySelector('.slides');
   
   
    if (index >= 4) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
 
    const offset = -currentSlide * 100; 
    slides.style.transform = `translateX(${offset}%)`;
}
 
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if(!option.checked){

            option.disabled = true;
        }
    });
}

function playSound(){
    let clickSound = document.getElementById("selecionasom");
    clickSound.play();
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "d",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: "b",
        q6: "a",
        q7: "b",
        q8: "c",
        q9: "a",
        q10:"a",

    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    if (score === 10) {
        result.innerHTML = `Parabéns! você acertou ${score} de 10 perguntas!`;
    } else {
        result.innerHTML = `Você acertou ${score} de 10 perguntas!`;
    }

    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    } else {
        let failSound = document.getElementById('perdeusom');
        failSound.play();
    }

    
    document.getElementById('reiniciar').disabled = false;
}

function submitAgain() {
    let form = document.getElementById('quiz-form');
    form.reset();

    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });

    let result = document.getElementById('result');
    result.innerHTML = '';

 //para o som
 
    let sounds = ['venceusom', 'selecionasom', 'perdeusom'];
    sounds.forEach(soundId => {
        let sound = document.getElementById(soundId);
        sound.pause();
        sound.currentTime = 0;
    });

    // Desabilita o botão novamente após o reset
    document.getElementById('reiniciar').disabled = true;
}
