'use strict';

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
  const src = process.env.SLATEDIR || 'source';
  eleventyConfig.addPassthroughCopy(src+"/slate/css/*.css");
  eleventyConfig.addPassthroughCopy(src+"/slate/js");
  eleventyConfig.addPassthroughCopy(src+"/slate/img");
  eleventyConfig.addPassthroughCopy(src+"/slate/fonts");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary("md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true
    }).use(markdownItAnchor, {})
  );
};

