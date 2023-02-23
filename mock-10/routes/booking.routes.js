const express = require("express");
const BookingModel = require("../model/booking.model");

const bookingRoutes = express.Router();

bookingRoutes.get("/dashboard", async (req, res) => {
  try {
    const booking = await BookingModel.find();
    res.status(200).send({ booking });
  } catch (err) {
    res.status(502).send({ message: err });
  }
});

bookingRoutes.post("/booking", async (req, res) => {
  const data = req.body;
  try {
    await FlightModel.insertMany(data);
    res.status(201).send({ message: "Booking Successfully" });
  } catch (err) {
    res.status(502).send({ message: err });
  }
});

module.exports = bookingRoutes;