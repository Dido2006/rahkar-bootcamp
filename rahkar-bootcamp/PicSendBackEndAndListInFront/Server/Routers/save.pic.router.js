const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router=express.Router();
const app = express();
const upload = multer({ dest: 'assets/images' });

router.post('/images', upload.single('image'), async (req, res) => {
    const { title } = req.body;
    const filePath = req.file.path;

    try {
        await Picture.create({ title, filePath });
        res.json({ message: 'Image saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports=router;