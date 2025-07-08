#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Change to client directory
process.chdir(path.join(__dirname, 'client'));

// Start Vite with port 5000
const vite = spawn('npx', ['vite', 'dev', '--port', '5000', '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});

vite.on('close', (code) => {
  process.exit(code);
});

process.on('SIGTERM', () => {
  vite.kill('SIGTERM');
});

process.on('SIGINT', () => {
  vite.kill('SIGINT');
});