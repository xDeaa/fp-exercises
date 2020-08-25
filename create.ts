const createArray = <T>(...args : T[]): Array<T> => {
    return new Array(...args)
}

console.log(createArray(2,5,4, 10));
console.log(createArray("h", "k", "l"));

