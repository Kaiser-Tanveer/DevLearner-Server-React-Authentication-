const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/category.json');
const courses = require('./data/courses.json');

// Getting category
app.get('/category', (req, res) => {
    res.send(category);
});


app.get('/course', (req, res) => {
    res.send(courses);
});


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const course_info = courses.find(course => course.course_id === id);
    res.send(course_info);
})

app.listen(port, () => {
    console.log('Course server is running on port: ', port);
})