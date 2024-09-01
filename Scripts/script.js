const covers = document.querySelectorAll('.cover');
let currentIndex = Array.from(covers).findIndex(cover => cover.classList.contains('active'));

function updateCovers(index) {
    covers.forEach((cover, i) => {
        cover.classList.remove('active');
        cover.style.transform = 'scale(0.7)';
        cover.style.opacity = '0.6';

        if (i === index) {
            cover.classList.add('active');
            cover.style.transform = 'scale(1) translateZ(50px)';
            cover.style.opacity = '1';
        } else {
            const offset = Math.min(Math.abs(i - index), covers.length - Math.abs(i - index));
            cover.style.transform = `rotateY(${offset * 10}deg) translateX(${offset * 40}px) scale(${1 - offset * 0.2})`;
            cover.style.opacity = `${1 - offset * 0.3}`;
        }
    });
}

document.querySelector('.nav-button.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + covers.length) % covers.length; // Loop to the last cover
    updateCovers(currentIndex);
});

document.querySelector('.nav-button.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % covers.length; // Loop to the first cover
    updateCovers(currentIndex);
});

covers.forEach((cover, index) => {
    cover.addEventListener('click', () => {
        currentIndex = index;
        updateCovers(currentIndex);
    });
});

updateCovers(currentIndex); // Initial call to position covers
