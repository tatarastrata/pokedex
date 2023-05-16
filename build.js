const fs = require('fs');
const { execSync } = require('child_process');

if (fs.existsSync('dist')) {
  execSync('rm -r dist');
}

fs.mkdirSync('dist');

fs.copyFileSync('index.html', 'dist/index.html');

execSync('tsc');

fs.renameSync('index.js', 'dist/index.js');
