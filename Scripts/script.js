document.addEventListener('DOMContentLoaded', () => {
    const covers = document.querySelectorAll('.cover');
    let currentIndex = 0; // Start at the first cover
    const displayTime = 10000; // 20 seconds per cover
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



document.addEventListener('DOMContentLoaded', function () {
    // Select all cover elements
    const covers = document.querySelectorAll('.cover');

    // Add click event listener to each cover
    covers.forEach(cover => {
        cover.addEventListener('click', function () {
            // Check if the clicked cover is active
            if (cover.classList.contains('active')) {
                // Retrieve the detail URL from data attribute
                const detailUrl = cover.getAttribute('data-detail-url');
                // Open the detail page
                if (detailUrl) {
                    window.location.href = detailUrl; // Redirect to the detail page
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const covers = document.querySelectorAll('.cover');

    // Toggle active state on click
    covers.forEach(cover => {
        cover.addEventListener('click', function () {
            // Remove active class from all covers
            covers.forEach(c => c.classList.remove('active'));
            // Add active class to clicked cover
            cover.classList.add('active');
        });
    });
});
