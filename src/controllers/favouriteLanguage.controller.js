const express = require('express')

const router = express.Router()

const { getFavLanguage } = require('../services/favouriteLanguage.service')


try {
    router.get('/language/:userName/', getFavLanguage);
} catch (error) {
    console.log(error)
    throw new Error ("Failed to retrieve the language");
}


module.exports = router
