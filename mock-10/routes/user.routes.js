const express = require('express');
const UserModel = require('../model/user.model');

const userRoutes = express.Router()

userRoutes.post('/register', async (req, res) => {
    const data = req.body;
    try {
        const user = new UserModel(data);
        await user.save();
        res.status(201).send({message:"Successfully registered"})
    } catch (err) {
        res.status(502).send({"Error":err})
    }
})

userRoutes.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({email, password});
        if (user.length > 0) {
            res.status(201).send({message:"Login successful"})
        } else {
            res.status(404).send({ message: "Not Found" });
        }
    } catch (err) {
        res.status(502).send({ "Error": err });
    }
})

module.exports = userRoutes;