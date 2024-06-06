function getPositiveNumbers(a: number[]): string {
    const result: number[] = [];
    for(const i of a) {
        if(i > 0) {
            result.push(i);
        }
    }
    return result.join("")
}

console.log(getPositiveNumbers([1, 9, 5, -2, -8]));  // buyerda 195 raqamlarini qaytarib beryabdi. 

// RUN: npm run train
