// @desc get username favourite language
// @endpoint GET /api/v1/language
// @access public
const axios = require('axios')

exports.getFavLanguage = async (req, res) => {

 try {

        const userName = req.params.userName;

        const url = `https://api.github.com/users/${userName}/repos`;

        const result = await axios.get(url);
        const requestedPackage = result.data

        const languagesArray = requestedPackage.map((repo) => {
            return repo.language
        })
        ///////////////////

        let languageMap = {};
        let value = '';
        let maxCount = 0;
        let myResult = {}
        for (let language of languagesArray) {

            if (languageMap[language] == null) {
                languageMap[language] = 1;
            } else {
                languageMap[language]++;
            }

            if (languageMap[language] > maxCount) {
                value = language;
                maxCount = languageMap[language];
            }
        }

        myResult = {
            favLang: value,
            numbOfRepo: maxCount
        }

        ////////
        return res.status(200).json(myResult);


    } catch (error) {
        throw new Error("Failed to retrieve ................");
    }


}

// put the logic for finding the number of occurences in a util function
// testing


