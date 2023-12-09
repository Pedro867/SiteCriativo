const options = document.querySelectorAll('.opção');

options.forEach(opção => {
    opção.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-correct') === 'true';
        var other = document.getElementsByClassName('errada');

        if (isCorrect) {
            this.classList.add('correta');
        }
        else {
            this.classList.add('errada');
        }
    });
});

