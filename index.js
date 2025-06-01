let awayScore = 0;
let homeScore = 0;
const away = document.getElementById("awayScore");
const home = document.getElementById("homeScore");

function awayFT() {
  awayScore += 1;
  away.textContent = awayScore;
}

function awayMiddy() {
  awayScore += 2;
  away.textContent = awayScore;
}

function awayThree() {
  awayScore += 3;
  away.textContent = awayScore;
}

function homeFT() {
  homeScore += 1;
  home.textContent = homeScore;
}

function homeMiddy() {
  homeScore += 2;
  home.textContent = homeScore;
}

function homeThree() {
  homeScore += 3;
  home.textContent = homeScore;
}
