// @desc get username favourite language
// @endpoint GET /api/v1/language
// @access public
const axios = require('axios')
const { extractFavLanguage } = require("../utils/utils")

exports.getFavLanguage = async (req, res) => {

    try {
        const userName = req.params.userName;

        const url = `https://api.github.com/users/${userName}/repos`;

        const result = await axios.get(url);
        const requestedPackage = result.data

        const languagesArray = requestedPackage.map((repo) => {
            return repo.language
        })
       
        const myResult = extractFavLanguage(languagesArray);

        return res.status(200).json(myResult);


    } catch (error) {
        throw new Error(error);
    }


}

// testing the service return 


