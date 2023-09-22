const options = document.querySelectorAll('.opção');

let currentQuestion = 0;

options.forEach(opção => {
    opção.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-correct') === 'true';

        if (isCorrect) {
            this.classList.add('correta');
        }
        else {
            this.classList.add('errada');
        }
    });
});

