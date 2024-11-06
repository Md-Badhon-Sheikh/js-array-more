let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

let reverseNumber = [];

for(const num of numbers){
    // reverseNumber = num;
    reverseNumber.unshift(num);
}
// console.log(reverseNumber);

const revNumber = [];
for(let i = numbers.length-1; i>= 0; i--){
    const num = numbers[i];
    console.log(num);
    revNumber.push(num);
}
console.log(revNumber);