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

// Cookie husisyatlari:

// 1. request join
// 2. self destroy

//📌📌📌📌📌📌📌📌📌📌📌

// Validations:

// 1. Frontend validation
// 2. Backend validation
// 3. Database validation

//📌📌📌📌📌📌📌📌📌📌📌

// CSS Animation Sources:

// 1. AnimeJs.com
// 2. PixiJs.com
// 3. SpriteJs.com
// 4. ThreeJs.com

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

// *** H2 - TASK *** 🌻

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

// I-TASK: 🌻

// function takrorElement(array: number[]): number | null {
//     const count = new Map<number, number>();

//     for (let i = 0; i < array.length; i++) {
//         const num = array[i];
//         count.set(num, (count.get(num) || 0) + 1);
//     }

//     let repeatedEl: number | null = null;
//     let maxCount = 0;

//     count.forEach((a, b) => {
//         if (a > maxCount) {
//             maxCount = a;
//             repeatedEl = b;
//         }
//     });

//     return repeatedEl;
// }

// console.log(takrorElement([1, 2, 3, 4, 3, 4, 3, 5, 5, 5, 5])); // buyerda 5 qaytaradi sababi, eng kopligi uchun
// console.log(takrorElement([100, 200, 300, 200]));    // bunda bosa 200 ni qaytaryabdi

// RUN: npm run train

// J - TASK 🌻

// function longestWord(word: string): string {
//     return word.split(' ').sort((a, b) => b.length - a.length)[0];
// }

// // Example usage:
// console.log(longestWord("Life is good with so much power"));


// K - TASK 🌻

// function unlilar(input: string): number {
//     const unliTovush = "aeiouAEIOU";

//     return input.split('').reduce((count, char) => {
//         if (unliTovush.includes(char)) {
//             count++;
//         }
//         return count;
//     }, 0);
// }

// // Test the function
// console.log(unlilar("booking")); // 3 ta unli
// console.log(unlilar("fullstackDeveloper")); // 6 ta unli

// L - TASK 🌻

// function reverseSentence(input: string): string {
//     return input
//         .split(' ')
//         .map(word => word.split('').reverse().join(''))
//         .join(' ');
// }

// console.log(reverseSentence("reverse train.js file"));

// M - TASK 🌻

// function kvadrat(numbers: number[]) {
//     return numbers.map(num => ({ number: num, square: num * num }));
// }

// // Example usage:
// const result = kvadrat([4, 5, 6]);
// console.log(result);     // 16, 25, 36 natijamiz

// N - TASK 🌻

// function change(string: string) {

//     const result = string.split("").reverse().join("")

//     const palindromeCheck = string == result;

//     return palindromeCheck;

// }

// console.log(change("book")); // false natija
// console.log(change("Ryan"));    // false buyam
// console.log(change("111"));  // true buyerda

// O - TASK

// function sum(arr: any[]): number {
//     let total = 0;
//     for (const i of arr) {
//         if (typeof i === 'number') {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(sum([5, "50", { son: 10 }, true, 22])); // buyerda 27 qaytyabdi..

// P - TASK

// function objArr(obj: { [key: string]: any }): [string, any][] {
//     const result: [string, any][] = [];
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result.push([key, obj[key]]);
//         }
//     }
//     return result;
// }

// const result = objArr({ a: 10, b: 20 });
// console.log(result); 

// Q - TASK

// function hasProperty(obj: object, prop: string): boolean {
//     return prop in obj;
// }

// console.log(hasProperty({ brand: "Sony", model: "Xperia" }, "brand")); // returns true
// console.log(hasProperty({ brand: "Sony", model: "Xperia" }, "price"));  // returns false

// R - TASK

function calculate(exp: string): number {
    const numbers = exp.match(/\d+/g);

    if (!numbers) {
        return NaN;
    }

    const numArray = numbers.map(Number);

    const sum = numArray.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(calculate("1+3")); // 4
console.log(calculate("5+15")); // 20
console.log(calculate("invalid")); // NaN
