function checkPassword(event) {
    event.preventDefault(); // Prevent link from following the URL
    var password = prompt("Enter the password:");
    if (password === "qarabag") { // Replace 'yourPassword' with your actual password
        window.location.href = "https://yahrght.github.io/cheering"; // Redirect to the protected link
    } else {
        alert("Incorrect password");
    }
}
