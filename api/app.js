const express = require("express");
const mongoose = require("mongoose");
const cvRoutes = require('./routes/cv');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json()); //application/json

app.use((req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})



app.use('/auth', authRoutes);
app.use('/cv', cvRoutes);


app.use((error, req, res, next) => {
    console.log("-----", error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data }); //data c'est pour la validation
});

mongoose.connect('mongodb://localhost:27017/glp22', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => app.listen(3000, console.log("Server started !")))
    .catch(err => console.log(err));




