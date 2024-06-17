//📌📌📌📌📌📌📌📌📌📌📌

/*
Project Standarts
    - Logging Standarts    
    - Naming Standarts
        function, method, variable =>  CAMEL   goHome
        class =>                       PASCAL  MemberService
        folder, file =>                KEBAB   kebab-case
        css =>                         SNAKE   button_style
    - Error handling
*/

//📌📌📌📌📌📌📌📌📌📌📌

/*
Traditional Api
Rest Api
GraphQL Api 
*/

//📌📌📌📌📌📌📌📌📌📌📌

// Frontend qurish usullari 2 xil:
// 1. Traditional FD   =>  SSR  =>  EJS
// 2. Modern FD        =>  SPA   =>  REACT

//📌📌📌📌📌📌📌📌📌📌📌

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

// function myDemo(str: string): string {
//     let strResult = "";
//     for(const i of str) {
//         if (i >= "0" && i <= "9") {
//             strResult += i
//         }
//     }
//     return strResult;
// }

// console.log(myDemo("48gh9k2"));
// console.log(myDemo("123MIT456"));

// RUN: npm run train 

// I-TASK:

function takrorElement(array: number[]): number | null {
    const count = new Map<number, number>();

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        count.set(num, (count.get(num) || 0) + 1);
    }

    let repeatedEl: number | null = null;
    let maxCount = 0;

    count.forEach((a, b) => {
        if (a > maxCount) {
            maxCount = a;
            repeatedEl = b;
        }
    });

    return repeatedEl;
}

console.log(takrorElement([1, 2, 3, 4, 3, 4, 3, 5, 5, 5, 5])); // buyerda 5 qaytaradi sababi, eng kopligi uchun
console.log(takrorElement([100, 200, 300, 200]));    // bunda bosa 200 ni qaytaryabdi

// RUN: npm run train
