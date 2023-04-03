const path = require('path');

module.exports = function override(config) {
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.oneOf instanceof Array) {
            return {
                ...rule,
                // create-react-app let every file which doesn't match to any filename test falls back to file-loader,
                // so we need to add purs-loader before that fallback.
                // see: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js#L220-L236
                oneOf: [
                    {
                        test: /\.png$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    esModule: false,
                                },
                            },
                        ],
                    },
                    ...rule.oneOf,
                ],
            };
        }
        return rule;
    });

    // create-react-app disallows us to import files outside ./src folder.
    // We need to turn this rule off to import files from ./bower_components
    // see: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js#L112-L119
    if (process.env.NODE_ENV === 'development') {
        config.resolve.plugins = [];
    }

    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '*': path.resolve(__dirname, 'node_modules'),
            '@': path.resolve(__dirname, 'src'),
            '@apps': path.resolve(__dirname, 'src/apps'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    };

    return config;
};
