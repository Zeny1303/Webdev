const express = require('express');
const app = express();

// create notes array to store notes
const notes = [];
app.use(express.json()); // frontend to backend data ko readable banane ka kaam middleware krta hai -express.json()
// user data bhejga from frontend to backend
app.post('/notes', (req, res) => {
    res.status(200).json({ message: 'Note received successfully' });
});

// export karne ke liye 
module.exports = app;