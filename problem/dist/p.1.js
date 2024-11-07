"use strict";
{
    const sumArray = (arr) => {
        let sum = 0;
        arr.forEach(element => sum += element);
        return sum;
    };
    const result = sumArray([1, 2, 3, 2, 1]);
    console.log(result);
}
