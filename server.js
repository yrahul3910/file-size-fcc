const express = require('express');
const multer = require('multer');
const cors = require('cors');

let upload = multer({dest: 'uploads/'});
let app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', upload.single('upload'), (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    console.log(req.upload);
    let {size} = req.file;
    res.end(JSON.stringify({size}));
});

app.listen(9000);