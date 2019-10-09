const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssResolver = require("postcss-import-resolver");
const postcssNested = require("postcss-nested");

module.exports = () => ({
  plugins: [
    postcssImport({
      resolve: postcssResolver({
        extensions: [".css"],
        modules: ["node_modules"],
      }),
    }),
    postcssPresetEnv({ stage: 2 }),
    tailwindcss("./tailwind.config.js"),
    postcssNested({ unwrap: ["screen"] })
  ],
})