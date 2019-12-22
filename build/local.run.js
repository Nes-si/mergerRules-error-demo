const express = require('express');
const path = require('path');


const port            = 9000;

const server = new express();

server.use('/', express.static(path.resolve(__dirname, '../dist')));

server.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
);

server.listen(port, error => {
  if (error)
    console.error(error);
  else
    console.info(`==> Listening at http://localhost:${port}/`);
});