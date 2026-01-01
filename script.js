const correctPassword = "21-12";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    openSection("loveGame");
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

function openSection(id) {
  document
    .querySelectorAll(".card")
    .forEach((c) => c.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function back() {
  openSection("menu");
}

/* LOVE GAME */
function loveYes() {
  openSection("loveYesSlide");
}

function loveNo() {
  alert("no is disabled. try again pls 😔💔");
}

/* GIFT */
function openGift() {
  document.getElementById("giftBox").style.display = "none";
  document.getElementById("openText").style.display = "none";
  document.getElementById("giftContent").classList.remove("hidden");
}
