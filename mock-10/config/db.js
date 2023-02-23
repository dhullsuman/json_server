const URL = "mongodb+srv://sumandhull:suman@cluster0.bybdlgs.mongodb.net/flight?retryWrites=true&w=majority"

const mongoose = require("mongoose");

const connection = mongoose.connect(URL)

module.exports = connection;