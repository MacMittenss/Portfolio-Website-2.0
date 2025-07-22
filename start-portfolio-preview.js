#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting Marcus Portfolio for Replit preview on port 5000...');

const clientDir = path.join(__dirname, 'client');
const vite = spawn('npx', ['vite', 'dev', '--port', '5000', '--host', '0.0.0.0', '--strictPort'], {
  cwd: clientDir,
  stdio: 'inherit',
  env: { ...process.env, FORCE_COLOR: '1' }
});

vite.on('close', (code) => {
  if (code !== 0) {
    console.log(`Portfolio server exited with code ${code}`);
  }
});

vite.on('error', (err) => {
  console.error('Failed to start portfolio:', err);
  process.exit(1);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  vite.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Shutting down...');
  vite.kill('SIGINT');
});

// Keep the process alive
process.stdin.resume();