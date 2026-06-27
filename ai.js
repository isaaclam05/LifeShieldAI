// =========================================================
// LifeShield AI
// ai.js
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    initSuggestionCards();

    initTipCards();

    initDarkMode();

    initLoader();

    initSearchFocus();

    initRobotAnimation();

    initOnlineStatus();

    initKeyboardShortcut();

});

// =========================================================
// Loader
// =========================================================

function initLoader(){

    const loader=document.querySelector(".loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.opacity="0";

        loader.style.pointerEvents="none";

        setTimeout(()=>{

            loader.remove();

        },500);

    });

}

// =========================================================
// Dark Mode
// =========================================================

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

        localStorage.setItem(

            "lifeshield-theme",

            dark?"dark":"light"

        );

        btn.innerHTML=dark

        ?'<i class="fa-solid fa-sun"></i>'

        :'<i class="fa-solid fa-moon"></i>';

    });

}

// =========================================================
// Suggested Questions
// =========================================================

function initSuggestionCards(){

    document

    .querySelectorAll(".suggestion-card")

    .forEach(card=>{

        card.addEventListener("click",()=>{

            const text=card.innerText.trim();

            copyPrompt(text);

            toast(

                "Question copied. Paste it into LifeShield AI."

            );

        });

    });

}

// =========================================================
// Popular Questions
// =========================================================

function initTipCards(){

    document

    .querySelectorAll(".tip-card")

    .forEach(card=>{

        card.addEventListener("click",()=>{

            const text=card.innerText.trim();

            copyPrompt(text);

            toast(

                "Prompt copied."

            );

        });

    });

}

// =========================================================
// Copy Text
// =========================================================

function copyPrompt(text){

    navigator.clipboard.writeText(text);

}

// =========================================================
// Search Shortcut
// =========================================================

function initSearchFocus(){

    const search=document.querySelector(".search input");

    if(!search) return;

    document.addEventListener("keydown",(e)=>{

        if(e.ctrlKey && e.key==="/"){

            e.preventDefault();

            search.focus();

        }

    });

}

// =========================================================
// Robot Animation
// =========================================================

function initRobotAnimation(){

    const robot=document.querySelector(".ai-avatar");

    if(!robot) return;

    robot.addEventListener("mouseenter",()=>{

        robot.style.transform="scale(1.05) rotate(5deg)";

    });

    robot.addEventListener("mouseleave",()=>{

        robot.style.transform="";

    });

}

// =========================================================
// Online Status Pulse
// =========================================================

function initOnlineStatus(){

    const status=document.querySelector(".online-status");

    if(!status) return;

    setInterval(()=>{

        status.animate([

            {

                opacity:.6

            },

            {

                opacity:1

            },

            {

                opacity:.6

            }

        ],{

            duration:1200

        });

    },1800);

}

// =========================================================
// Toast Notification
// =========================================================

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

// =========================================================
// Console Message
// =========================================================

console.log(

"%cLifeShield AI Ready",

"color:#E30613;font-size:18px;font-weight:bold;"

);

console.log(

"AI Assistant page loaded successfully."

);

// =========================================================
// END OF AI.JS
// =========================================================