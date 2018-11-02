module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1
    },

    'postcss-at-rules-variables': {},
    'postcss-custom-properties': {
      preserve: false
    },

    'postcss-for': {},
    'postcss-calc': {},
    'autoprefixer': {},
    'postcss-mixins': {},
    'postcss-hexrgba': {},
    'postcss-color-function': {},
    'postcss-nested': {}
  }
})
