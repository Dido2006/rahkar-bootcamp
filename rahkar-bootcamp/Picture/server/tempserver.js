const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'upload/' });
app.use(cors);
app.post('/api/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('Image uploaded successfully');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
