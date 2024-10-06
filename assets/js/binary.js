document.addEventListener('DOMContentLoaded', function() {
    // Additional animations or behaviors for binary mode
    if (document.body.classList.contains('binary-mode')) {
        // Example: Change background colors dynamically
        setInterval(function() {
            document.body.style.backgroundColor = document.body.style.backgroundColor === '#000000' ? '#04040c' : '#000000';
        }, 1000);
    }
});
