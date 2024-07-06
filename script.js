// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item a');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.color = '#333';
            item.style.backgroundColor = '#ddd';
            item.style.borderRadius = '5px';
        });

        item.addEventListener('mouseout', function() {
            item.style.color = '';
            item.style.backgroundColor = '';
        });
    });

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

