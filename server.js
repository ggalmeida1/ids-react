const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');


const app = express();
const port = process.env.PORT || 3000;

// DB Connection
mongoose.connect('mongodb+srv://root:rootPasswd1@cluster0.6e5wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
}, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('MongoDB connection established');
    }
})



//implements CORS
app.use(cors());

app.use(cookieParser());

//to send json from Frontend to Backend
app.use(express.json());


app.use(routes);


//initialize server
app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
})