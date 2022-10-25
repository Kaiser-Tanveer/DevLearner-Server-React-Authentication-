const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
// Getting category
const category = require('./data/category.json');

app.get('/category', (req, res) => {
    res.send(category);
})

