'use strict';

const fs = require('fs');
const path = require('path');

// vendored dependencies:
// https://github.com/davidcalhoun/energize.js
// https://github.com/bartaz/sandbox.js/blob/master/jquery.highlight.js

let nmPath = './node_modules';
if (!fs.existsSync(path.resolve(nmPath,'jquery'))) {
  nmPath = '..';
}

// no longer using symlinks due to cross-platform issues and
// https://github.com/11ty/eleventy/issues/530

try {
  fs.copyFileSync(path.resolve(nmPath,'jquery/dist/jquery.min.js'),'./source/slate/js/lib/jquery.min.js');
  fs.copyFileSync(path.resolve(nmPath,'lunr/lunr.min.js'),'./source/slate/js/lib/lunr.min.js');
  fs.copyFileSync(path.resolve(nmPath,'imagesloaded/imagesloaded.pkgd.min.js'),'./source/slate/js/lib/imagesloaded.min.js');
}
catch (ex) {
  console.warn(ex.message);
}

