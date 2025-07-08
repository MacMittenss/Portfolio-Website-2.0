#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Starting Vite development server on port 5000...');

// Start Vite with port 5000 from the client directory
const vite = spawn('npx', ['vite', 'dev', '--port', '5000', '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, 'client'),
  detached: false
});

// Handle process termination
vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});

vite.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  process.exit(1);
});

// Handle signals
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  vite.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  vite.kill('SIGINT');
});

// Keep the process alive
process.on('exit', () => {
  console.log('Main process exiting...');
});