//Array method find

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  }

  //Array method findIndex

  function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }

  //Array method filter

  function filter(array, callback) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }