
const express = require('express');

let app = express();

app.listen(3000);

const getIpRouter = require('./router/get_ip');
app.use('/get-ip', getIpRouter);

console.log("Application running successfully.");


module.exports = app;
