const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/mongoose');

const app = express();
const port = process.env.PORT || 8000;

// MIDDLEWARE 
app.use(express.json());
app.use(cors());

// CONNECTING ROUTES 
app.use('/api/todos', require('./routes/todoRoutes'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`yup server running at port: ${port}`);
})