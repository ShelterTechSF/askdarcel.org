module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
};