const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors/safe');

const connectDB = require('./config/db')

const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

connectDB()
colors.enable();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/goals', require('./routes/goalRoutes'));



app.use(errorHandler);

app.listen(port, () => console.debug(`Server started on port ${port}`));
