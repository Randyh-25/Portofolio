// scripts.js
// scripts.js

document.getElementById('portfolio-button').addEventListener('click', function() {
    const landingPage = document.getElementById('landing-page');
    const portfolioPage = document.getElementById('portfolio-page');
    const button = document.getElementById('portfolio-button');

    // Start the morphing animation


    portfolioPage.style.display = 'flex';
    portfolioPage.classList.add('transitioning');

    // Wait for the button to grow
    setTimeout(function() {
        landingPage.style.opacity = '0';
        portfolioPage.style.transform = 'scale(1)';
        portfolioPage.style.opacity = '1';
    }, 50); // Small delay for initial opacity change

    // Complete the transition
    setTimeout(function() {
        landingPage.classList.add('hidden');
        button.classList.remove('morphing');
        portfolioPage.classList.remove('transitioning');
        portfolioPage.classList.add('morphed');
    }, 1050); // Ensure the animation duration matches the CSS transition
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active'); // Remove the 'active' class
        tabcontent[i].style.opacity = '0'; // Set opacity to 0 for smooth transition
    }
    tablinks = document.getElementsByClassName('tab-link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).classList.add('active'); // Add the 'active' class
    evt.currentTarget.className += ' active';

    setTimeout(function() {
        document.getElementById(tabName).style.opacity = '1'; // Set opacity to 1 after adding 'active' class
    }, 10); // Small delay to ensure the transition effect

    // Animate stars
    animateStars(tabName);
}

// Set default active tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});

function animateStars(tabName) {
    var stars = document.querySelectorAll('#' + tabName + ' .star');
    stars.forEach(function(star, index) {
        setTimeout(function() {
            star.classList.add('active');
        }, index * 100); // Delay each star's animation
    });
}
