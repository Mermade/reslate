'use strict';

const cheerio = require('cheerio');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItPrism = require('markdown-it-prism');
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
}).use(markdownItAnchor, {})
  .use(markdownItPrism)

function language_array(language_tabs) {
  let result = [];
  for (let lang in language_tabs) {
    if (typeof language_tabs[lang] === 'object') {
      result.push(Object.keys(language_tabs[lang])[0]);
    }
    else {
      result.push(language_tabs[lang]);
    }
  }
  return JSON.stringify(result).split('"').join('&quot;');
}

function image_tag(src, alt) {
  return '<img src="slate/img/'+src+'" alt="'+(alt||'Image')+'">';
}

function logo_image_tag() {
  return '<img src="slate/img/logo.png" alt="Logo" class="logo">';
}

function toc_data(content, headingLevel) {
  const $ = cheerio.load(content);
  const result = [];
  let h1,h2,h3,h4,h5;
  headingLevel = (headingLevel || 2);
  $(':header').each(function(e){
    const tag = $(this).get(0).tagName.toLowerCase();
    const entry = {};
    if (tag === 'h1') {
      entry.id = $(this).attr('id');
      entry.title = $(this).text();
      entry.content = $(this).html();
      entry.children = [];
      h1 = entry;
      result.push(entry);
    }
    if (tag === 'h2') {
      let child = {};
      child.id = $(this).attr('id');
      entry.title = $(this).text();
      child.content = $(this).html();
      child.children = [];
      h2 = child;
      if (h1) h1.children.push(child);
    }
    if ((headingLevel >= 3) && (tag === 'h3')) {
      let child = {};
      child.id = $(this).attr('id');
      entry.title = $(this).text();
      child.content = $(this).html();
      child.children = [];
      h3 = child;
      if (h2) h2.children.push(child);
    }
    if ((headingLevel >= 4) && (tag === 'h4')) {
      let child = {};
      child.id = $(this).attr('id');
      entry.title = $(this).text();
      child.content = $(this).html();
      child.children = [];
      h4 = child;
      if (h3) h3.children.push(child);
    }
  });
  return result;
}

function md(content) {
  return markdown.render(content);
}

module.exports = {
  layout: 'slate.ejs',
  page_classes: '',
  language_array,
  image_tag,
  logo_image_tag,
  toc_data,
  md
};

