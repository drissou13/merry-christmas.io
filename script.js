// Variables globales
let score = 0;
let currentGift = "";
let currentLocation = "";

// Listes de cadeaux et de destinations
const gifts = ["Teddy Bear", "Bicycle", "Lego", "Doll", "Toy Car", "Puzzle"];
const locations = ["Paris", "New York", "Tokyo", "Sydney", "Moscou", "Rio"];

// Références aux éléments HTML
const taskElement = document.getElementById("task");
const giftInput = document.getElementById("gift");
const locationInput = document.getElementById("location");
const validateButton = document.getElementById("validate");
const scoreElement = document.getElementById("score");
const musicToggle = document.getElementById("music-toggle");
const music = document.getElementById("background-music");

// Générer une nouvelle tâche
function generateTask() {
  currentGift = gifts[Math.floor(Math.random() * gifts.length)];
  currentLocation = locations[Math.floor(Math.random() * locations.length)];
  taskElement.textContent = `Livrer un ${currentGift} à ${currentLocation} !`;
}

// Vérifier la réponse
function checkResponse() {
  const userGift = giftInput.value.trim();
  const userLocation = locationInput.value.trim();

  if (userGift.toLowerCase() === currentGift.toLowerCase() &&
      userLocation.toLowerCase() === currentLocation.toLowerCase()) {
    score++;
    alert("Bravo ! Cadeau livré avec succès !");
  } else {
    alert("Erreur ! Mauvaise livraison !");
  }
  scoreElement.textContent = `Score : ${score}`;
  giftInput.value = "";
  locationInput.value = "";
  generateTask();
}

// Activer ou désactiver la musique
musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "🎵 Désactiver Musique";
  } else {
    music.pause();
    musicToggle.textContent = "🎵 Activer Musique";
  }
});

// Initialisation
validateButton.addEventListener("click", checkResponse);
generateTask();