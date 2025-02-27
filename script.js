document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let status = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        status.innerText = "Please fill in all fields.";
        status.style.color = "red";
    } else {
        status.innerText = "Message sent successfully!";
        status.style.color = "green";
        
        // Clear fields after submission
        document.getElementById("contact-form").reset();
    }
});