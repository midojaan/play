function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("show");
}

function hideAllSections() {
  document.querySelector(".content-wrapper").style.display = "none";
  document.getElementById("about-section").style.display = "none";
  document.getElementById("contact-section").style.display = "none";
  document.getElementById("share-section").style.display = "none";
  document.getElementById("rotana-section").style.display = "none";
}

function goHome() {
  hideAllSections();
  document.getElementById("home").style.display = "block";
  history.pushState({ section: "home" }, '', '#home');
}

function showSection(id) {
  hideAllSections();
  document.getElementById(id).style.display = "block";
  history.pushState({ section: id }, '', '#' + id);
}

window.addEventListener("popstate", function (event) {
  if (event.state) {
    if (event.state.section === "home") {
      goHome();
    } else {
      hideAllSections();
      document.getElementById(event.state.section).style.display = "block";
    }
  } else {
    goHome();
  }
});

window.addEventListener("load", function () {
  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  } else {
    goHome();
  }
});
