// ==UserScript==
// @name         Better Schoology
// @namespace    http://tampermonkey.net/
// @version      Prerelease_Morning_Desert
// @description  Schoology Enhancment Project
// @author       github.com/danielpiliutsin
// @match        https://*.schoology.com/*
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com&size=64
// @grant        none
// @updateURL    https://github.com/DanielPiliutsin/Better-Schoology/raw/main/BetterSchoology.user.js
// @downloadURL  https://github.com/DanielPiliutsin/Better-Schoology/raw/main/BetterSchoology.user.js
// ==/UserScript==

if (!localStorage.getItem("bsWelcomeMessageDismissed")) {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.zIndex = "9999";
  popup.style.backgroundColor = "orange";
  popup.style.padding = "20px";
  popup.style.borderRadius = "5px";
  document.body.appendChild(popup);
  const title = document.createElement("h1");
  title.innerText = "Better Schoology Successfully Downloaded!";
  title.style.textAlign = "center";
  popup.appendChild(title);
  const version = document.createElement("p");
  version.innerText = "Better Schoology Successfully Downloaded! Prerelease 'Morning Desert'";
  version.style.textAlign = "center";
  popup.appendChild(version);
  const okButton = document.createElement("button");
  okButton.innerText = "OK";
  okButton.style.marginTop = "10px";
  okButton.style.padding = "5px 10px";
  okButton.style.border = "none";
  okButton.style.backgroundColor = "blue";
  okButton.style.color = "white";
  popup.appendChild(okButton);
  const dontShowAgain = document.createElement("input");
  dontShowAgain.setAttribute("type", "checkbox");
  dontShowAgain.style.marginLeft = "10px";
  popup.appendChild(dontShowAgain);
  const checkboxLabel = document.createElement("label");
  checkboxLabel.innerText = "Don't Show Again";
  checkboxLabel.style.marginLeft = "5px";
  popup.appendChild(checkboxLabel);
  okButton.addEventListener("click", () => {
    popup.style.display = "none";
    if (dontShowAgain.checked) {
      localStorage.setItem("bsWelcomeMessageDismissed", "true");
    }
  });
}
/*Options window below*/
if (window.location.pathname === "/options") {
  document.body.innerHTML = "";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundAttachment = "fixed";
  const title = document.createElement("H1");
  title.innerText = "Options";
  document.body.appendChild(title);
  let fontOptions = ['Comic Sans MS', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Arial', 'Georgia', 'Garamond', 'Palatino', 'Book Antiqua', 'Tahoma', 'Trebuchet MS', 'Impact', 'Lucida Sans', 'Lucida Console', 'Lucida Grande', 'Geneva', 'Arial Narrow', 'Arial Black', 'Century Gothic', 'Franklin Gothic Medium', 'Futura', 'Gill Sans', 'Baskerville', 'Didot', 'Hoefler Text', 'Optima', 'Rockwell', 'Andale Mono', 'Consolas', 'Courier', 'Monaco', 'Copperplate', 'Papyrus', 'Brush Script MT', 'Zapfino', 'Chalkboard', 'Marker Felt', 'Bradley Hand', 'Snell Roundhand', 'Segoe UI', 'Roboto', 'Lato', 'Open Sans', 'Oswald', 'Raleway', 'Montserrat', 'Noto Sans', 'Noto Serif', 'PT Sans', 'PT Serif', 'Source Sans Pro', 'Source Serif Pro', 'Merriweather', 'Lora', 'Arvo', 'Playfair Display', 'Crimson Text', 'Libre Baskerville', 'Bitter', 'EB Garamond', 'Old Standard TT', 'Vollkorn', 'Cardo', 'Alegreya', 'Alegreya Sans', 'Karla', 'Fira Sans', 'Fira Mono', 'Inconsolata', 'Ubuntu', 'Ubuntu Mono', 'Droid Sans', 'Droid Serif', 'Droid Sans Mono', 'Roboto Slab', 'Roboto Condensed', 'Roboto Mono', 'Nunito', 'Nunito Sans', 'Muli', 'Quicksand', 'Work Sans', 'Poppins', 'Hind', 'Rubik', 'Titillium Web', 'Asap', 'Barlow', 'Inter', 'Heebo', 'IBM Plex Sans', 'IBM Plex Serif', 'IBM Plex Mono'];
  let currentFontIndex = localStorage.getItem('currentFontIndex') || 0;
  const currentFontOutput = document.createElement("div")
  currentFontOutput.innerText = ("Press 'F' to change the font, the current Font is set to: " + fontOptions[currentFontIndex]);
  document.body.appendChild(currentFontOutput);
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "background-image");
  document.body.appendChild(input);
  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      localStorage.setItem("backgroundImage", e.target.result);
      document.body.style.backgroundImage = `url(${e.target.result})`;
    };
  });
const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "disable-overdue-sidebar");
checkbox.addEventListener("change", (e) => {
  localStorage.setItem("disableOverdueSidebar", e.target.checked);
  checkbox.checked = e.target.checked;
});
checkbox.checked = (localStorage.getItem("disableOverdueSidebar") === "true");
document.body.appendChild(checkbox);
  document.body.appendChild(checkbox);
  const label = document.createElement("label");
  label.setAttribute("for", "disable-overdue-sidebar");
  label.innerText = "Disable Overdue Sidebar";
  document.body.appendChild(label);
  document.title = "Options | Schoology";
} else {
const backgroundImage = localStorage.getItem("backgroundImage");
if (!backgroundImage) {
  document.body.style.backgroundImage = `url("https://raw.githubusercontent.com/DanielPiliutsin/Better-Schoology/main/PrereleaseMorningDesert.jpg")`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundAttachment = "fixed";
} else {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundAttachment = "fixed";
  }
  document.querySelector("._2JX1Q._1LY8n._2SVA_._9GDcm").style.backgroundImage = 'url("https://github.com//DanielPiliu/Better-Schoology/blob/main/Logo.png?raw=true")';
  const disableOverdueSidebar = localStorage.getItem("disableOverdueSidebar");
  if (disableOverdueSidebar === "true") {
    const overdueSidebar = document.getElementById("overdue-submissions");
    if (overdueSidebar) {
      overdueSidebar.remove();
    }
     }
if (window.location.pathname === "/home") {
  const clickMoreButton = () => {
    const moreButton = document.querySelector('.active.sExtlink-processed.sEdgeMore-processed');
    if (moreButton) {
      moreButton.click();
      setTimeout(clickMoreButton, 1);
    } else {
      setTimeout(checkIfAtBottom, 1000);
    }
  };
  const checkIfAtBottom = () => {
    const isAtBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
    if (isAtBottom) {
      clickMoreButton();
    } else {
      setTimeout(checkIfAtBottom, 100);
    }
  };
  checkIfAtBottom();
}
  
}
// Initialize a variable to hold different font names
let currentFontIndex = localStorage.getItem('currentFontIndex') || 0;
const fontOptions = ['Comic Sans MS', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Arial', 'Georgia', 'Garamond', 'Palatino', 'Book Antiqua', 'Tahoma', 'Trebuchet MS', 'Impact', 'Lucida Sans', 'Lucida Console', 'Lucida Grande', 'Geneva', 'Arial Narrow', 'Arial Black', 'Century Gothic', 'Franklin Gothic Medium', 'Futura', 'Gill Sans', 'Baskerville', 'Didot', 'Hoefler Text', 'Optima', 'Rockwell', 'Andale Mono', 'Consolas', 'Courier', 'Monaco', 'Copperplate', 'Papyrus', 'Brush Script MT', 'Zapfino', 'Chalkboard', 'Marker Felt', 'Bradley Hand', 'Snell Roundhand', 'Segoe UI', 'Roboto', 'Lato', 'Open Sans', 'Oswald', 'Raleway', 'Montserrat', 'Noto Sans', 'Noto Serif', 'PT Sans', 'PT Serif', 'Source Sans Pro', 'Source Serif Pro', 'Merriweather', 'Lora', 'Arvo', 'Playfair Display', 'Crimson Text', 'Libre Baskerville', 'Bitter', 'EB Garamond', 'Old Standard TT', 'Vollkorn', 'Cardo', 'Alegreya', 'Alegreya Sans', 'Karla', 'Fira Sans', 'Fira Mono', 'Inconsolata', 'Ubuntu', 'Ubuntu Mono', 'Droid Sans', 'Droid Serif', 'Droid Sans Mono', 'Roboto Slab', 'Roboto Condensed', 'Roboto Mono', 'Nunito', 'Nunito Sans', 'Muli', 'Quicksand', 'Work Sans', 'Poppins', 'Hind', 'Rubik', 'Titillium Web', 'Asap', 'Barlow', 'Inter', 'Heebo', 'IBM Plex Sans', 'IBM Plex Serif', 'IBM Plex Mono'];

// Add your own styles to make the profile pictures round and slightly smaller
let style = document.createElement('style');
style.innerHTML = `
    .imagecache.imagecache-profile_sm {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        overflow: hidden;
    }

    .imagecache.imagecache-profile_sm {
        width: 100%;
        height: 100%;
        margin: 5%;
    }

      .imagecache.imagecache-profile_tiny {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        overflow: hidden;
    }

     .imagecache.imagecache-profile_tiny {
        width: 100%;
        height: 100%;
        margin: 5%;
    }

    body {
        font-family: "${fontOptions[currentFontIndex]}", cursive, sans-serif;
    }

    #sidebar-left {
        background-color: white;
    }

`;
document.head.appendChild(style);

// Add a 'keydown' event listener to the document
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is 'f' and if the current page is "/settings/account" or "/options"
    if (event.key === 'f' && (window.location.pathname === '/settings/account' || window.location.pathname === '/options')) {
        // Toggle to the next font in the array
        currentFontIndex = (currentFontIndex + 1) % fontOptions.length;

        // Set the font on the body element
        document.body.style.fontFamily = `"${fontOptions[currentFontIndex]}", cursive, sans-serif`;

        // Store the current font index in local storage
        localStorage.setItem('currentFontIndex', currentFontIndex);

        // Log the current font to the console (optional)
        console.log('Current Font: ' + fontOptions[currentFontIndex]);

        // Get the single div element
        var divElement = document.querySelector('div');

        // Set the content of the div element to "hello"
        divElement.textContent = ("Font is set to: " + fontOptions[currentFontIndex]);
    }
});


    // Find the original element
    var originalElement = document.querySelector('a._13cCs._2M5aC._24avl._3ghFm._3LeCL._31GLY._9GDcm._1D8fw.util-height-six-3PHnk.util-pds-icon-default-2kZM7._1SIMq._2kpZl._3OAXJ._3_bfp._3v0y7._2s0LQ.util-line-height-six-3lFgd.util-text-decoration-none-1n0lI.Header-header-button-active-state-3AvBm.Header-header-button-1EE8Y.sExtlink-processed');

// Check if the element exists
if (originalElement) {
    // Function to handle the click event
    function handleClick(event, targetUrl) {
        event.preventDefault();
        window.open(targetUrl, '_blank'); // Open link in a new tab
    }

    // Clone the element for 'Options'
    var clonedElement = originalElement.cloneNode(true);
    clonedElement.textContent = 'Options';
    clonedElement.href = '/options';

    originalElement.parentNode.insertBefore(clonedElement, originalElement.nextSibling);

    // Clone the element for 'Updates'
    var clonedElement2 = originalElement.cloneNode(true);
    clonedElement2.textContent = 'Updates';
    clonedElement2.href = 'https://github.com/DanielPiliutsin/Better-Schoology/'; // Use javascript:void(0) to prevent default link behavior
;
    originalElement.parentNode.insertBefore(clonedElement2, originalElement.nextSibling);

    // Clone the element for 'AP'
    var clonedElement3 = originalElement.cloneNode(true);
    clonedElement3.textContent = 'AP';
    clonedElement3.href = 'https://myap.collegeboard.org/'; // Use javascript:void(0) to prevent default link behavior

    originalElement.parentNode.insertBefore(clonedElement3, originalElement.nextSibling);
}


// Get all links on the page
const links = document.getElementsByTagName('a');

// Loop through each link and replace its href attribute
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const originalHref = link.href;
  if (!originalHref.includes('schoology.com') && !originalHref.includes('.schoology.com/')) {
    link.href = 'javascript:void(0)'; // Use javascript:void(0) to prevent default link behavior
    link.addEventListener('click', function (event) {
       handleClick(event, originalHref);
    });
  }
}

// check for update functionality, ignore
