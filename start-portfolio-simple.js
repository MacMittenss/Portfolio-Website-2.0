#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting Marcus Portfolio on port 5000...');

const clientDir = path.join(__dirname, 'client');
const vite = spawn('npx', ['vite', 'dev', '--port', '5000', '--host', '0.0.0.0'], {
  cwd: clientDir,
  stdio: 'inherit',
  env: { ...process.env, FORCE_COLOR: '1' }
});

vite.on('close', (code) => {
  console.log(`Portfolio server exited with code ${code}`);
});

vite.on('error', (err) => {
  console.error('Failed to start portfolio:', err);
});

// Keep the process alive
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  vite.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Shutting down...');
  vite.kill('SIGINT');
});