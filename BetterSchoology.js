// ==UserScript==
// @name         Better Schoology
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Improving Schoology
// @author       github.com/danielpiliu
// @match        https://manatee.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=manatee.schoology.com
// @grant        none
// ==/UserScript==

// Check if the user is new and display a welcome message if so
if (!localStorage.getItem("bsWelcomeMessageDismissed")) {
  // Create the welcome message popup
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

  // Create the popup title
  const title = document.createElement("h1");
  title.innerText = "Better Schoology Successfully Downloaded!";
  title.style.textAlign = "center";
  popup.appendChild(title);

  // Create the popup version
  const version = document.createElement("p");
  version.innerText = "Better Schoology Successfully Downloaded! Ver Beta 0.1";
  version.style.textAlign = "center";
  popup.appendChild(version);

  // Create the popup OK button
  const okButton = document.createElement("button");
  okButton.innerText = "OK";
  okButton.style.marginTop = "10px";
  okButton.style.padding = "5px 10px";
  okButton.style.border = "none";
  okButton.style.backgroundColor = "blue";
  okButton.style.color = "white";
  popup.appendChild(okButton);

  // Add the "Don't Show Again" checkbox
  const dontShowAgain = document.createElement("input");
  dontShowAgain.setAttribute("type", "checkbox");
  dontShowAgain.style.marginLeft = "10px";
  popup.appendChild(dontShowAgain);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.innerText = "Don't Show Again";
  checkboxLabel.style.marginLeft = "5px";
  popup.appendChild(checkboxLabel);

  // Dismiss the popup and save the "Don't Show Again" setting when the OK button is clicked
  okButton.addEventListener("click", () => {
    popup.style.display = "none";
    if (dontShowAgain.checked) {
      localStorage.setItem("bsWelcomeMessageDismissed", "true");
    }
  });
}
// Check if the current page is the options page
if (window.location.pathname === "/options") {
  // Clear the page
  document.body.innerHTML = "";

  // Add the title "Options"
  const title = document.createElement("H1");
  title.innerText = "Options";
  document.body.appendChild(title);

  // Add a file input for the background image
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

  // Add a checkbox for disabling the overdue sidebar
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

  // Set the tab title to "Options"
  document.title = "Options | Schoology";
} else {
  // Load the background image from local storage
const backgroundImage = localStorage.getItem("backgroundImage");
if (!backgroundImage) {
  document.body.style.backgroundImage = `url("https://github.com/DanielPiliu/Better-Schoology/blob/main/DefaultBG.jpg?raw=true")`;
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

  // Load the status of the "disable overdue sidebar" option from local storage
  const disableOverdueSidebar = localStorage.getItem("disableOverdueSidebar");
  if (disableOverdueSidebar === "true") {
    const overdueSidebar = document.getElementById("overdue-submissions");
    if (overdueSidebar) {
      overdueSidebar.remove();
    }
  }
}
