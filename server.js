const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/citations', (req, res) => {
  pool.query('SELECT * FROM citations', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
