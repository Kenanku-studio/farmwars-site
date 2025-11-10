const urlDisplay = document.getElementById("url-display");
const goBtn = document.getElementById("go-btn");

// SECRET_URL comes from config.js, injected by GitHub Actions
if (typeof SECRET_URL === "undefined") {
  urlDisplay.textContent = "Secret not available!";
} else {
  urlDisplay.textContent = "Click the button to continue.";
  goBtn.style.display = "inline-block";

  goBtn.addEventListener("click", () => {
    window.location.href = SECRET_URL;
  });
}
