const cors = require('cors');
const express = require('express');

const app = express();
const port = 8081; // Use a different port from JSON Server

app.use(cors());

app.listen(port, () => {
  console.log(`CORS middleware server is running on http://localhost:${port}`);
});
