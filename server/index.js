const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const PORT = process.env.NODE_ENV || 3000;
app.prepare()
  .then(() => {
    server.get('/test', (req, res) => res.send('test'));
    server.get('*', (req, res) => handle(req, res));
    server.listen(PORT, () => {
      console.log(`App is running PORT ${PORT}`);
    });
  })
  .catch(() => {
    console.error(ex.stack);
    process.exit(1);
  });
