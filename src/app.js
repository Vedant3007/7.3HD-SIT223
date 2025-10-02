const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const items = [{ id: 1, name: 'Sample item' }];

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to simple-devops-app' });
});

app.get('/api/items', (_req, res) => {
  res.json(items);
});

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'simple-devops-app',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
