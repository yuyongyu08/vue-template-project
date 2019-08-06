module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-adaptive')({ //参见：https://github.com/songsiqi/postcss-adaptive
            remUnit: 75,
            baseDpr: 2,
            remPrecision: 6,
            hairlineClass: 'hairlines',
            autoRem: true,
        })
    ]
};