document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('card-container');
    const style = document.createElement('style');
    style.type = 'text/css';

    imageList = ['images/talking.jpg', 'images/dining.jpg', 'images/activity.jpg', 'images/walk.jpg', 'images/talking.jpg', 'images/dining.jpg'];

    activityList = ['Have some fun conversation with dementia patient and do upload a snap of it', 'Have dinner and lunch with the dementia patient to make them feel good ', 'Do some activity like playing checkers or sorting images of patient to engage better with them', 'Now as they are comfortable with you ,you can take them for a walk', 'Have some fun conversation with dementia patient and do upload a snap of it', 'Have dinner and lunch with the dementia patient to make them feel good'];

    function createCard(id, image, activity) {
        return `
            <div class="card">
                <img src=${image} alt="profile" id="profile-pic${id}">
                <label for="input-file${id}">update image</label>
                <input type="file" accept="image/jpeg, image/png ,image/jpg" id="input-file${id}">
                <div class="card-content">
                    <h3>Activity${id}</h3>
                    <p>${activity}</p>
                </div>
            </div>
        `;
    }

    for (let i = 1; i <= 6; i++) { // Assuming you have 6 cards
        cardContainer.innerHTML += createCard(i, imageList[i - 1], activityList[i - 1]);
        style.innerHTML += `#input-file${i} { display: none; }\n`;
    }

    // Append the style element to the head
    document.head.appendChild(style);

    const profilePics = document.querySelectorAll('[id^="profile-pic"]');
    const inputFiles = document.querySelectorAll('[id^="input-file"]');

    profilePics.forEach((profilePic, index) => {
        const inputFile = inputFiles[index];
        inputFile.onchange = function () {
            profilePic.src = URL.createObjectURL(inputFile.files[0]);
            showModal();
        }
    });

    // Carousel functionality
    let currentIndex = 0;
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    function updateCarousel() {
        cardContainer.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 3;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalCards - 3) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Modal functionality
    const modal = document.getElementById("congratsModal");
    const span = document.getElementsByClassName("close")[0];

    function showModal() {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});