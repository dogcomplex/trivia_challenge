module.exports = function babelExpo(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};
