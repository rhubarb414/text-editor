const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Unable to get "beforeinstallprompt" to fire on chrome, safari, or safari iOS.
// Thus, unable to test out the two subsequent functions. :(
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;

  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  console.log('clicked!');
  const promptEvents = window.deferredPrompt;
  console.log('promptEvents = ', promptEvents);
  if (!promptEvents) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
