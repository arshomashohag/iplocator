
const express = require('express');
const router = express.Router();

let app = express();

app.listen(process.env.PORT || 3000);

const getIpRouter = require('./router/get_ip');

app.use('/', router.get('', function(req, res){
    res.send('Welcome to my site !');
})
);
app.use('/get-ip', getIpRouter);

console.log("Application running successfully.");


module.exports = app;
