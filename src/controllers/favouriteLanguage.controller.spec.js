
let { getFavLanguage } = require('../services/favouriteLanguage.service');

getFavLanguage = jest.fn();
const getSpy = getFavLanguage;

jest.doMock('express', () => {
    return {
        Router() {
            return {
                get: getSpy,
            }
        }
    }
});


describe('should test router', () => {

    require('./favouriteLanguage.controller.js');

    it('should call getFavLanguage function', () => {
        expect(getSpy).toHaveBeenCalled();

    });
});
