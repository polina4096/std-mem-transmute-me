import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  rules: {
    "antfu/no-top-level-await": "off",
    "node/prefer-global/process": "off",
  },
});
