const multer = require("multer");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.get(".", express.static(path.join(__dirname, "./public")));
console.log(__dirname, "./public");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../src/assets/uploads/");
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,
});

const singleUpload = upload.single("newImage");

let imageName = "";

app.post("/uploadFile", function (req, res) {
    singleUpload(req, res, function (err) {
        if (err) {
            return res.status(422).send({
                errors: [{ title: "File Upload Error", detail: err.message }],
            });
        } else {
            imageName = req.file.filename;
            console.log(req.file.path);
            var imagePath = req.file.path;
            return res.send({ success: true, imageName });
        }
    });
});

module.exports = app;
