const config = {
    credentials: {
        'music.test': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        },
        '192.168.1.202:98': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        },
        '192.168.1.202:81': {
            email: import.meta.env.VITE_LIBESOFT_EMAIL,
            password: import.meta.env.VITE_LIBESOFT_PASSWORD
        },
        'https://libeflix.test/login': {
            email: import.meta.env.VITE_LIBESOFT_EMAIL,
            password: import.meta.env.VITE_LIBESOFT_PASSWORD
        },
        'http://music.test:98/login': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        },
        'http://libeflix.test:81/login': {
            email: import.meta.env.VITE_LIBESOFT_EMAIL,
            password: import.meta.env.VITE_LIBESOFT_PASSWORD
        }
    }
};

export default config;
