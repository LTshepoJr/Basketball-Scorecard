let awayscore = 0
let homescore = 0
let away = document.getElementById('awayscore')
let home = document.getElementById('homescore')

function awayFT() {
    awayscore += 1
    away.textContent = awayscore
}

function awayKD() {
    awayscore += 2
    away.textContent = awayscore
}

function awayThree() {
    awayscore += 3
    away.textContent = awayscore
}

function homeFT() {
    homescore += 1
    home.textContent = homescore
}

function homeKD() {
    homescore += 2
    home.textContent = homescore
}

function homeThree() {
    homescore += 3
    home.textContent = homescore
}


