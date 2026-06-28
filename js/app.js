/* ===========================================================
   LifeShield AI
   app.js
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================================
       STICKY NAVBAR
    =========================================================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                header.classList.add("sticky");

            } else {

                header.classList.remove("sticky");

            }

        });

    }

    /* ===========================================================
       MOBILE MENU
    =========================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }

    /* ===========================================================
       SMOOTH SCROLL
    =========================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ===========================================================
       ACTIVE NAVIGATION
    =========================================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (sections.length && navLinks.length) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 120;

                if (window.scrollY >= sectionTop) {

                    current = section.getAttribute("id");

                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + current) {

                    link.classList.add("active");

                }

            });

        });

    }

    /* ===========================================================
       FAQ ACCORDION
    =========================================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

            });

            if (!isActive) {

                item.classList.add("active");

            }

        });

    });

    /* ===========================================================
   COUNTER ANIMATION
=========================================================== */

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const animationDuration = 2000; // 2 seconds

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);

            let startTime = null;

            function updateCounter(timestamp) {

                if (!startTime) startTime = timestamp;

                const elapsed = timestamp - startTime;

                const progress = Math.min(elapsed / animationDuration, 1);

                const currentValue = Math.floor(progress * target);

                counter.textContent = currentValue.toLocaleString();

                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target.toLocaleString();

                }

            }

            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);

        });

    }, {

        threshold: 0.4

    });

    counters.forEach(counter => {

        counter.textContent = "0";

        counterObserver.observe(counter);

    });

}

    /* ===========================================================
       SCROLL REVEAL
    =========================================================== */

    const revealElements = document.querySelectorAll(

        ".feature-card,.step-card,.testimonial-card,.benefit-item,.stat-card,.faq-item"

    );

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.15

        });

        revealElements.forEach(el => revealObserver.observe(el));

    }

    /* ===========================================================
       PROGRESS BAR
    =========================================================== */

    const progressFill = document.querySelector(".progress-fill");

    if (progressFill) {

        const progressObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progressFill.style.width = "78%";

                }

            });

        }, {

            threshold: 0.5

        });

        progressObserver.observe(progressFill);

    }

    /* ===========================================================
       BACK TO TOP
    =========================================================== */

    const backButton = document.createElement("button");

    backButton.className = "back-to-top";

    backButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(backButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backButton.classList.add("show");

        } else {

            backButton.classList.remove("show");

        }

    });

    backButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===========================================================
       BOTPRESS BUTTONS
    =========================================================== */

    document.querySelectorAll("#openChat,#openChat2").forEach(button => {

        button.addEventListener("click", () => {

            if (window.botpress && typeof window.botpress.open === "function") {

                window.botpress.open();

            }

        });

    });

});

/* ===========================================================
   PAGE LOADED
=========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});