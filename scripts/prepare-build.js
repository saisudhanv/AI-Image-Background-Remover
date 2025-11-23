#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const clientDir = path.join(projectRoot, 'client');
const distDir = path.join(clientDir, 'dist');
const outDir = path.join(projectRoot, '.build');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log('Running build: installing client dependencies...');
  execSync('npm install', { cwd: clientDir, stdio: 'inherit' });

  console.log('Running build: building client...');
  execSync('npm run build', { cwd: clientDir, stdio: 'inherit' });

  console.log('Preparing output directory:', outDir);

  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outDir, { recursive: true });

  if (!fs.existsSync(distDir)) {
    console.error('Expected build output not found at', distDir);
    process.exit(1);
  }

  console.log('Copying files from', distDir, 'to', outDir);
  // Use fs.cpSync when available (Node 16.7+), otherwise fallback to recursive copy
  if (fs.cpSync) {
    fs.cpSync(distDir, outDir, { recursive: true });
  } else {
    copyRecursiveSync(distDir, outDir);
  }

  console.log('Build complete. Files are in', outDir);
} catch (err) {
  console.error('Build failed:', err && err.message ? err.message : err);
  process.exit(1);
}
