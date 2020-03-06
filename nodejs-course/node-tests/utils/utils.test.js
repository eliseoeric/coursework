const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  describe('#add', () => {

  it('should add two numbers', () => {
    const result = utils.add(33, 11);
    expect(result).toBe(44);
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7);
      done();
    });
  });
  
  })
  
  it('should square two numbers', () => {
    const result = utils.square(3);
    expect(result).toBe(9);
  });

  
  
  it('should async square a number', (done) => {
    utils.asyncSquare(5, (result) => {
      expect(result).toBe(25);
      done();
    });
  });
});



it('should set first name and last name', () => {
  const user = { location: 'St Pete', age: 30 };
  const result = utils.setName(user, 'Eric Eliseo');

  expect(user).toEqual(result);
  expect(result).toMatchObject({
    firstName: 'Eric',
    lastName: 'Eliseo',
  });
});

