const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});