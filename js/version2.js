"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector('nav');
    var navHeight = nav.offsetHeight;

    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function () {
        var mainNav = document.getElementById('mainNav');
        if (!mainNav.classList.contains('navbar-reduce')) {
            mainNav.classList.add('navbar-reduce');
        }
    });

    // Preloader
    window.addEventListener('load', function () {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 100);
        }
    });

    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    var backToTopBtn = document.querySelector('.back-to-top');
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ScrollTop
    var scrollTopBtn = document.querySelector('.scrolltop-mf');
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Counter
    var counters = document.querySelectorAll('.counter');
    counters.forEach(function (counter) {
        var delay = 15;
        var time = 2000;
        var target = +counter.getAttribute('data-target');
        var count = 0;
        var interval = setInterval(function () {
            count++;
            counter.textContent = count;
            if (count === target) {
                clearInterval(interval);
            }
        }, time / target);
    });

    // Scrolling nav
    var scrollLinks = document.querySelectorAll('a.js-scroll[href*="#"]:not([href="#"])');
    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var offsetTop = targetElement.offsetTop - navHeight + 5;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggers = document.querySelectorAll('.js-scroll');
    scrollTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var navbarCollapse = document.querySelector('.navbar-collapse');
            navbarCollapse.classList.remove('show');
        });
    });

    // Navbar Menu Reduce
    window.addEventListener('scroll', function () {
        var pixels = 50;
        var top = 1200;
        var navbarExpand = document.querySelector('.navbar-expand-md');
        var scrollTop = window.scrollY;

        if (scrollTop > pixels) {
            navbarExpand.classList.add('navbar-reduce');
            navbarExpand.classList.remove('navbar-trans');
        } else {
            navbarExpand.classList.add('navbar-trans');
            navbarExpand.classList.remove('navbar-reduce');
        }

        var scrollTopMF = document.querySelector('.scrolltop-mf');
        if (scrollTop > top) {
            scrollTopMF.style.display = 'block';
        } else {
            scrollTopMF.style.display = 'none';
        }
    });

    // Typed
    if (document.querySelector('.text-slider')) {
        var typedStrings = document.querySelector('.text-slider-items').textContent.split(',');
        var typedElement = document.querySelector('.text-slider');

        new Typed('.text-slider', {
            strings: typedStrings,
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    // Testimonials owl
    if (document.getElementById('testimonial-mf')) {
        // Assuming you have Owl Carousel JS loaded
        $('#testimonial-mf').owlCarousel({
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                }
            }
        });
    }
});
