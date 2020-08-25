const sub = <T>(arr : T[], ...args: T[]) => {
    return arr.filter((value) => args.indexOf(value) === -1);
}

const numbers = [1, 2, 3, 4];
const chars = ['l', 'e', "j", "t", "o"];

console.log(sub(numbers, 2, 3));
console.log(sub(chars, 'j', 'e', "o"));
console.log(sub(numbers));
