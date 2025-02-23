// server.mjs
import { createServer } from 'node:http';
const serverone = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is ServerProgramOne[1]\n');
  res.end('Hello World!\n');
});
const servertwo = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is ServerProgramTwo[2]\n');
  res.end('Hello World!\n');
});
// starts a simple http server's locally on port 3000, 3001
serverone.listen(3000, '127.0.0.1', () => {
  console.log('Server1 Listening on 127.0.0.1:3000');
});
servertwo.listen(3001, '127.0.0.1', () => {
  console.log('Server2 Listening on 127.0.0.1:3001');
});
// run with `node server.mjs`