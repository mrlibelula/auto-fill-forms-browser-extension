const Dotenv = require('dotenv-webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        background: './background.js',
        content: './content.js',
        popup: './popup.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new Dotenv(),
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "manifest.json" },
                { from: "popup.html", to: "popup.html" },
                { from: "libesoft.io_inv.png", to: "libesoft.io_inv.png" }
            ],
        }),
    ],
    mode: 'production'
};
