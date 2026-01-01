const correctPassword = "21-12";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    openSection("menu");
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

function openGift() {
  document.getElementById("giftBox").style.display = "none";
  document.getElementById("openText").style.display = "none";
  document.getElementById("giftContent").classList.remove("hidden");

  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = ["#7db7ff", "#ffb7d5", "#cdb4db"][
      Math.floor(Math.random() * 3)
    ];
    c.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}
