/*function largestOfFour(arr) {
    let maxArr = new Array();
    arr.forEach(innerArr => {
        let max = 0;
        innerArr.forEach(innerVal => {
            if(innerVal > max) max = innerVal;
        });
        //console.log(`Maximum number in array ${arr.indexOf(innerArr) + 1} is ${max}.`); OR
        //return an array
        maxArr.push(max);
        max = 0;
    });
    console.log(maxArr);
};

largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [1000,1001,857,1]]);
//==> [5, 27, 39, 1001]*/

//Using an inner function and the sort() method
let maxArr = new Array();

function largestOfFour(arr) {
    arr.forEach(innerArr => {
        maxArr.push(findMax(innerArr));
        });
    console.log(maxArr);
};

function findMax(array) {
    //Note: sort((a,b) => a-b); returns an array in ascending order
    return array.sort((a,b) => b-a)[0]; //sort in descending order
};
largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [1000,1001,857,1]]);
//==> [5, 27, 39, 1001]