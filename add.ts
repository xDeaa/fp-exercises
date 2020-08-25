const add = <T>(arr : T[], ...args: T[]) : Array<T> => {
    return [...arr, ...args]
}

const arrayNumber = [1, 2, 3, 4];
const arrayChar = ['l', 'e', "j", "l", "o"];

console.log(add(arrayNumber, 5, 6, 7, 8));
console.log(add(arrayChar, 'a'));