const useSpy = jest.fn();
const listenSpy = jest.fn();
const controllers = require('./src/controllers')

jest.doMock('express', () => {
  return () => ({
    use: useSpy,
    listen: listenSpy,
  })
});

describe('should test server configuration', () => {
  it('use router', () => {
    require('./server.js');
    expect(useSpy).toHaveBeenCalledWith( '/api/v1' , controllers);
  });


  it('should call listen fn', () => {
    require('./server.js');
    expect(listenSpy).toHaveBeenCalled();
  });
});
