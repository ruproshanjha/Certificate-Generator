document
  .getElementById("certificate-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user's name from the input field
    const userName = document.getElementById("userName").value.trim();

    // Check if the user has entered a name
    if (!userName) {
      alert("Please enter a name.");
      return;
    }

    // Get the canvas element and context
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set the canvas size
    canvas.width = 1920;
    canvas.height = 1080;

    // Load the background image
    const backgroundImage = new Image();
    backgroundImage.src = "./certificate.jpg"; // Replace with your image path

    backgroundImage.onload = function () {
      // Draw the background image
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      // Set font style for the user's name
      ctx.font = '800px "Brush Script MT", cursive'; // Cursive font
      ctx.fillStyle = "#000000"; // Black color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Calculate text position to center it
      const x = canvas.width / 2;
      const y = canvas.height / 2;

      // Draw the user's name in the center of the image
      ctx.fillText(userName, x, y);

      // Get modal elements
      const modal = document.getElementById("certificate-modal");
      const certificateImg = document.getElementById("certificate-img");
      const downloadLink = document.getElementById("download-link");

      // Set the src of the image in the modal
      certificateImg.src = canvas.toDataURL("image/png");
      downloadLink.href = canvas.toDataURL("image/png");

      // Show the modal
      modal.style.display = "block";
    };

    backgroundImage.onerror = function () {
      alert("Error loading the background image. Please check the path.");
    };
  });

// Close the modal when the user clicks on <span> (x)
document.querySelector(".close-btn").onclick = function () {
  document.getElementById("certificate-modal").style.display = "none";
};

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
  if (event.target == document.getElementById("certificate-modal")) {
    document.getElementById("certificate-modal").style.display = "none";
  }
};

// Theme switcher functionality
document
  .querySelector(".theme-switcher img")
  .addEventListener("click", function () {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");

    // Toggle icon
    const themeIcon = document.querySelector(".theme-switcher img");
    themeIcon.src = isDarkMode ? "moon.png" : "sun.png"; // Update paths as needed
    themeIcon.style.transform = "rotate(360deg)"; // Rotate icon
  });
