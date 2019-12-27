const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    // res.render('./home-page');
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// app.use(express.static(path.resolve(__dirname, './')));
app.use(express.static('./'));