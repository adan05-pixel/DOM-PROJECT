// Toggle between two sets of paragraph content
let isOriginalText = true;

function changeText() {
    const para1 = document.getElementById('para1');
    const para2 = document.getElementById('para2');

    if (isOriginalText) {
        para1.textContent = "Gaming lets me explore new worlds and become part of exciting adventures.";
        para2.textContent = "It’s not just fun—it teaches me teamwork, strategy, and perseverance.";
    } else {
        para1.textContent = "Gaming helps me relax, improve my reflexes, and connect with friends.";
        para2.textContent = "I usually play after school or on weekends with my friends online.";
    }

    isOriginalText = !isOriginalText;
}

// Predefined list of games
const games = [
    "Mobile Legends",
    "Clash of Clans",
    "Crossfire",
    "Valorant",
    "PUBG Mobile",
    "League of Legends",
    "Call of Duty: Mobile"
];

let currentGameIndex = 0;

function addGame() {
    const ul = document.getElementById('gameList');

    if (currentGameIndex < games.length) {
        const li = document.createElement('li');
        li.textContent = games[currentGameIndex];
        ul.appendChild(li);
        currentGameIndex++;
    } else {
        alert("All games have been added!");
    }
}

// Remove paragraphs first, then list items
function removeElement() {
    const para1 = document.getElementById('para1');
    const para2 = document.getElementById('para2');
    const ul = document.getElementById('gameList');

    if (para1) {
        para1.remove();
    } else if (para2) {
        para2.remove();
    } else if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
}


