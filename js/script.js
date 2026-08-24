"use strict";

// -----------------------------
// Easily editable content
// -----------------------------
const gifts = [
  {
    id: 1,
    title: "Geschenk",
    icon: "🎁",
    teaser: "Eine kleine Überraschung wartet hier.",
    // TODO: Geschenk 1 mit echtem Inhalt ersetzen.
    content: "Dieses Geschenk wird bald enthüllt ❤️"
  },
  {
    id: 2,
    title: "Geschenk",
    icon: "💌",
    teaser: "Vielleicht steckt hier später eine Nachricht drin.",
    // TODO: Geschenk 2 mit echtem Inhalt ersetzen.
    content: "Dieses Geschenk wird bald enthüllt ❤️"
  },
  {
    id: 3,
    title: "Geschenk",
    icon: "✨",
    teaser: "Für etwas, das wir erst später verraten.",
    // TODO: Geschenk 3 mit echtem Inhalt ersetzen.
    content: "Dieses Geschenk wird bald enthüllt ❤️"
  }
];

const state = {
  surpriseOpened: false,
  sparkClicks: 0,
  musicPlaying: false
};

const elements = {
  openSurpriseButton: document.querySelector("#openSurpriseButton"),
  giftsButton: document.querySelector("#giftsButton"),
  giftPopupButton: document.querySelector("#giftPopupButton"),
  letterButton: document.querySelector("#letterButton"),
  experience: document.querySelector("#experience"),
  welcomeSection: document.querySelector(".section.welcome"),
  giftGrid: document.querySelector("#giftGrid"),
  modal: document.querySelector("#contentModal"),
  modalIcon: document.querySelector("#modalIcon"),
  modalTitle: document.querySelector("#modalTitle"),
  modalContent: document.querySelector("#modalContent"),
  modalImage: document.querySelector("#modalImage"),
  modalPanel: document.querySelector(".modal-panel"),
  toast: document.querySelector("#toast"),
  confettiCanvas: document.querySelector("#confettiCanvas"),
  secretHeart: document.querySelector("#secretHeart"),
  sparkButton: document.querySelector("#sparkButton"),
  footerHeart: document.querySelector("#footerHeart"),
  momentsGrid: document.querySelector("#momentsGrid"),
  musicToggle: document.querySelector("#musicToggle"),
  musicIcon: document.querySelector("#musicIcon"),
  backgroundMusic: document.querySelector("#backgroundMusic")
};

function renderGiftCards() {
  elements.giftGrid.innerHTML = gifts.map((gift, index) => `
    <button class="gift-card" type="button" data-gift-id="${gift.id}">
      <span class="gift-index">Geschenk</span>
      <span class="gift-box" aria-hidden="true">${gift.icon}</span>
      <h3>${gift.title}</h3>
      <p>${gift.teaser}</p>
    </button>
  `).join("");
}

function openExperience() {
  if (state.surpriseOpened) {
    document.querySelector("#moments")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  state.surpriseOpened = true;
  elements.experience.classList.add("is-visible");
  elements.experience.setAttribute("aria-hidden", "false");
  elements.openSurpriseButton.classList.add("is-opened");
  elements.openSurpriseButton.innerHTML = "Überraschung geöffnet <span aria-hidden=\"true\">❤️</span>";

  launchConfetti(120);
  showToast("Happy Birthday Laura ❤️");
  revealVisibleSections();

  window.setTimeout(() => {
    elements.experience.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 480);
}

function openGifts() {
  document.querySelector("#gifts")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openLetter() {
  launchConfetti(120);
  openModal(
    "",
    `Mausi, ich wünsche dir von Herzen nur das Beste zu deinem Geburtstag! ❤️

  Ich habe vorher noch nie wirklich programmiert, aber für dich wollte ich mich einfach mal daran versuchen. Ich hoffe sehr, dass dir diese kleine Seite gefällt und ich dir damit eine Freude machen kann.

  Während ich diesen Brief hier schreibe, hoffe ich schon die ganze Zeit, dass dein Geburtstag genauso schön wird, wie du ihn dir vorgestellt hast, und dass du deinen Tag in vollen Zügen genießen kannst.

  In deinem Brief zu meinem Geburtstag hast du dir neues Lego gewünscht, also habe ich natürlich auch eine kleine Überraschung für dich. So hast du ab jetzt immer frische, schöne Blumen zu Hause und musst sie nicht mal gießen. ;)

  Wir haben mittlerweile schon echt einiges zusammen erlebt und ich finde es einfach schön, wie offen du gegenüber meinen Interessen bist. Du bist immer bereit, neue Dinge mit mir auszuprobieren, egal ob es Sachen sind, die eigentlich eher mich interessieren, oder Dinge, die wir beide vorher noch nie gemacht haben.

  Sei es, dass du mit mir Star Wars geschaut hast, mit mir Switch spielst, Lego baust oder dich sogar dafür interessierst, welchen von irgendeiner Studie neu belegten Gym Split ich aktuell mal wieder mache HAHAHA.

  Genau solche kleinen Dinge bedeuten mir unglaublich viel. Ich liebe es, dass wir zusammen lachen, Neues ausprobieren und ich bei dir einfach ich selbst sein kann. Ich freue mich auf alles, was wir noch gemeinsam erleben werden und auf all die Erinnerungen, die noch dazukommen.

  Und wo wir gerade von gemeinsamen Erlebnissen sprechen, wartet als Nächstes natürlich noch mein großes Geschenk für dich! ❤️

  Ich liebe dich und bin unglaublich froh, dass es dich gibt. ❤️

  Ich liebe deine Art, dein Lachen, deinen Humor und all die kleinen Dinge an dir, die dich einfach zu dir machen. Ich liebe es, wie wir miteinander umgehen, wie viel wir zusammen lachen können und dass selbst ganz normale Tage mit dir irgendwie schöner sind.

  Ich bin einfach froh, dich an meiner Seite zu haben und freue mich auf alles, was noch vor uns liegt.

  Ich liebe dich, Mausi. ❤️

  Dein Manuel`,
    "",
    "assets/images/laura3.jpeg"
  );
}

function openGiftPopup() {
  launchConfetti(80);
  openModal(
    "",
    "Ich freue mich auf einem gemeinsamen Abend mit dir ❤️",
    "",
    "assets/images/gutschein.png"
  );
}

function handleGiftClick(event) {
  const card = event.target.closest("[data-gift-id]");
  if (!card) return;

  const giftId = Number(card.dataset.giftId);
  const gift = gifts.find(item => item.id === giftId);
  if (!gift) return;

  card.classList.add("is-opening");
  window.setTimeout(() => card.classList.remove("is-opening"), 760);
  window.setTimeout(() => {
    openModal(gift.title, gift.content, gift.icon);
  }, 430);
}

function handleMomentClick(event) {
  const card = event.target.closest(".moment-card");
  if (!card) return;

  openModal(
    card.dataset.title || "Unser Moment ❤️",
    card.dataset.caption || "Hier kommt später eine gemeinsame Erinnerung hin.",
    "📸"
  );
}

function openModal(title, content, icon = "❤️", imageSrc = "") {
  elements.modalIcon.textContent = icon;
  elements.modalIcon.hidden = !icon;
  elements.modalTitle.textContent = title;
  elements.modalTitle.hidden = !title;
  elements.modalContent.textContent = content;
  elements.modalContent.hidden = !content;
  if (elements.modalImage) {
    elements.modalImage.hidden = !imageSrc;
    elements.modalImage.src = imageSrc;
  }
  elements.modalPanel.classList.toggle("has-background-image", Boolean(imageSrc));
  elements.modalPanel.classList.toggle("gift-modal", imageSrc.includes("gutschein"));
  elements.modalPanel.style.backgroundImage = imageSrc ? `url("${imageSrc}")` : "";
  elements.modal.classList.add("is-visible");
  elements.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = elements.modal.querySelector(".modal-close");
  closeButton?.focus();
}

function closeModal() {
  elements.modal.classList.remove("is-visible");
  elements.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function showToast(message) {
  window.clearTimeout(showToast.timeoutId);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  showToast.timeoutId = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2600);
}

function revealVisibleSections() {
  document.querySelectorAll(".reveal-on-scroll").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      section.classList.add("is-revealed");
    }
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    sections.forEach(section => section.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));
}

function triggerSecretHeart() {
  launchConfetti(70);
  showToast("Du hast etwas gefunden 👀❤️");
  elements.secretHeart.animate(
    [
      { transform: "scale(1) rotate(0deg)" },
      { transform: "scale(2.2) rotate(-12deg)" },
      { transform: "scale(1) rotate(0deg)" }
    ],
    { duration: 650, easing: "cubic-bezier(.16,1,.3,1)" }
  );
}

function triggerSparkEasterEgg() {
  state.sparkClicks += 1;

  if (state.sparkClicks < 5) {
    const messages = [
      "Hmm ... da war was ✨",
      "Nochmal? 👀",
      "Fast entdeckt ...",
      "Ein Klick fehlt noch ❤️"
    ];
    showToast(messages[state.sparkClicks - 1]);
    return;
  }

  state.sparkClicks = 0;
  launchConfetti(160);
  openModal("Geheime Überraschung ✨", "Okay, du bist offiziell zu neugierig. Genau deshalb gibt es hier Easter Eggs ❤️", "🥚");
}

function triggerFooterEgg() {
  launchConfetti(45);
  showToast("Dieses Herz ist für dich ❤️");
}

async function toggleMusic() {
  if (state.musicPlaying) {
    elements.backgroundMusic.pause();
    state.musicPlaying = false;
    elements.musicIcon.textContent = "🔇";
    showToast("Musik pausiert");
    return;
  }

  try {
    await elements.backgroundMusic.play();
    state.musicPlaying = true;
    elements.musicIcon.textContent = "🔊";
    showToast("Musik an 🎵");
  } catch (error) {
    // The placeholder music file intentionally does not exist in V1.
    console.info("Keine Musikdatei gefunden. Lege eine MP3 unter assets/music/laura-song.mp3 ab.");
    state.musicPlaying = false;
    elements.musicIcon.textContent = "🔇";
    showToast("Noch keine Musik hinterlegt 🎵");
  }
}

function launchConfetti(pieceCount = 100) {
  const canvas = elements.confettiCanvas;
  const context = canvas.getContext("2d");
  if (!context) return;

  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(dpr, 0, 0, dpr, 0, 0);

  const colors = ["#e76789", "#f8a9bc", "#ffd9a8", "#a93c60", "#ffffff"];
  const pieces = Array.from({ length: pieceCount }, () => ({
    x: Math.random() * width,
    y: -20 - Math.random() * height * 0.35,
    w: 5 + Math.random() * 7,
    h: 8 + Math.random() * 10,
    speedY: 2.5 + Math.random() * 4,
    speedX: -1.4 + Math.random() * 2.8,
    rotation: Math.random() * Math.PI,
    rotationSpeed: -0.12 + Math.random() * 0.24,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  const start = performance.now();
  const duration = 2600;

  function draw(now) {
    const elapsed = now - start;
    context.clearRect(0, 0, width, height);

    pieces.forEach(piece => {
      piece.x += piece.speedX;
      piece.y += piece.speedY;
      piece.rotation += piece.rotationSpeed;

      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.rotation);
      context.fillStyle = piece.color;
      context.beginPath();
      context.moveTo(0, piece.h * 0.35);
      context.bezierCurveTo(-piece.w * 0.7, -piece.h * 0.05, -piece.w * 0.55, -piece.h * 0.55, 0, -piece.h * 0.2);
      context.bezierCurveTo(piece.w * 0.55, -piece.h * 0.55, piece.w * 0.7, -piece.h * 0.05, 0, piece.h * 0.35);
      context.fill();
      context.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(draw);
    } else {
      context.clearRect(0, 0, width, height);
    }
  }

  requestAnimationFrame(draw);
}

function handleKeydown(event) {
  if (event.key === "Escape" && elements.modal.classList.contains("is-visible")) {
    closeModal();
  }
}

function bindEvents() {
  elements.openSurpriseButton.addEventListener("click", openExperience);
  elements.giftsButton.addEventListener("click", openGifts);
  elements.giftPopupButton.addEventListener("click", openGiftPopup);
  elements.letterButton.addEventListener("click", openLetter);
  elements.giftGrid?.addEventListener("click", handleGiftClick);
  elements.momentsGrid?.addEventListener("click", handleMomentClick);
  elements.secretHeart.addEventListener("click", triggerSecretHeart);
  elements.sparkButton?.addEventListener("click", triggerSparkEasterEgg);
  elements.footerHeart.addEventListener("click", triggerFooterEgg);
  elements.musicToggle.addEventListener("click", toggleMusic);
  document.addEventListener("keydown", handleKeydown);

  elements.modal.addEventListener("click", event => {
    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });
}

function init() {
  setupScrollReveal();
  bindEvents();
}

init();
