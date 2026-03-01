// ============================================================================
// DYNAMIC JAVASCRIPT LOGIC
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        once: true,            // whether animation should happen only once - while scrolling down
        offset: 50,            // offset (in px) from the original trigger point
        duration: 800,         // values from 0 to 3000, with step 50ms
        easing: 'ease-out-cubic', // default easing for AOS animations
    });

    // 2. Initialize VanillaTilt for 3D card effects
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    // 3. Initialize Particles.js Background
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#8b5cf6", "#3b82f6", "#ffffff"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8b5cf6",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // 4. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Switching
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links li a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 5. Initialize Swiper for Projects
    // const swiper = new Swiper('.projectsSwiper', {
    //     effect: 'slide',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     loop: true,
       
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         dynamicBullets: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 20
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 30
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 40
    //         }
    //     }
    // });
    const swiper = new Swiper(".projectsSwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: false,              // important
  speed: 600,
  allowTouchMove: true,     // allow manual swipe
  autoplay: false,          // disable auto
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

    // 6. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinksList = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinksList.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinksList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 6. Initialize Typed.js
    const typedTarget = document.querySelector('.multiple-text');
    if (typedTarget) {
        new Typed('.multiple-text', {
            strings: ['Full Stack Developer', 'Developer Of AI Generated Apps', 'Passionate Software Engineer', 'Enthusiastic Learner'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // 7. Web3Forms AJAX Submission (No Redirects)
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Stop page from redirecting

            // UI Loading State
            btnText.innerText = 'Sending...';
            btnIcon.classList.remove('fa-paper-plane');
            btnIcon.classList.add('fa-spinner', 'fa-spin');
            submitBtn.disabled = true;
            formStatus.innerText = '';
            formStatus.className = 'form-status-msg';

            const formData = new FormData(contactForm);

            // Send silently in background
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        btnText.innerText = 'Message Sent!';
                        btnIcon.classList.remove('fa-spinner', 'fa-spin');
                        btnIcon.classList.add('fa-check');
                        formStatus.innerText = 'Success! Your message has been routed to my inbox.';
                        formStatus.classList.add('status-success');
                        contactForm.reset();
                    } else {
                        console.log(response);
                        formStatus.innerText = json.message || 'Something went wrong!';
                        formStatus.classList.add('status-error');
                        btnText.innerText = 'Error';
                        btnIcon.classList.remove('fa-spinner', 'fa-spin');
                        btnIcon.classList.add('fa-times');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    formStatus.innerText = 'Network error! Please try again.';
                    formStatus.classList.add('status-error');
                    btnText.innerText = 'Error';
                    btnIcon.classList.remove('fa-spinner', 'fa-spin');
                    btnIcon.classList.add('fa-times');
                })
                .finally(() => {
                    setTimeout(() => {
                        btnText.innerText = 'Send Message';
                        btnIcon.classList.remove('fa-check', 'fa-times');
                        btnIcon.classList.add('fa-paper-plane');
                        submitBtn.disabled = false;
                        formStatus.innerText = '';
                        formStatus.className = 'form-status-msg';
                    }, 5000);
                });
        });
    }
});
