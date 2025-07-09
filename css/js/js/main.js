function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}

window.addEventListener('click', function(e) {
  const menu = document.getElementById('menu');
  const button = document.getElementById('menuButton');
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.remove('show');
  }
});

function showAbout() {
  document.querySelector('.content-wrapper').style.display = 'none';
  document.getElementById('about-section').style.display = 'block';
  document.getElementById('share-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  document.getElementById('menu').classList.remove('show');
}

function showShare() {
  document.querySelector('.content-wrapper').style.display = 'none';
  document.getElementById('share-section').style.display = 'block';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  document.getElementById('menu').classList.remove('show');
}

function showContact() {
  document.querySelector('.content-wrapper').style.display = 'none';
  document.getElementById('contact-section').style.display = 'block';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('share-section').style.display = 'none';
  document.getElementById('menu').classList.remove('show');
}

function goHome() {
  document.querySelector('.content-wrapper').style.display = 'block';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('share-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  document.getElementById('menu').classList.remove('show');
}
