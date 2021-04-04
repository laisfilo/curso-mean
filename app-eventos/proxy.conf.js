const proxy = [
    {
        context: '/api',
        target: 'http://localhost:3200',
        pathRewrite: {'^/api' : ''}
    }
];
module.exports = proxy;