const defaultCredentials = {
    'music.test': {
        email: 'luis@libe.dev',
        password: 'password'
    },
    '192.168.1.202:81': {
        email: 'libe@libesoft.io',
        password: ''
    },
    '192.168.1.202:98': {
        email: 'luis@libe.dev',
        password: 'password'
    }
};

chrome.runtime.onInstalled.addListener(() => {
    // Store all credentials configurations
    chrome.storage.sync.set({ 
        credentialsConfig: defaultCredentials 
    }, () => {
        console.log("Credentials configurations set");
    });
});
  