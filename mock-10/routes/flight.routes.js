const express = require('express');
const FlightModel = require('../model/flight.model');

const flightRoutes = express.Router();

flightRoutes.get('/flights', async(req, res) => {
    try {
        const flight = await FlightModel.find()
        res.status(200).send({flight})
    } catch (err) {
        res.status(502).send({"Error":err})
    }
})

flightRoutes.post('/flights', async (req, res) => {
    const data = req.body;
    try {
        await FlightModel.insertMany(data);
        res.status(201).send({message:"Added Successfully"})
    } catch (err) {
        res.status(502).send({"Error":err})
    }
})


flightRoutes.get("/flights/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const flight = await FlightModel.findById({ _id: id });
    res.status(200).send({ flight });
  } catch (err) {
    res.status(502).send({ message: err });
  }
});

flightRoutes.patch("/flights/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
      await FlightModel.findByIdAndUpdate({ _id: id }, data);
      console.log(data);
    res.status(204).send({ message: "Successfuly Updated" });
  } catch (err) {
    res.status(502).send({ message: err });
  }
});


flightRoutes.delete("/flights/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await FlightModel.findByIdAndDelete({ _id: id })
        res.status(202).send({ message: "delete Flight successfully" });
    }
    catch (err) {
        res.status(502).send({ message: err });
    }
});


module.exports = flightRoutes;