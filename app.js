const express = require('express');
const fs = require('fs')
const app = express();


app.get('/', (req, res) => {
    res.send("Your Mom");
});
app.get('/random',(req, res)=> {
    let images = fs.readdirSync(__dirname+'/images');
    let image = images[Math.floor(Math.random()*images.length)]
    res.sendFile(__dirname + '/images/'+image);
});
app.listen(80, () => {
    console.log('Listening on port 80')
}) 