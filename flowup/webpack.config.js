const path = require('path');

module.exports = {
    name : 'word-relay-setting',
    mode : 'development', // 실제 서비스할때는 production으로 변경하면 됨
    devtool : 'eval', // 빠르게 하겠다는 의미
    resolve : {
        extensions : ['.jsx','.js']
    },

    entry : {
        app : ['./client'],
    }, // 입력

    module : {
        rules : [{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets : [{
                    presets : ['@babel/preset-env', '@babel/preset-react'],
                    plugins : ['@babel/plugin-proposal-class-properties']
                }]
            }
        }]
    },

    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }, // 출력
};