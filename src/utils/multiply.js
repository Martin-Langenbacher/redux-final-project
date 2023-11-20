function multiply(x, y) {
  return x * y;
}

function multiplyText(x, y) {
  return `The answer is ${multiply(x, y)}.`;
}

function filterArray(numbers) {
  if (numbers === null) {
    return null;
  }
  return numbers?.map((n) => (n > 100 ? 100 : n));
}

// isUtensilAvailable.js
var utensils = ["fork", "knife", "spoon"];

function isUtensilAvailable(utensil) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      utensils.includes(utensil) ? resolve(true) : reject("No utensils found.");
    }, 2000);
  });
}

var users = {
  1: {
    id: 1,
    firstName: "Kevin",
    lastName: "Chung",
  },
  2: {
    id: 2,
    firstName: "Marlon",
    lastName: "Cobb",
  },
  3: {
    id: 3,
    firstName: "Maria",
    lastName: "Santos",
  },
  4: {
    id: 4,
    firstName: "Iris",
    lastName: "Leblanc",
  },
  5: {
    id: 5,
    firstName: "Ali",
    lastName: "Ahmed",
  },
};

function getUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users[id]
        ? resolve(users[id])
        : reject("User with ID " + id + " not found.");
    }, 2000);
  });
}

module.exports = {
  multiply,
  multiplyText,
  filterArray,
  isUtensilAvailable,
  getUserById,
};
// WRONG:
/*
module.exports = multiply;
module.exports = multiplyText;
*/
