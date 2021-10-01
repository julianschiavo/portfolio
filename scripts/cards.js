function expandNextBusCard() {
    closeAllCards();

    const card = document.getElementById("nextbus-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandClusterCardsCard() {
    closeAllCards();

    const card = document.getElementById("clustercards-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandLaunchCSCard() {
    closeAllCards();

    const card = document.getElementById("launchcs-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandWWDCCard() {
    closeAllCards();

    const card = document.getElementById("wwdc-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandFuzeCard() {
    closeAllCards();

    const card = document.getElementById("fuze-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandCISxIdeasCard() {
    closeAllCards();

    const card = document.getElementById("cisxideas-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandKids4KidsCard() {
    closeAllCards();

    const card = document.getElementById("kids4kids-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandSilentmodeCard() {
    closeAllCards();

    const card = document.getElementById("silentmode-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function expandInturioCard() {
    closeAllCards();

    const card = document.getElementById("inturio-expanded");
    card.classList.add("displayed");
    setTimeout(function () {
        card.classList.add('visible');
    }, 10);
}

function closeAllCards() {
    const cards = document.getElementsByClassName("expanded-card");
    Array.from(cards).forEach(card => {
        if (!card.classList.contains("displayed") || !card.classList.contains("visible")) {
            return;
        }
        card.classList.remove("visible");
        setTimeout(function () {
            card.classList.remove('displayed');
        }, 500);
    });
}

/* Background Clicks */

window.addEventListener('load', () => {
    const get = document.getElementById.bind(document);
    const query = document.querySelector.bind(document);

    let root = query('.expanded-card');
    root.addEventListener('click', closeAllCards);

    let modal = query('.expanded-card .content');  
    modal.addEventListener('click', modalClick);
  
    function modalClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    }
})

// Adapted from https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
document.onkeydown = function(event) {
    event = event || window.event;
    var isEscape = false;
    if ("key" in event) {
        isEscape = (event.key === "Escape" || event.key === "Esc");
    } else {
        isEscape = (event.keyCode === 27);
    }
    if (isEscape) {
        closeAllCards();
    }
};