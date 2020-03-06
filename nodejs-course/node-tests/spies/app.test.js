const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });
});