module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:prettier/recommended"
  ],
  parserOptions: {
  },
  plugins: [
    "react-hooks",
    "prettier"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
    "prettier/prettier": "error",
    "strict": "off",
    "no-console": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "require-yield": "off"
    // "indent": ["error", 2],
    // "linebreak-style": ["error", "unix"],
    // "quotes": ["error", "single"],
    // "semi": ["warn", "never"],
    // "no-constant-condition": "warn",
    // "no-dupe-args": "warn",
    // "no-extra-semi": "warn",
    // "default-case": "warn",
    // "eqeqeq": "warn",
    // "no-alert": "warn",
    // "no-empty-function": "warn",
    // "arrow-spacing": "warn",
    // "no-unused-vars": "warn",
    // "comma-dangle": "warn",
    // "curly": "warn",
    // "no-eval": "warn",
    // "no-extra-label": "warn",
    // "no-multi-spaces": "warn",
    // "no-redeclare": "warn",
    // "no-unused-expressions": "warn",
    // "no-with": "warn",
    // "radix": "warn",
    // "max-lines": ["error", { "max": 300, "skipComments": true }]
  }
};
