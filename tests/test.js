let myArray = [1, 2, 3];

const myFunction_ = () => {
    let anotherOne = myArray;
    anotherOne[0] = 4;
    console.log(anotherOne[0]);
};

const myFunction = () => {
    let anotherOne;
    //anotherOne = [...myArray];
    anotherOne = myArray.slice(0);
    anotherOne[0] = 4;
    console.log(anotherOne[0]);
};

const functionToModify = (myArr) => {
    // myArr = [100, 200, 300];
    myArr[0] = 100;
    myArr.push(300);
    myArr.shift();
    myArr.unshift(5);
    console.log(myArr);
};

console.log('myArray: ' + myArray);
//myFunction();
functionToModify(myArray);
console.log('myArray after function call: ' + myArray);
