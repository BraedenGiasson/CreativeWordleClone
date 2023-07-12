require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://braedengiasson:gMyqa7%40Gh4oSTwpS@cluster0.tkgdvwy.mongodb.net/?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
// function(err) {
//     if (!err) {
//         console.log('Database connected...');
//     }
//     else {
//         console.log(err);
//     }
)

app.get('/', (req, res) => {
    res.send('E')
});

app.listen(3001, function() {
    console.log('Server is running...');
})