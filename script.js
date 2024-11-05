const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
document.getElementById("downloadCV").addEventListener("click", function () {
  // Assuming your CV file is named "cv.pdf"
  var cvUrl = "https://scarlet-charil-57.tiiny.site";

  // Create an anchor element
  var downloadLink = document.createElement("a");

  // Set the href attribute to the CV file URL
  downloadLink.href = cvUrl;

  // Set the download attribute to force download
  downloadLink.download = "CV.pdf";

  // Append the anchor element to the document body
  document.body.appendChild(downloadLink);

  // Trigger the click event
  downloadLink.click();

  // Clean up
  document.body.removeChild(downloadLink);
});
document
  .getElementById("hireMeBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var emailAddress = "annabiaziz4@gmail.com";
    var subject = "Job Opportunity";
    var body =
      "Hello, I am interested in discussing a job opportunity with you.";

    var mailtoLink =
      "mailto:" +
      emailAddress +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  });
document.getElementById("sendButton").addEventListener("click", function () {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  console.log(document.getElementById("messageInput")); // Check if this logs the textarea element
  var message = document.getElementById("messageInput").value;

  var emailAddress = "annabiaziz4@gmail.com";
  var subject = "Message from " + name;
  var body = "From: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

  var mailtoLink =
    "mailto:" +
    emailAddress +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
});
