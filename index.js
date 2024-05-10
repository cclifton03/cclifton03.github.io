function downloadCV() {
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1Jzn1DMmF6Gs44OL4IvFq6MfLOwp_5GS-";
}

document.addEventListener("DOMContentLoaded", function () {
  var downloadButton = document.getElementById("downloadBtn");

  downloadButton.addEventListener("click", function () {
    downloadCV();
  });
});

document.getElementById("button0").addEventListener("click", function () {
  toggleMessage(0);
});

document.getElementById("button1").addEventListener("click", function () {
  toggleMessage(1);
});

// Function to toggle the message
function toggleMessage(index) {
  var message = document.getElementById("message" + index);
  message.style.display = message.style.display === "none" ? "block" : "none";
}
