const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) =>{
        if (!err) res.send(docs)
        else console.log("Error to get data : " + err)
    })
})

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) =>{
        if(!err) res.send(docs);
        else console.log('Error creating new data :' + err);
    })
})
// update
router.put("/:id", (req, res) => {
    if (ObjectID.isValid(req.params.id))
    return req.statusCode(400).send("ID unknow : " + req.params.id)

    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    }
})

module.exports = router