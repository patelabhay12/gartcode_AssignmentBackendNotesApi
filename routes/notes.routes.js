const express = require('express');
const bcrypt = require('bcrypt');
const { authenticator } = require('../middlewares/authentic');
const { NotesModel } = require('../models/NoteModel');
const jwt = require('jsonwebtoken');

const notesRouter = express.Router();
notesRouter.use(authenticator);


notesRouter.get('/allnotesByuserId', async (req, res) => {
    let token = req.headers.authorization;
     jwt.verify(token, "abhi", async (err, decode) => {
        try {
            let data = await NotesModel.find({ user: decode.userId });
            res.send({
                data: data,
                message: "All the Notes",
                status: 200
            })

        } catch (error) {
            res.send({
                message: error.message,
                status:500
            })
        }
        res.send({
            message: "All the Notes",
            status: 200
        })
    })

});

notesRouter.post("/create", async (req, res) => {
    try {
        let note = new NotesModel(req.body);
        await note.save();
        res.send({
            message: "Notes Created",
            status: 201
        })
    } catch (error) {
        res.send({
            message: error.message,
            status: 500
        })
    }
});


notesRouter.get("/getanote", async (req, res) => {
    let { id } = req.headers;
    
    try {
        let data = await NotesModel.findOne({ _id: id });
        res.send({
            data:data,
            message: "Note Fetched Successfully...",
            status:200
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:500
        })
    } 
});

notesRouter.put("/update", async (req, res) => {
    let { id } = req.headers;
    // let id = req.headers.id;

    
    try {
        await NotesModel.findByIdAndUpdate({ _id: id }, req.body)
        res.send({
            message: "Notes updated Successfully...",
            status:200
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:500
        }) 
    } 
});


notesRouter.delete("/delete", async (req, res) => {
    let { id } = req.headers;
    
    try {
        await NotesModel.findByIdAndDelete({ _id: id });
        res.send({
            message: "Notes Deleted Successfully...",
            status:200
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:500
        })
    } 
});
module.exports = { notesRouter };