window.addEventListener('scroll', function() {
    var footer = document.querySelector('.sticky-footer');
    
    // Check if the screen width is between 280px and 560px and if scrolled down more than 100px
    if (window.innerWidth >= 280 && window.innerWidth <= 560 && window.scrollY > 100) {
        footer.style.bottom = '0';  // Make the footer visible
    } else {
        footer.style.bottom = '-200px';  // Hide the footer
    }
});
