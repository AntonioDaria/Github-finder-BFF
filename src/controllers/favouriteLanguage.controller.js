const express = require('express')

const app = express.Router()

const { getFavLanguage } = require('../services/favouriteLanguage.service')


try {
    app.get('/:userName/', getFavLanguage);
} catch (error) {
    console.log(error)
    throw new Error ("Failed to retrieve the language");
}


module.exports = app
