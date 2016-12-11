function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  let dogs = ["Lexy", "Boomer"];
  dogs.forEach(callback);
  return dogs;
};

function doToArray(array, callback) {
  array.forEach(callback);
};