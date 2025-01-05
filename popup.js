document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    chrome.storage.sync.set({ formData: data }, () => {
        alert('Data saved!')
    })
})