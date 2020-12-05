const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
  return () => ({
    use: useSpy,
    listen: listenSpy,
  })
});

describe('should test server configuration', () => {
  xit('use router', () => {
    require('./server.js');
    expect(useSpy).toHaveBeenCalledWith( '/');
  });

  it('should call listen fn', () => {
    require('./server.js');
    expect(listenSpy).toHaveBeenCalled();
  });
});
