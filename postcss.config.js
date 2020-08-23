const precss = require("precss");
const autoprefixer = require("autoprefixer");
const discardDuplicates = require("postcss-discard-duplicates");

module.exports = {
  syntax: "postcss-scss",
  plugins: [precss, discardDuplicates, autoprefixer]
};
