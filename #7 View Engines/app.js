const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//if you want to have specific place to store your files
//app.set('views', 'myviews');

//listen for requests
app.listen(3000, () => console.log("Web Server running on port 3000"))

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// 404 page. SHOULD ALWAYS BE AT THE BOTTOM OF THE PAGE
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});