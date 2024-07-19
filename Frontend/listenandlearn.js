let currentIndex = 0;

function showVideo(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextVideo() {
    showVideo(currentIndex + 1);
}

function prevVideo() {
    showVideo(currentIndex - 1);
}

function checkAnswer(event, questionId, correctAnswer) {
    event.preventDefault();
    const form = event.target;
    const selectedOption = form.querySelector(`input[name="${questionId}"]:checked`);
    const resultElement = document.getElementById(`result-${questionId}`);

    if (selectedOption) {
        if (selectedOption.value === correctAnswer) {
            resultElement.textContent = "Correct";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "Incorrect";
            resultElement.style.color = "red";
        }
    } else {
        resultElement.textContent = "Please select an option.";
        resultElement.style.color = "orange";
    }
}

