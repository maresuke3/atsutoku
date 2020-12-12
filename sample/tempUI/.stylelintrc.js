module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'function-calc-no-unspaced-operator': true,
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'max-nesting-depth': 2,
    'plugin/declaration-block-no-ignored-properties': true,
  },
}
