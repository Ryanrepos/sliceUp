// function getPositiveNumbers(a: number[]): string {
//     const result: number[] = [];
//     for(const i of a) {
//         if(i > 0) {
//             result.push(i);
//         }
//     }
//     return result.join("")
// }

// console.log(getPositiveNumbers([1, 9, 5, -2, -8]));  // buyerda 195 raqamlarini qaytarib beryabdi. 

// RUN: npm run train

// *** H2 - TASK ***

function myDemo(str: string): string {
    let strResult = "";
    for(const i of str) {
        if (i >= "0" && i <= "9") {
            strResult += i
        }
    }
    return strResult;
}

console.log(myDemo("48gh9k2"));
console.log(myDemo("123MIT456"));

// RUN: npm run train 

