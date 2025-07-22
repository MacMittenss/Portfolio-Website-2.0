#!/usr/bin/env node
const { spawn } = require('child_process');

console.log('Starting Marcus Prater Portfolio...');

const server = spawn('tsx', ['server/index.ts'], {
  stdio: 'inherit',
  env: { ...process.env, PORT: '5000' }
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
});