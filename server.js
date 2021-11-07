const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const controllers = require('./src/controllers')

dotenv.config({ path: './config/config.env' })

const app = express();


app
 .use('/api/v1', controllers);


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))






