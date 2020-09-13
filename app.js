const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/users');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

app.use(routes);