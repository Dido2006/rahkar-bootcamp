const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { log } = require('console');
const router = express.Router();
const app = express();
const upload = multer({ dest: 'assets/images' });

router.post('/', upload.single('image'), async (req, res) => {
    const { title, filePath } = req.body;
    console.log(title);
    
    try {
        await Picture.create({ title, filePath });
        res.json({ message: 'Image saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;