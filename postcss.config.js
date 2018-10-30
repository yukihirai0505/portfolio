module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1
    },
    'postcss-nested': {},
    'autoprefixer': {},
    'postcss-mixins': {},
    'postcss-hexrgba': {},
    'postcss-color-function': {},
    'postcss-custom-properties': {
      preserve: false
    },
  }
})
