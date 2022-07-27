"use srict";

setInterval(createYoutube, 100);
setInterval(createInstagram, 200);
setInterval(createTelegram, 200);
setInterval(createTwitter, 110);
function createYoutube() {
  const youtube = document.createElement("i");
  youtube.classList.add("fa-brands");
  youtube.classList.add("fa-youtube");

  youtube.style.left = Math.random() * window.innerWidth + "px";
  youtube.style.opacity = Math.random();
  youtube.style.animationDuration = Math.random() * 4 + 2 + "s";
  youtube.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.append(youtube);

  setTimeout(() => {
    youtube.remove();
  }, 4000);
}

function createInstagram() {
  const instagram = document.createElement("i");
  instagram.classList.add("fa-brands");
  instagram.classList.add("fa-instagram");
  instagram.style.left = Math.random() * window.innerWidth + "px";
  instagram.style.opacity = Math.random();
  instagram.style.animationDuration = Math.random() * 4 + 2 + "s";
  instagram.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.append(instagram);

  setTimeout(() => {
    instagram.remove();
  }, 4000);
}

function createTelegram() {
  const telegram = document.createElement("i");
  telegram.classList.add("fa-brands");
  telegram.classList.add("fa-telegram");

  telegram.style.left = Math.random() * window.innerWidth + "px";
  telegram.style.animationDuration = Math.random() * 3 + 2 + "s";
  telegram.style.fontSize = Math.random() * 13 + 8 + "px";
  telegram.style.opacity = Math.random();
  document.body.append(telegram);

  setTimeout(() => {
    telegram.remove();
  }, 5000);
}

function createTwitter() {
  const twitter = document.createElement("i");
  twitter.classList.add("fa-brands");
  twitter.classList.add("fa-twitter");

  twitter.style.left = Math.random() * window.innerWidth + "px";
  twitter.style.opacity = Math.random();
  twitter.style.fontSize = Math.random() * 9 + 8 + "px";
  twitter.style.animationDuration = Math.random() * 4 + 2 + "s";

  document.body.append(twitter);
}
