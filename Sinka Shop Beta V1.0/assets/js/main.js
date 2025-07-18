function goTo(page) {
  window.location.href = page;
}

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('active');
}

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
  const sideMenu = document.getElementById('sideMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // Check if the click is outside the menu and not on the toggle button
  if (!sideMenu.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target)) {
    sideMenu.classList.remove('active');
  }
});
function completeShare(shareId, element) {
    if (completedShareIds.includes(shareId)) {
        return true;
    }

    setTimeout(() => {
  
    }, 10000);
    return true;
}

function copyToClipboard() {
    var copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    var msg = document.getElementById("copyMsg");
    msg.style.display = "inline";
    setTimeout(function() {
        msg.style.display = "none";
    }, 1500);
}