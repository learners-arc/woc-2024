const cssnano = require('cssnano');
const postcssPresetenv = require("postcss-preset-env")

module.exports = {
    plugins: [
        cssnano({
            preset: "default",
        }),
        postcssPresetenv({ stage: 1})
    ],
};