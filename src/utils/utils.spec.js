
const { extractFavLanguage } = require("../utils/utils")

describe('extract favourite language function', () => {
    it('should return the user name favourite language', () => {
        const array = ['Ruby', 'Ruby', 'JS', 'JS', 'JS', 'Python', 'PHP'];
        result = extractFavLanguage(array)
        expect(result.favLang).toEqual('JS')
    });

});

