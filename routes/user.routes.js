const express = require('express');
const bcrypt = require('bcrypt');
const { userModel } = require('../models/userModel');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();


userRouter.get("/", (req, res) => {
    res.send("All the user")
})

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
            return res.status(500).send({ message: "Something went wrong", status: 0 });
        }
        try {
            let user = new userModel({ name, email, password: hash });
            await user.save();
            res.status(201).send({
                message: "user created",
                status: 201
            });
        } catch (err) {
            res.status(500).send({
                message: err.message,
                status: 500
            });
        }
    });
});


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        let data = await userModel.find({ email });
        if (data.length > 0) {
            let token = jwt.sign({ userId: data[0]._id }, "abhi")
            bcrypt.compare(password, data[0].password, (err, result) => {
                if (err) {
                    return res.send({
                        message: "Something went wrong" + err,
                        status: 500
                    })
                }
                if (result) {
                    res.send({
                        message: "User Logged in successfully",
                        token: token,
                        status: 200
                    })
                } else {
                    res.send({
                        message: "incorrect Password",
                        status: 500
                    });
                }
            })
        } else {
            res.send({
                message: "User does not exist",
                status: 500
            });
        }
    } catch (error) {
        res.send({
            message: error.message,
            status: 500
        })
    }

});

module.exports = { userRouter }; 