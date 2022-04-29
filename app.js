const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;


app.use('/', require('./routes'));

app.listen(port, host, () => {
    console.log(`App listening on port ${port}`)
});

