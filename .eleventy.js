'use strict';

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/slate/css/*.css");
  eleventyConfig.addPassthroughCopy("source/slate/js");
  eleventyConfig.addPassthroughCopy("source/slate/img");
  eleventyConfig.addPassthroughCopy("source/slate/fonts");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary("md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true
    }).use(markdownItAnchor, {})
  );
};

