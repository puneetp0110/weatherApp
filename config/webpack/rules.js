import path from 'path';
module.exports = [
    {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
    },
    {
        test: /\.jsx?$/,
        include: [
            path.join(__dirname, 'public/src'),
            path.join(__dirname, 'node_modules/@salesforce/design-system-react'),
        ],
        loader: ['babel-loader'],
    },
    {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }
    ,
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url-loader?prefix=font/&limit=10000'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader']
    },
    {
        test: /\.css$/,
        include: /src/,
        loader: 'css-loader',
        query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
        }
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'sass-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
        ],
    },
];
