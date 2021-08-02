const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@css': path.resolve(__dirname, 'src/css/'),
        },
    },
};
