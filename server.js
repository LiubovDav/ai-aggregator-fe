const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, '/dist/ai-aggregator-fe/browser')));

// Handle all other routes and return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/ai-aggregator-fe/browser/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
