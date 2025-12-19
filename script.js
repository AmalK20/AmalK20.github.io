// Animation simple au scroll
const elements = document.querySelectorAll(".section");
const projects = {
  aerophobia: {
    title: "Simulation VR – Aérophobie",
    video: "assets/videos/aerophobia.mp4",
    desc: "Simulation immersive permettant une exposition progressive à la peur de l’avion."
  }
};

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
});

function openProject(id) {
  document.getElementById("modal-title").innerText = projects[id].title;
  document.getElementById("modal-video").src = projects[id].video;
  document.getElementById("modal-desc").innerText = projects[id].desc;
  document.getElementById("project-modal").style.display = "block";
}

function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}
