
//1. Implement bubble sort with while/for loop.

function bubbleSort(array) {
  let start = true;
  let i = 0;

  while (start) {
    start = false;
    i++;

    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        start = true;
      }
    }
  }

  return array;
}

const array = [1, 5, 3, 2, 4];

console.log(bubbleSort(array))

//2. Implement bubble sort with while/while loop.

function bubbleSort(array) {
  let i = 0;
  let j = 0;
  let start = true;

  while (start) {
    start = false;
    j = 0;

    while (j < array.length - i - 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        start = true;
      }

      j++;
    }

    i++;
  }

  return array;
}

const array = [1, 5, 3, 2, 4];

console.log(bubbleSort(array))

// 3. Implement bubble sort with for/while loop.

  function bubbleSort(array) {
  let i = 0;
  let start = true;

  while (start) {
    start = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        start = true;
      }
    }
    i++;
  }

  return array;
}

const array = [1, 5, 3, 2, 4];

console.log(bubbleSort(array))

// 4. Given an array of objects (like {name, surname, age, gender} as in previous lesson). Return only girls "names" sorted by their age.

const array = [
  
    {
        name: 'Davit',
        surname: 'Margaryan',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Armen',
        surname: 'Julhakyan',
        age: 28,
        gender: 'male'
    },
    {
        name: 'Hrachya',
        surname: 'Khachatryan',
        age: 27,
        gender: 'male'
    },
    {
        name: 'Larisa',
        surname: 'Shahnazaryan',
        age: 23,
        gender: 'female'
    },
    {
        name: 'Tatev',
        surname: 'Azaryan',
        age: 24,
        gender: 'female'
    },
    {
        name: 'Zaruhi',
        surname: 'Danielyan',
        age: 24,
        gender: 'female'
    },
    {
        name: 'Areg',
        surname: 'Alaverdyan',
        age: 29,
        gender: 'male'
    },
    {
        name: 'Henri',
        surname: 'Engibaryan',
        age: 20,
        gender: 'male'
    }
];

const girls = array.filter((item) => item.gender === "female");

const sortedGirls = girls.sort((a, b) => a.age - b.age);

const girlNames = sortedGirls.map((item) => item.name);

console.log(girlNames);