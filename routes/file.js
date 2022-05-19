const express = require("express");
const File = express.Router({ mergeParams: true });
const FileControl = require("../controller/FileControl")
File.post("/write", async function(req, res) {


    let data = await FileControl.write(req.body);
    if (data) {
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});
File.get("/read", async function(req, res) {
    let data = await FileControl.read();
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).send();
    }
});
module.exports = File;