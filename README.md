# Certificate Generator

This project is a web-based Certificate Generator that allows users to input their names and generate a personalized certificate. The generator features a preview modal for users to view their certificate before downloading it. The website supports both light and dark themes with a theme switcher icon.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Theory and Explanation](#theory-and-explanation)
4. [HTML Structure](#html-structure)
5. [CSS Styling](#css-styling)
6. [JavaScript Functionality](#javascript-functionality)
7. [How to Run the Project](#how-to-run-the-project)
8. [Future Enhancements](#future-enhancements)

## Introduction

The Certificate Generator allows users to create personalized certificates by entering their names in a text input field. Upon submission, a certificate image is generated with the user's name displayed in the center. The generated certificate is previewed in a modal, allowing users to download it as a PNG image.

## Features

- User-friendly interface for generating certificates.
- Real-time preview of the certificate in a modal window.
- Option to download the generated certificate.
- Light and dark mode themes with a theme switcher icon.
- Responsive design for different screen sizes.

## Theory and Explanation

The main concept behind this project is to use HTML, CSS, and JavaScript to create a simple, interactive web application that allows users to generate certificates dynamically. The key technologies used include:

- **HTML** for the structure of the webpage.
- **CSS** for styling and layout, including support for light and dark themes.
- **JavaScript** for the dynamic generation of certificates and user interaction, such as form submission, image generation using the `<canvas>` element, and displaying modals.

## HTML Structure

The HTML file (`index.html`) consists of three main sections:

1. **Header**: Contains the website's title, navigation links, and a theme switcher icon.
2. **Main Content**: Includes a form where users can input their names and a button to generate the certificate. It also contains a modal for previewing the generated certificate.
3. **Footer**: Displays a simple footer message.

### Key Elements:

- **Header**:
  ```html
  <header>
    <div class="header-content">
      <h1 class="team-name">Coding Wizard</h1>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <div class="theme-switcher">
          <img src="sun.png" alt="Theme Switch" />
        </div>
      </nav>
    </div>
  </header>
  ```
  The header contains the website's title, navigation links, and a theme switcher for toggling between light and dark themes.

- **Main Content**:
  ```html
  <div class="main">
    <div class="container">
      <h2>Certificate Generator</h2>
      <form id="certificate-form">
        <input type="text" id="userName" placeholder="Enter your name" required />
        <button type="submit">Generate Certificate</button>
      </form>
    </div>
    <div id="certificate-modal" class="modal">
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Certificate Preview</h2>
        <img id="certificate-img" src="" alt="Certificate" />
        <a id="download-link" href="" download="certificate.png" class="download-btn">Download Your Certificate</a>
      </div>
    </div>
  </div>
  ```
  The main block includes a form for user input and a modal for certificate preview.

- **Footer**:
  ```html
  <footer>
    <p>Made with ❤ by Team Coding Wizards</p>
  </footer>
  ```
  The footer provides additional information about the project team.

## CSS Styling

The `styles.css` file contains all the styling rules for the webpage, ensuring a responsive and visually appealing design.

### Key Styles:

- **Base Styles**: Set the default font, background color, and overall layout.
- **Header and Footer**: Style the header and footer to be consistent across both light and dark themes.
- **Form and Modal**: Customize the form for user input and modal for certificate preview, ensuring proper alignment and visibility.
- **Dark and Light Theme**: Use CSS variables to manage colors for dark and light themes and toggle between them using JavaScript.

## JavaScript Functionality

The `script.js` file handles the core functionality of the Certificate Generator:

1. **Theme Switching**:
   - JavaScript is used to toggle between light and dark themes.
   - The `theme-switcher` icon rotates and changes between sun and moon icons based on the active theme.
   ```javascript
   const themeSwitcher = document.querySelector(".theme-switcher img");
   themeSwitcher.addEventListener("click", () => {
       document.body.classList.toggle("dark-theme");
       if (document.body.classList.contains("dark-theme")) {
           themeSwitcher.src = "moon.png";
       } else {
           themeSwitcher.src = "sun.png";
       }
   });
   ```

2. **Form Handling**:
   - Listens for form submission to capture the user's name.
   - Calls the `generateCertificate()` function to create the certificate image.
   ```javascript
   const form = document.getElementById("certificate-form");
   form.addEventListener("submit", (event) => {
       event.preventDefault();
       const userName = document.getElementById("userName").value;
       generateCertificate(userName);
   });
   ```

3. **Certificate Generation**:
   - Uses the `<canvas>` element to dynamically draw the certificate with the user's name.
   - Converts the canvas content to an image and displays it in the modal.
   ```javascript
   function generateCertificate(name) {
       const canvas = document.createElement("canvas");
       const ctx = canvas.getContext("2d");
       // Draw certificate background and user name on canvas
       ctx.drawImage(document.getElementById("background"), 0, 0, canvas.width, canvas.height);
       ctx.font = "30px cursive";
       ctx.fillStyle = "black";
       ctx.textAlign = "center";
       ctx.fillText(name, canvas.width / 2, canvas.height / 2);
       // Convert to image and display in modal
       const certificateImage = canvas.toDataURL("image/png");
       document.getElementById("certificate-img").src = certificateImage;
       document.getElementById("download-link").href = certificateImage;
       document.getElementById("certificate-modal").style.display = "block";
   }
   ```

4. **Modal Handling**:
   - Shows and hides the certificate preview modal.
   - Provides a close button to exit the modal view.
   ```javascript
   const modal = document.getElementById("certificate-modal");
   const closeBtn = document.querySelector(".close-btn");
   closeBtn.addEventListener("click", () => {
       modal.style.display = "none";
   });
   ```

## How to Run the Project

1. Clone the repository or download the source code.
2. Open `index.html` in any web browser.
3. Enter a name in the input field and click "Generate Certificate".
4. Preview the certificate in the modal and click "Download Your Certificate" to save it as a PNG.

## Future Enhancements

- Add more customization options for certificates, such as different fonts and colors.
- Allow users to upload their own certificate templates.
- Implement backend integration to store generated certificates in a database.

