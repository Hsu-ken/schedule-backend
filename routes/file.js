const express = require("express");
const File = express.Router({ mergeParams: true });
const FileControl = require("../controller/FileControl")
File.post("/writecalendarlist", async function(req, res) {


    let data = await FileControl.writecalendarlist(req.body);
    if (data) {
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});
File.get("/readcalendarlist", async function(req, res) {
    let data = await FileControl.readcalendarlist();
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).send();
    }
});
File.post("/writeschedule", async function(req, res) {


    let data = await FileControl.writeschedule(req.body);
    if (data) {
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});
File.get("/readschedule", async function(req, res) {
    let data = await FileControl.readschedule();
    // console.log(data)
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).send();
    }
});
module.exports = File;