const assert = require('assert');
const cp = require('child_process');
const fs = require('fs');
const path = require('path');

// path.relative is to work around https://github.com/11ty/eleventy/issues/1100
const env = Object.assign({}, process.env, {
  'SLATEDIR': './source',
  'NODE_PATH': path.resolve(__dirname, '../node_modules')
});

function compare(a, b) {
  const as = fs.readFileSync(a, 'utf8');
  const bs = fs.readFileSync(b, 'utf8');
  assert.equal(as, bs);
}

describe('reslate tests', () => {
  it('build artefacts should match golden', () => {
    cp.spawnSync('npm',[ 'run', 'build.test' ], { stdio: 'inherit', cwd: __dirname, env });
    compare('./_site/index.html','test/golden/index.html');
    compare('./_site/slate/css/print.css','test/golden/print.css');
    compare('./_site/slate/css/screen.css','test/golden/screen.css');
  }).timeout(20000);
});

