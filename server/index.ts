import { spawn } from 'child_process';

// Start Next.js development server on port 5000
const nextDev = spawn('npx', ['next', 'dev', '-p', '5000'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

nextDev.on('error', (err) => {
  console.error('Failed to start Next.js dev server:', err);
  process.exit(1);
});

nextDev.on('close', (code) => {
  console.log(`Next.js dev server exited with code ${code}`);
  process.exit(code || 0);
});

// Handle process termination
process.on('SIGINT', () => {
  nextDev.kill('SIGINT');
});

process.on('SIGTERM', () => {
  nextDev.kill('SIGTERM');
});