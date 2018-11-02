const path = require('path');
module.exports = {
    baseUrl: './',
    outputDir: path.resolve(__dirname, './docs'),
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // config.output.publicPath = "./"; // string
            // console.log(config)
            // config.mode = 'production';
            // test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            config.module.rules[1] = {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loaders: [
                    {
                        loader: path.resolve(__dirname, 'cssPathResolver'),
                    },
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 1000,
                            name: './img/[name].[hash:7].[ext]',
                        },
                    },
                ],
            };
        }
    },
    css: {
        loaderOptions: {
            css: {
                url: true,
                // options here will be passed to css-loader
            },
        },
    },
    chainWebpack: (config) => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
            });
    },
};
