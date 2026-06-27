// ==========================================================
// LifeShield Dashboard
// app.js
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initDarkMode();

    initMobileMenu();

    initScrollAnimation();

    initProgressBars();

    initCounters();

    initCards();

    initNotifications();

});

// ==========================================================
// LOADER
// ==========================================================

function initLoader(){

    const loader=document.querySelector(".loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        setTimeout(()=>{

            loader.remove();

        },500);

    });

}

// ==========================================================
// DARK MODE
// ==========================================================

function initDarkMode(){

    const btn=document.getElementById("darkToggle");

    if(!btn) return;

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        btn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    btn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        const dark=document.body.classList.contains("dark");

        localStorage.setItem(

            "theme",

            dark ? "dark" : "light"

        );

        btn.innerHTML=dark

            ? '<i class="fa-solid fa-sun"></i>'

            : '<i class="fa-solid fa-moon"></i>';

    });

}

// ==========================================================
// MOBILE MENU
// ==========================================================

function initMobileMenu(){

    const menu=document.querySelector(".menu-btn");

    const mobile=document.querySelector(".mobile-menu");

    if(!menu || !mobile) return;

    menu.addEventListener("click",()=>{

        mobile.classList.toggle("show");

    });

}

// ==========================================================
// CARD HOVER EFFECT
// ==========================================================

function initCards(){

    document

    .querySelectorAll(

        ".card,.overview-card,.action-card,.policy-card"

    )

    .forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}

// ==========================================================
// NOTIFICATION BUTTON
// ==========================================================

function initNotifications(){

    const bell=document.querySelector(".notification-btn");

    if(!bell) return;

    bell.addEventListener("click",()=>{

        toast("No new notifications");

    });

}

// ==========================================================
// SCROLL ANIMATION
// ==========================================================

function initScrollAnimation(){

    const elements=document.querySelectorAll(

        ".card,.overview-card,.action-card,.policy-card,.hero-left,.balance-card"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("animate");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(el=>{

        observer.observe(el);

    });

}

// ==========================================================
// PROGRESS BAR ANIMATION
// ==========================================================

function initProgressBars(){

    const bars=document.querySelectorAll(".progress-bar");

    bars.forEach(bar=>{

        const width=bar.style.width;

        bar.style.width="0";

        setTimeout(()=>{

            bar.style.width=width;

        },300);

    });

}

// ==========================================================
// COUNTER ANIMATION
// ==========================================================

function initCounters(){

    document.querySelectorAll(".health-score").forEach(counter=>{

        const target=parseInt(counter.innerText);

        let current=0;

        const timer=setInterval(()=>{

            current++;

            counter.innerText=current;

            if(current>=target){

                clearInterval(timer);

            }

        },18);

    });

}

// ==========================================================
// TOAST NOTIFICATION
// ==========================================================

function toast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=`

        <i class="fa-solid fa-circle-check"></i>

        <span>${message}</span>

    `;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },400);

    },3000);

}

// ==========================================================
// SMOOTH SCROLL
// ==========================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});

// ==========================================================
// ACCOUNT CARD CLICK
// ==========================================================

document.querySelectorAll(".account-item").forEach(card=>{

    card.addEventListener("click",()=>{

        toast("Opening account details...");

    });

});

// ==========================================================
// QUICK ACTIONS
// ==========================================================

document.querySelectorAll(".action-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 25px 50px rgba(227,6,19,.15)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

// ==========================================================
// PAGE SCROLL EFFECT
// ==========================================================

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    if(window.scrollY>30){

        navbar.style.padding="14px 30px";

        navbar.style.boxShadow="0 18px 45px rgba(0,0,0,.12)";

    }else{

        navbar.style.padding="18px 30px";

        navbar.style.boxShadow="";

    }

});

// ==========================================================
// KEYBOARD SHORTCUTS
// ==========================================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        document

            .querySelector(".mobile-menu")

            ?.classList.remove("show");

    }

});

// ==========================================================
// CONSOLE MESSAGE
// ==========================================================

console.log(

"%cLifeShield Dashboard Ready",

"color:#E30613;font-size:18px;font-weight:bold;"

);

console.log(

"Developed with HTML, CSS & JavaScript"

);

// ==========================================================
// END OF APP.JS
// ==========================================================