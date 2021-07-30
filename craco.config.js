const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@css': path.resolve(__dirname, 'src/css/'),
        },
    },
};
