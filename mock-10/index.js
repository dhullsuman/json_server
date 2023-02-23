const express = require('express');
const cors = require('cors');
const connection = require('./config/db');
const userRoutes = require('./routes/user.routes');
const flightRoutes = require('./routes/flight.routes');
const bookingRoutes = require('./routes/booking.routes');
const port = 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes)
app.use('/api', flightRoutes)
app.use('api', bookingRoutes)

app.listen(port, async() => {
    try {
        await connection;
        console.log('listening on port ' + port)
    } catch (err) {
        console.log("Error listening on port");
    }
})
