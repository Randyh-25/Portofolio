// scripts.js
document.getElementById('portfolio-button').addEventListener('click', function() {
    document.getElementById('landing-page').style.opacity = '0';
    document.getElementById('landing-page').style.transform = 'translateX(-100%)';

    setTimeout(function() {
        document.getElementById('portfolio-page').style.opacity = '1';
        document.getElementById('portfolio-page').style.transform = 'translateX(0)';
    }, 1000);
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tab-link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Set default active tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});
