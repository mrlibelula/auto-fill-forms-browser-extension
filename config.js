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
        'libeflix.test/login': {
            email: import.meta.env.VITE_LIBESOFT_EMAIL,
            password: import.meta.env.VITE_LIBESOFT_PASSWORD
        },
        'music.test:98/login': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        },
        'libeflix.test:81/login': {
            email: import.meta.env.VITE_LIBESOFT_EMAIL,
            password: import.meta.env.VITE_LIBESOFT_PASSWORD
        },
        'my-log.test/login': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        },
        'libeflix2.test/login': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        },
        'my-portfolio.test/login': {
            email: import.meta.env.VITE_DEFAULT_EMAIL,
            password: import.meta.env.VITE_DEFAULT_PASSWORD
        }
    }
};

export default config;
