// GREETING
window.onload = function () {
  let hour = new Date().getHours();
  let greeting = document.getElementById("greeting");

  if (greeting) {
    if (hour < 12) {
      greeting.textContent = "Good morning!";
    } else if (hour < 18) {
      greeting.textContent = "Good afternoon!";
    } else {
      greeting.textContent = "Good evening!";
    }
  }
};

// QUOTE BUTTON
let quoteBtn = document.getElementById("quoteBtn");

if (quoteBtn) {
  quoteBtn.addEventListener("click", function () {
    document.getElementById("quoteText").textContent =
      "Sometimes the strongest people are still healing.";
  });
}

// FAN LIST INPUT
let nameInput = document.getElementById("nameInput");

if (nameInput) {
  nameInput.addEventListener("focus", function () {
    document.getElementById("nameMessage").textContent =
      "Welcome to Tommen!";
  });
}

// RUGBY SCHEDULE CAROUSEL
let games = [
  { opponent: "Tommen vs Ballylaggin", date: "Friday - 7:00 PM" },
  { opponent: "Tommen @ St. Kevin’s", date: "Tuesday - 5:30 PM" },
  { opponent: "Tommen vs West Cork", date: "Saturday - 6:00 PM" },
  { opponent: "Tommen @ Dublin North", date: "Sunday - 4:00 PM" }
];

let index = 0;

let opponent = document.getElementById("opponent");
let date = document.getElementById("date");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

function updateGame() {
  opponent.textContent = games[index].opponent;
  date.textContent = games[index].date;
}

if (nextBtn && prevBtn && opponent && date) {
  nextBtn.addEventListener("click", function () {
    index++;

    if (index >= games.length) {
      index = 0;
    }

    updateGame();
  });

  prevBtn.addEventListener("click", function () {
    index--;

    if (index < 0) {
      index = games.length - 1;
    }

    updateGame();
  });
}