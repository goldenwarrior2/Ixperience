let homeScore = document.getElementById("home")
let currHome = 0

function homePlus1() {
    currHome += 1
    homeScore.textContent = currHome
}

function homePlus2() {
    currHome += 2
    homeScore.textContent = currHome
}

function homePlus3() {
    currHome += 3
    homeScore.textContent = currHome
}

let guestScore = document.getElementById("guest")
let currGuest = 0

function guestPlus1() {
    currGuest += 1
    guestScore.textContent = currGuest
}

function guestPlus2() {
    currGuest += 2
    guestScore.textContent = currGuest
}

function guestPlus3() {
    currGuest += 3
    guestScore.textContent = currGuest
}