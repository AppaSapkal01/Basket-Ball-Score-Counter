let scoreHomeEl = document.getElementById("score-home-el");
let scoreGuestEl = document.getElementById("score-guest-el");

let homeScore = 0;
let guestScore = 0;

// for home team
function freethrowHome() {
    homeScore += 1;
    scoreHomeEl.textContent = homeScore;
}

function midrangeHome() {
    homeScore +=2;
    scoreHomeEl.textContent = homeScore;
}
function longthreeHome() {
    homeScore +=3;
    scoreHomeEl.textContent = homeScore;
}

// for guest team
function freethrowGuest() {
    guestScore += 1;
    scoreGuestEl.textContent = guestScore;
}

function midrangeGuest() {
    guestScore +=2;
    scoreGuestEl.textContent = guestScore;
}
function longthreeGuest() {
    guestScore +=3;
    scoreGuestEl.textContent = guestScore;
}
