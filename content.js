// Use this wrapper for cross-browser compatibility
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Function to fill the form
function fillForm(formData) {
    // Try multiple possible selectors since we can see the actual form structure
    const emailField = document.querySelector('input[type="email"], input#email, [name="email"]')
    const passwordField = document.querySelector('input[type="password"], input#password, [name="password"]')

    if (emailField) {
        emailField.value = formData.email
        // Trigger input event to ensure any listeners catch the change
        emailField.dispatchEvent(new Event('input', { bubbles: true }))
    } else {
        console.log("Email field not found")
    }
    
    if (passwordField) {
        passwordField.value = formData.password
        // Trigger input event to ensure any listeners catch the change
        passwordField.dispatchEvent(new Event('input', { bubbles: true }))
    } else {
        console.log("Password field not found")
    }
}

// Try to fill form immediately
browserAPI.storage.sync.get('formData', (data) => {
    if (data.formData) {
        fillForm(data.formData)
    }
})

// Set up observer to watch for dynamically loaded form
const observer = new MutationObserver((mutations, obs) => {
    const emailField = document.querySelector('input[type="email"], input#email, [name="email"]')
    const passwordField = document.querySelector('input[type="password"], input#password, [name="password"]')
    
    if (emailField && passwordField) {
        browserAPI.storage.sync.get('formData', (data) => {
            if (data.formData) {
                fillForm(data.formData)
                obs.disconnect() // Stop observing once we've filled the form
            }
        })
    }
})

// Start observing the document with the configured parameters
observer.observe(document, {
    childList: true,
    subtree: true
})

// Also try after a short delay as backup
setTimeout(() => {
    browserAPI.storage.sync.get('formData', (data) => {
        if (data.formData) {
            fillForm(data.formData)
        }
    })
}, 1000)
  
  