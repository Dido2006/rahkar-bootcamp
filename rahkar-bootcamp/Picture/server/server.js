const express = require("express")
const cors = require("cors")
const multer = require("multer")

const testRouter = require("./routes/test.route")

const PORT = 3000;

app = express()
app.use(express.json())
app.use(cors())
app.use("/api/test", testRouter)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage

});
app.post('/uploadimage', function (req, res) {
    let pic = req.body.pic
    // console.log("Body:", req.body.pic)
        upload.single('pic')(req, res, function (err) {
            if (err) {
                return res.status(500).json({ message: err }); //file upload error
            }
            res.send('Image Upload:');
       
    })

});

app.listen(PORT, () => {
    console.log("it is RUNN");
})