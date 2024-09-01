document.addEventListener('DOMContentLoaded', () => {
    const covers = document.querySelectorAll('.cover');
    let currentIndex = 0; // Start at the first cover
    const displayTime = 20000; // 20 seconds per cover
    const totalCovers = covers.length;

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
                const offset = Math.min(Math.abs(i - index), totalCovers - Math.abs(i - index));
                const direction = i < index ? -1 : 1;
                cover.style.transform = `rotateY(${direction * offset * 10}deg) translateX(${direction * offset * 50}px) scale(${1 - offset * 0.2})`;
                cover.style.opacity = `${1 - offset * 0.3}`;
            }
        });
    }

    function nextCover() {
        currentIndex = (currentIndex + 1) % totalCovers; // Move to the next cover, looping back to start
        updateCovers(currentIndex);
    }

    function prevCover() {
        currentIndex = (currentIndex - 1 + totalCovers) % totalCovers; // Move to the previous cover, looping to the end
        updateCovers(currentIndex);
    }

    // Click event listeners for navigation buttons
    document.querySelector('.nav-button.left').addEventListener('click', prevCover);
    document.querySelector('.nav-button.right').addEventListener('click', nextCover);

    // Click event listener for individual covers
    covers.forEach((cover, index) => {
        cover.addEventListener('click', () => {
            currentIndex = index;
            updateCovers(currentIndex);
        });
    });

    // Auto-advance covers every 20 seconds
    setInterval(nextCover, displayTime);

    updateCovers(currentIndex); // Initial call to set up the first view
});
