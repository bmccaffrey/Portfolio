const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static('public'));

app.get('projects/blackjack', function(req, res) {
  res.send('projects/blackjack/index.html');
});

app.get('projects/drumkit', function(req, res) {
  res.send('projects/drumkit/index.html');
});

app.get('projects/cssclock', function(req, res) {
  res.send('projects/cssclock/index.html');
});

app.get('projects/cssvariableupdater', function(req, res) {
  res.send('projects/cssvariableupdater/index.html');
});

app.get('projects/flexui', function(req, res) {
  res.send('projects/flexui/index.html');
});

app.get('projects/predictive', function(req, res) {
  res.send('projects/predictive/index.html');
});

app.get('projects/playground', function(req, res) {
  res.send('projects/playground/index.html');
});

app.get('projects/box', function(req, res) {
  res.send('projects/box/index.html');
});

app.get('projects/vowel', function(req, res) {
  res.send('projects/vowel/index.html');
});

app.get('projects/canvas', function(req, res) {
  res.send('projects/canvas/index.html');
});

app.get('projects/checker', function(req, res) {
  res.send('projects/checker/index.html');
});

app.get('projects/drumkit', function(req, res) {
  res.send('projects/drumkit/index.html');
});

app.get('projects/videoplayer', function(req, res) {
  res.send('projects/videoplayer/index.html');
});

app.get('projects/konami', function(req, res) {
  res.send('projects/konami/index.html');
});

app.get('projects/slidein', function(req, res) {
  res.send('projects/slidein/index.html');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
