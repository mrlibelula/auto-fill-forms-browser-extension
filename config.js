const config = {
    credentials: {
        'music.test': {
            email: process.env.DEFAULT_EMAIL,
            password: process.env.DEFAULT_PASSWORD
        },
        '192.168.1.202:98': {
            email: process.env.DEFAULT_EMAIL,
            password: process.env.DEFAULT_PASSWORD
        },
        '192.168.1.202:81': {
            email: process.env.LIBESOFT_EMAIL,
            password: process.env.LIBESOFT_PASSWORD
        }
    }
};

export default config;
