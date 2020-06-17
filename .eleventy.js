'use strict';

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/slate/css");
  eleventyConfig.addPassthroughCopy("source/slate/js");
  eleventyConfig.addPassthroughCopy("source/slate/img");
  eleventyConfig.addPassthroughCopy("source/slate/fonts");
  eleventyConfig.addPlugin(syntaxHighlight);
};
