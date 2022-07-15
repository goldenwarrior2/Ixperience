const guessInput = document.getElementById("guess");
const submitInput = document.getElementById("submit");
const cardBody = document.getElementById('card-body')
const answer = Math.floor(Math.random() * 11);

submitInput.addEventListener('click', (event) => {
    const guess = guessInput.value;
    const answerDiv = document.createElement('div');

    answerDiv.classList.add('alert')
    if (guess > 10) {
        answerDiv.innerHTML = 'Must enter a number between 0 and 10!';
        answerDiv.classList.add('alert-danger');
    } else if (guess < answer) {
        answerDiv.innerHTML = 'Higher';
        answerDiv.classList.add('alert-warning');
     } else if (guess > answer) {
        answerDiv.innerHTML = 'Lower';
        answerDiv.classList.add('alert-warning');
     } else {
        answerDiv.innerHTML = 'correct!';
        answerDiv.classList.add('alert-success');
     }
    cardBody.append(answerDiv);
} )
