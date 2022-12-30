const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send('Flone Server is Running')
});

app.listen(port, () => {
    console.log(`Flone Server Running on ${port}`);
});