// Animation simple au scroll
const elements = document.querySelectorAll(".section");
const projects = {
  aerophobia:{
              title:"FlightEase VR",
              video:"assets/videos/aerophobia.mp4",
              desc:"VR exposure therapy simulation..."
              },

  kinevr:{
          title:"KineVR",
          video:"assets/videos/kinevr.mp4",
          desc:"VR rehabilitation platform..."
          },

  timeline:{
            title:"Timeline Theater VR",
            video:"assets/videos/timeline.mp4",
            desc:"Interactive computing history experience..."
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

function shareVideo() {
  var fileId = 'https://drive.google.com/file/d/1DPPChO3lIGOXlcfUwn5H2UD1pib-kAdk/view?usp=sharing'; 
  var emailAddress = 'kacemamel8@gmail.com'; 
  
  var file = DriveApp.getFileById(fileId);
  
  
  file.addViewer(emailAddress);
  
  
  // file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
  Logger.findings = 'Shared successfully: ' + file.getName();
}

