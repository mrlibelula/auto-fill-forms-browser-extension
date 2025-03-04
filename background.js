const defaultCredentials = {
    'music.test': {
        email: import.meta.env.VITE_DEFAULT_EMAIL || 'luis@libe.dev',
        password: import.meta.env.VITE_DEFAULT_PASSWORD || ''
    },
    '192.168.1.202:81': {
        email: import.meta.env.VITE_LIBESOFT_EMAIL || 'libe@libesoft.io',
        password: import.meta.env.VITE_LIBESOFT_PASSWORD || ''
    },
    '192.168.1.202:98': {
        email: import.meta.env.VITE_DEFAULT_EMAIL || 'luis@libe.dev',
        password: import.meta.env.VITE_DEFAULT_PASSWORD || ''
    },
    'libeflix.test/login': {
        email: import.meta.env.VITE_LIBESOFT_EMAIL || 'libe@libesoft.io',
        password: import.meta.env.VITE_LIBESOFT_PASSWORD || ''
    },
    'music.test:98': {
        email: import.meta.env.VITE_DEFAULT_EMAIL || 'luis@libe.dev',
        password: import.meta.env.VITE_DEFAULT_PASSWORD || ''
    },
    'libeflix.test:81': {
        email: import.meta.env.VITE_LIBESOFT_EMAIL || 'libe@libesoft.io',
        password: import.meta.env.VITE_LIBESOFT_PASSWORD || ''
    },
    'my-log.test': {
        email: import.meta.env.VITE_DEFAULT_EMAIL || 'luis@libe.dev',
        password: import.meta.env.VITE_DEFAULT_PASSWORD || ''
    },
    'the-grid.test': {
        email: import.meta.env.VITE_DEFAULT_EMAIL || 'luis@libe.dev',
        password: import.meta.env.VITE_DEFAULT_PASSWORD || ''
    }
};

// Store in Chrome storage during installation
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ credentialsConfig: defaultCredentials });
});

// Then retrieve it when needed
chrome.storage.sync.get(['credentialsConfig'], (result) => {
    const credentials = result.credentialsConfig;
    // Use credentials here
});
  