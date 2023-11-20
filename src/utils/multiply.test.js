var { multiply, multiplyText, filterArray, isUtensilAvailable, getUserById } = require("./multiply");

describe("multiply", () => {
  it("will return the product of both numbers passed", () => {
    expect(multiply(2, 3)).toEqual(6);
  });
});

describe("multiplyText", () => {
  it("will return the product of both numbers passed inside a sentence", () => {
    expect(multiplyText(9, 3)).toMatch("The answer is 27.");
  });
});

// filterArray: 
describe('filterArray', () => {
  it('will return null if null is passed', () => {
      var results = filterArray(null);
      expect(results).toBeNull();
  });

  it('will return all numbers lower than 100', () => {
      var mockArray = [1, 2, 3, 4];
      var results = filterArray(mockArray);
      expect(results.length).toEqual(mockArray.length);
      expect(results[0]).toEqual(mockArray[0]);
      expect(results[1]).toEqual(mockArray[1]);
      expect(results[2]).toEqual(mockArray[2]);
      expect(results[3]).toEqual(mockArray[3]);
  });

  it('will not return any numbers greater than 100.', () => {
      var mockArray = [50, 75, 100, 125];
      var results = filterArray(mockArray);
      expect(results).not.toContain(125);
  });
});


// isUtensilAvailable: 
describe('isUtensilAvailable', () => {
    it('will return true if the utensil is found', async() => {
        var utensil = 'fork';
        var result = await isUtensilAvailable(utensil);
        expect(result).toEqual(true);
    });

    it('will return an error if the utensil is not found', async() => {
        var invalidUtensil = 'tree';
        await expect(isUtensilAvailable(invalidUtensil)).rejects.toEqual('No utensils found.');
    });
})

// getUserById: 
describe('getUserById', () => {
  it('will return the user if the id is found', async() => {
      var userId = 2;
      var result = await getUserById(userId);
      expect(result.id).toEqual(userId);
      expect(result.firstName).toEqual('Marlon');
      expect(result.lastName).toEqual('Cobb');
  });

  it('will return an error if the id is not found', async() => {
      var unknownId = 55;
      await expect(getUserById(unknownId)).rejects.toEqual('User with ID ' + unknownId + ' not found.');
  });
});