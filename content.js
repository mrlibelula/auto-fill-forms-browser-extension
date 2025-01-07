// Browser API compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

function getHostIdentifier(url) {
    const urlObj = new URL(url);
    return urlObj.host;
}

function fillForm(formData) {
    
    const emailField = document.querySelector('input[type="email"], input#email, [name="email"]');
    const passwordField = document.querySelector('input[type="password"], input#password, [name="password"]');

    if (emailField) {
        emailField.value = formData.email;
        emailField.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    if (passwordField) {
        passwordField.value = formData.password;
        passwordField.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

// Get correct credentials based on URL
function getCredentials() {
    const hostId = getHostIdentifier(window.location.href);
    chrome.storage.sync.get('credentialsConfig', (data) => {
        if (data.credentialsConfig && data.credentialsConfig[hostId]) {
            fillForm(data.credentialsConfig[hostId]);
        }
    });
}

// Try to fill form immediately
getCredentials();

// Set up observer for dynamic content
const observer = new MutationObserver((mutations, obs) => {
    const emailField = document.querySelector('input[type="email"], input#email, [name="email"]');
    const passwordField = document.querySelector('input[type="password"], input#password, [name="password"]');
    
    if (emailField && passwordField) {
        getCredentials();
        obs.disconnect();
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

// Backup timeout attempt
setTimeout(getCredentials, 1000);
  
  