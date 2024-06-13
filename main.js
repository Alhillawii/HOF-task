//task1//

const numbers = [1, 2, 3, 4, 5];
 numbers.map(numbers => {
    console.log(numbers)
})

//task2//

const number = [4, 12, 20, 8, 15];

const non = number.filter(function(num) {
  return num > 10;
});

console.log(non); 



//   //task3//
const strings = ["butato", "tomato", "watermilon"];

strings.forEach(function(str) {
  console.log(str.toUpperCase());
});



// //task4//

const arrOb = [
    { name: "ayah", age: 22 },
    { name: "rahgood", age: 22 },
    { name: "kalboz", age: 24 }
  ];
  
  const Values = arrOb.map(function(obj) {
    return obj.name;
  });
  console.log(Values);


  //task5//

   const Val = "ayah";
  const filtered = arrOb.filter(function(obj) {
    return obj.name == Val;
  });
  console.log(filtered);



//task6//

const num = [3, 2, 7, 6, 5];
let sum = 0;

num.forEach(function(number) {
    sum + number;
});

console.log(sum);

//task7//

// const strings = ["butato", "tomato", "watermilon"];
const revers = strings.map(function(str) {
    return str.split('').reverse().join('');
});

console.log(revers); 

//task8//

const numb = [ 3, 4, 5, 6, 7, 8];
function isPrime(number) {
    if (number % 2 === 0 || number % 3 === 0) return false;
    else{
        return true;
    }
      
}
const primeNumbers = numb.filter(isPrime);

console.log(primeNumbers);


//task9//

const booleans = [true, false];

booleans.forEach(function(boolean, index) {
    console.log(`Index ${index}: ${boolean}`);
});

//task10//

const n = [12, 24, 33, 84];
const tr = n.map(function(number) {
    return String(number);
});

console.log(tr); 


//task11//

const duplicates = [11, 11, 22,22, 44, 44, 56 , 56];
const unique = duplicates.filter(function(value, index , array) {
    return array.indexOf(value) == index;
});

console.log(unique); 

//task12//
// const arrOb = [
//     { name: "ayah", age: 22 },
//     { name: "rahgood", age: 22 },
//     { name: "kalboz", age: 24 }
// ];

arrOb.forEach(function(obj) {
    for (let koko in obj) {
        console.log(obj[koko]);
    }
});


//task13//


// const strings = ["butato", "tomato", "watermilon"];
const  Indices = strings.map(function(string , index){
    return string + index;

})
   console.log(Indices);

//task14//

const nm = [44,58.87,99,32];
const even = nm.filter(function(number){
    return number % 2 == 0;
})
console.log(even);

//task15//

const mn = [12 , 4 , 6 , 8];
mn.forEach(function(number){
    console.log(number * 2);
})

//task16//

// ????????
// const nb = [1, 2, 3, 4, 5];
// const incrementedNumbers = nb.map(function(number, index) {
//     return number + index;
// });

// console.log(incrementedNumbers); 


//task17//

const obje = [
    {num: 3 , val: 12},
    {num: 5 , val: 3},
    {num:4 , val:9},
    {num:2 , val:2}
];

const arr = obje.filter(function(obj){
    return obj.val > 5;
})
console.log(arr);


//task18//

const fruit = ["apple", "banana", "orange"];
fruit.forEach(function(string) {
    console.log(string.length);
});


//task19//

const veg = ["tomato", "cucumber", "lettuce"];
const capitalized = veg.map(function(string) {
    return string.toUpperCase();
});

console.log(capitalized); 


//task20//

// const ne = [6 , 20, 4, 15];
// const average = ne.reduce((acc, curr) => acc + curr, 0) / numbers.length;

// const Average = ne.filter(function(number) {
//     return number > average;
// });

// console.log(Average); 



//task21//

const ke = [18, 16 , 30 , 22];
ke.forEach(function(number) {
    console.log(number / 2);
});

//task22//

const fu = [-7 , 98 , -100 , -51];
const absolute = fu.map(function(number){
    return Math.abs(number)
})
console.log(absolute);


//task23//
 //???///




 //task24//

//  const Name = ["jojo","ayah","ayda"];
//  Name.forEach(function(string){
//     if ( string.includes('a'))
//  })
//  console.log(includes);

 //task25//

 const ma = [22 , 30 , 36];
 const remainder = ma.map(function(number){
    return number % 3;
 })
 console.log(remainder);

 //task26//

//  const mat = [4 , 14 , 18];
//  const perfect = mat.filter(function(number) {
//     return Number.isInteger(Math.sqrt(number));
// });
//  console.log(perfect);

 //task27//

const fruits = ["apple","grap","cherry"];
const objt = [];
fruits.forEach(function(string){
    objt.push({
        string: string,
        length: string.length
    });
})

console.log(objt);


//task28//

const game = ["basketball","football","swiming"];
const repeat = game.map(function(string){
    return string.repeat(2);
})
console.log(repeat);

//task29//

//????



//task30//

const op = [4,16,9];
const square = [];

op.forEach(function(number){
    square.push(Math.sqrt(number))
})
console.log(square);

//task31//

const nabj = [
    {num:3 , name:'ayosh'},
    {num:1, name :'lolo'},
    {num:2 , name: 'toto'}
];

const newarr = nabj.map(function(obj){
    return {...obj, new:'value'}
})
console.log(newarr);

//task32//

///?????/


//task33//
const nmbr = [1,2,3,4];

nmbr.forEach(function(number){
    let factor = 1;
    
    for( let i = 1; i <= number; i++){
        factor *= i;
    }
    console.log(`factor of ${number} is ${factor}`);

})


//task34//

function callbackfuntion(callback){
    callback();
}

function show() {
    console.log("Hi It's me ayah :) ");
}

callbackfuntion(show);

//task35//

function pArray(callback, array) {
    array.forEach(function(element) {
        callback(element);
    });
}

function callbackFunction(element) {
    console.log("Element:", element);
}

const mArray = [1, 2, 3, 4, 5];
pArray(callbackFunction, mArray);


//task36//


// function performCallback(value, positiveCallback, negativeCallback) {
//     if (value >= 0) {
//         positiveCallback(value);
//     } else {
//         negativeCallback(value);
//     }
// }

// function positiveCallback(value) {
//     console.log("Positive value:", value);
// }

// function negativeCallback(value) {
//     console.log("Negative value:", value);
// }

// performCallback(5, positiveCallback, negativeCallback); 
// performCallback(-3, positiveCallback, negativeCallback); 


//task37//

function applyCall(array, callback) {
    return array.map(callback);
}

function double(number) {
    return number * 2;
}

const ori = [4, 8, 10, 6];
const newArray = applyCall(ori, double);

console.log(newArray);


//task38//

function callTwice(callback) {
    const result = callback();
    console.log(result);
    console.log(result);
}

function myCallback() {
    return "Hi, Iam ayah!";
}

callTwice(myCallback);

//task39//

 //???


  //task40//
  
//   function com(func,ti){
//     return function(d){
//         let result = 0;
//         for (let i = 0; i <= ti; i++) {
//             result = result + func(d);
//         }
//             return result;
//     };
//   }
   
//    function sq(d) {
//     return d+d
//    }
//    const comsq = com(sq, (5));
//    const result = comsq(4);

//    console.log(result);



   function reapetOperation (fun , times){
    return function (number){
        let result = number;
        for (let i = 1; i <= times; i++) {
          result = fun(result)
            
        }
        return result;
    }
   }

    const addTwo = x => x + 2; ///original function
    const addTwofivethimes =  reapetOperation(addTwo , 5);

    console.log(addTwofivethimes(10));





