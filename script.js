const app = document.getElementById('app');

function navigate() {
  const hash = window.location.hash || '#home';

  if (hash === '#home') {
    app.innerHTML = '<h1>Welcome to Home</h1><p>This is your homepage.</p>';
  } else if (hash === '#about') {
    app.innerHTML = '<h1>About</h1><p>This is the about page.</p>';
  } else if (hash === '#contact') {
    app.innerHTML = '<h1>Contact</h1><p>Here’s how you can reach us.</p>';
  } else {
    app.innerHTML = '<h1>404</h1><p>Page not found.</p>';
  }
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);
