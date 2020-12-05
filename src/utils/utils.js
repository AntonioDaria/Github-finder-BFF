const extractFavLanguage = (ArrayOfLanguages) => {

    let languageMap = {};
    let value = '';
    let maxCount = 0;
    let result = {}
    for (let language of ArrayOfLanguages) {

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
    return (
        result = {
            favLang: value,
            numbOfRepo: maxCount
        }
    );
}


module.exports = { extractFavLanguage }
