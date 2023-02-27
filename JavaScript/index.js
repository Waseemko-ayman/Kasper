let myButton = document.getElementById("group");
let header = document.getElementById("header");
let section = document.querySelector("#our-skills");
let spanProgrss = document.querySelectorAll("#our-skills .skills span");

// Form contact
let statsSection = document.getElementById("stats");
let numStat = document.querySelectorAll(".box .number");
let started = false;

window.onscroll = function () {
    // Group Button
    if (window.pageYOffset >= 400) {
        myButton.style.display = "block";
        
    } else {
        myButton.style.display = "none";
    }

    // Progrss Section
    if (window.scrollY >= section.offsetTop - 300) {
        spanProgrss.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    };

    // Form contact
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            numStat.forEach((num) => startCount(num));
        }
        started = true;
    }

    // Heeader
    if (window.pageYOffset >= 200) {
        header.style.position = "fixed";
        header.style.backgroundColor = "rgba(0 0 0 / 80%)";
    } else {
        header.style.position = "absolute";
        header.style.backgroundColor = "none";
    }
    
};

// Group Button
myButton.onclick = function () {
    window.scrollTo(0, 0);
}

// Form contact
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal); // قسمتها علشان ينتهوا مع بعض
}

/***********************************************************************/

// Menu
let toggleMenu = document.getElementById("toggleMenu");
let menu = document.getElementById("menu");

toggleMenu.onclick = function () {
    if(menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

/***********************************************************************/

// Form contact
// Under development and modification

document.getElementById("contact").onsubmit = function (e) {
    let userInput = document.querySelector(`[name="username"]`).value;
    let emailInput = document.querySelector(`[name="email"]`).value;
    let phoneInput = document.querySelector(`[name="message"]`).value;

    let userInputRe = /^[a-z0-9_-\s]{3,50}$/ig;
    let validationUserResult = userInputRe.test(userInput);
    
    // let emailInputRe = /\w+\d{0,3}@\w+\.\W+[^0-9]/ig;
    let emailInputRe = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/ig;
    let validationEmailResult = emailInputRe.test(emailInput);

    if(validationUserResult == false || validationEmailResult == false || phoneInput == false) {
        return false;
    }

    return true;
};

/***********************************************************************/