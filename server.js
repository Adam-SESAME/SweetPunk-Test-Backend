const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'sql7.freesqldatabase.com',
  user: 'sql7715824',
  password: 'V6irYfJtgg',
  database: 'sql7715824'
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