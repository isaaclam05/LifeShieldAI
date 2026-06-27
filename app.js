// ======================================================
// LifeShield AI Dashboard
// app.js
// Part 1
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initGreeting();

    initDarkMode();

    initClock();

    initSearch();

    initChart();

    initProgressBar();

    initCounter();

    initReveal();

    initFeatureCards();

    initQuickActions();

    initFloatingAI();

    initNotifications();

});

// ======================================================
// Loader
// ======================================================

function initLoader(){

    const loader = document.querySelector(".loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.opacity="0";

        loader.style.pointerEvents="none";

        setTimeout(()=>{

            loader.remove();

        },600);

    });

}

// ======================================================
// Greeting
// ======================================================

function initGreeting(){

    const title=document.querySelector(".welcome h1");

    if(!title) return;

    const hour=new Date().getHours();

    let greeting="Good Morning";

    if(hour>=12 && hour<18){

        greeting="Good Afternoon";

    }

    if(hour>=18){

        greeting="Good Evening";

    }

    title.innerHTML=`${greeting}, Isaac 👋`;

}

// ======================================================
// Live Clock
// ======================================================

function initClock(){

    const p=document.querySelector(".welcome p");

    if(!p) return;

    const clock=document.createElement("div");

    clock.className="live-clock";

    p.after(clock);

    function update(){

        const now=new Date();

        clock.innerHTML=

        now.toLocaleString("en-SG",{

            weekday:"long",

            day:"numeric",

            month:"long",

            hour:"2-digit",

            minute:"2-digit"

        });

    }

    update();

    setInterval(update,1000);

}

// ======================================================
// Dark Mode
// ======================================================

function initDarkMode(){

    const btn=document.querySelector(".darkMode");

    if(!btn) return;

    if(localStorage.getItem("lifeshield-theme")==="dark"){

        document.body.classList.add("dark");

        btn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    btn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        const dark=document.body.classList.contains("dark");

        btn.innerHTML=dark

        ?'<i class="fa-solid fa-sun"></i>'

        :'<i class="fa-solid fa-moon"></i>';

        localStorage.setItem(

            "lifeshield-theme",

            dark?"dark":"light"

        );

    });

}

// ======================================================
// Search
// ======================================================

function initSearch(){

    const input=document.querySelector(".search input");

    if(!input) return;

    input.addEventListener("keyup",(e)=>{

        const keyword=e.target.value.toLowerCase();

        document.querySelectorAll(

            ".transactions tbody tr"

        ).forEach(row=>{

            row.style.display=

            row.innerText

            .toLowerCase()

            .includes(keyword)

            ?"table-row"

            :"none";

        });

    });

}

// ======================================================
// Progress Bar
// ======================================================

function initProgressBar(){

    const bar=document.querySelector(".progress-fill");

    if(!bar) return;

    bar.style.width="0%";

    setTimeout(()=>{

        bar.style.transition="width 1.5s ease";

        bar.style.width="74%";

    },400);

}

// ======================================================
// Animated Balance Counter
// ======================================================

function initCounter(){

    const balance=document.querySelector(".account-right h3");

    if(!balance) return;

    let start=0;

    const end=56850;

    const duration=1800;

    const increment=end/(duration/16);

    const timer=setInterval(()=>{

        start+=increment;

        if(start>=end){

            start=end;

            clearInterval(timer);

        }

        balance.innerHTML=

        "$"+

        Math.floor(start)

        .toLocaleString();

    },16);

}

// ======================================================
// Scroll Reveal
// ======================================================

function initReveal(){

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("fade-up");

                }

            });

        },

        {

            threshold:.15

        }

    );

    document.querySelectorAll(

        ".card,.feature,.quick-card,.activity-item"

    ).forEach(el=>{

        observer.observe(el);

    });

}

// ======================================================
// Toast
// ======================================================

function toast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=message;

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

// ======================================================
// Feature Cards
// ======================================================

function initFeatureCards(){

    const cards=document.querySelectorAll(".feature");

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            cards.forEach(c=>c.classList.remove("active"));

            card.classList.add("active");

            toast(`✅ ${card.querySelector("h3").innerText}`);

        });

    });

}

// ======================================================
// Quick Actions
// ======================================================

function initQuickActions(){

    document.querySelectorAll(".quick-card")

    .forEach(card=>{

        card.addEventListener("click",()=>{

            const action=

            card.querySelector("span").innerText;

            toast(`🚀 ${action} coming soon`);

        });

    });

}

// ======================================================
// Floating AI Button
// ======================================================

function initFloatingAI(){

    const btn=document.querySelector(".floating-ai");

    if(!btn) return;

    btn.addEventListener("click",()=>{

        const assistant=document.querySelector(".assistant-card");

        if(assistant){

            assistant.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

}

// ======================================================
// Notification Bell
// ======================================================

function initNotifications(){

    const bell=document.querySelector(".icon-btn");

    if(!bell) return;

    bell.addEventListener("click",()=>{

        toast("🔔 3 new notifications");

    });

}

// ======================================================
// Doughnut Chart
// ======================================================

function initChart(){

    const canvas=document.getElementById("expenseChart");

    if(!canvas) return;

    new Chart(canvas,{

        type:"doughnut",

        data:{

            labels:[

                "Housing",

                "Food",

                "Transport",

                "Insurance"

            ],

            datasets:[{

                data:[

                    850,

                    620,

                    364,

                    290

                ],

                backgroundColor:[

                    "#E30613",

                    "#ff6c82",

                    "#3B82F6",

                    "#22C55E"

                ],

                borderWidth:0,

                hoverOffset:12

            }]

        },

        options:{

            responsive:true,

            cutout:"72%",

            plugins:{

                legend:{

                    display:false

                }

            }

        }

    });

}

// ======================================================
// AI Tips Rotation
// ======================================================

const aiTips=[

"💡 Save 20% of every paycheck.",

"📈 Investment portfolio grew this month.",

"🏠 Housing expenses remain healthy.",

"🚗 Transport spending decreased.",

"💳 Credit utilisation is excellent.",

"🛡 Insurance coverage is fully updated."

];

let tipIndex=0;

setInterval(()=>{

    const list=document.querySelector(".ai-card ul");

    if(!list) return;

    list.firstElementChild.innerHTML=

    aiTips[tipIndex];

    tipIndex++;

    if(tipIndex>=aiTips.length){

        tipIndex=0;

    }

},6000);

// ======================================================
// Fake Live Balance
// ======================================================

setInterval(()=>{

    const balance=document.querySelector(".account-right h3");

    if(!balance) return;

    const current=parseInt(

        balance.innerText

        .replace(/\$|,/g,"")

    );

    const change=Math.floor(Math.random()*30)-15;

    const updated=current+change;

    balance.innerHTML=

    "$"+updated.toLocaleString();

},7000);

// ======================================================
// Keyboard Shortcut
// CTRL + /
// ======================================================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="/"){

        const search=document.querySelector(".search input");

        if(search){

            search.focus();

        }

    }

});

// ======================================================
// Avatar Click
// ======================================================

const avatar=document.querySelector(".avatar");

if(avatar){

    avatar.addEventListener("click",()=>{

        toast("👤 Profile page coming soon");

    });

}

// ======================================================
// Promo Button
// ======================================================

document.querySelectorAll(".primary-btn")

.forEach(button=>{

    button.addEventListener("click",()=>{

        toast("🚀 Feature launching soon");

    });

});

// ======================================================
// AI Assistant Ready
// ======================================================

const iframe=document.querySelector(".assistant-card iframe");

if(iframe){

    iframe.addEventListener("load",()=>{

        toast("🤖 LifeShield AI is ready");

    });

}

// ======================================================
// Auto Refresh Dashboard
// ======================================================

setInterval(()=>{

    console.log("Dashboard refreshed");

},60000);

// ======================================================
// Card Hover Tilt Effect
// ======================================================

document.querySelectorAll(
    ".feature,.quick-card,.card"
).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=((y/rect.height)-0.5)*-8;

        const rotateY=((x/rect.width)-0.5)*8;

        card.style.transform=
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// ======================================================
// Animated Notification Badge
// ======================================================

const badge=document.querySelector(".icon-btn span");

if(badge){

    let notifications=3;

    setInterval(()=>{

        notifications++;

        badge.innerHTML=notifications;

        badge.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.35)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:500

        });

    },45000);

}

// ======================================================
// Live Greeting Messages
// ======================================================

const messages=[

"Everything looks healthy today 💰",

"AI detected lower spending this week 📉",

"You're saving more than last month 🎉",

"Insurance coverage is fully protected 🛡️",

"Keep investing consistently 📈",

"Emergency fund is growing nicely 💵"

];

const welcomeText=document.querySelector(".welcome p");

if(welcomeText){

    let index=0;

    setInterval(()=>{

        welcomeText.style.opacity=0;

        setTimeout(()=>{

            welcomeText.innerHTML=

            messages[index];

            welcomeText.style.opacity=1;

            index++;

            if(index>=messages.length){

                index=0;

            }

        },300);

    },6000);

}

// ======================================================
// Transaction Hover Animation
// ======================================================

document.querySelectorAll(

".transactions tbody tr"

).forEach(row=>{

    row.addEventListener("mouseenter",()=>{

        row.style.transform="scale(1.01)";

        row.style.transition=".25s";

    });

    row.addEventListener("mouseleave",()=>{

        row.style.transform="scale(1)";

    });

});

// ======================================================
// Feature Counter Animation
// ======================================================

document.querySelectorAll(

".growth"

).forEach(item=>{

    item.animate([

        {

            transform:"translateY(0)"

        },

        {

            transform:"translateY(-4px)"

        },

        {

            transform:"translateY(0)"

        }

    ],{

        duration:2500,

        iterations:Infinity

    });

});

// ======================================================
// Smooth Scroll
// ======================================================

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(

            anchor.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================================
// Floating AI Pulse
// ======================================================

const floatingAI=document.querySelector(".floating-ai");

if(floatingAI){

    setInterval(()=>{

        floatingAI.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.12)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:1000

        });

    },5000);

}

// ======================================================
// Console Welcome
// ======================================================

console.log(

"%cLifeShield AI Dashboard",

"color:#E30613;font-size:22px;font-weight:bold;"

);

console.log(

"🚀 Premium Dashboard Loaded Successfully"

);

console.log(

"Developed for Isaac"

);

// ======================================================
// END OF APP.JS
// ======================================================