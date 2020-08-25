const arraySum = <T>(arr: Array<T>): number =>  {
    let sum: number = 0
    const contentArray = arr.flat(arr.length)

    contentArray.map(item => {
        if (typeof item === "number") {
            sum += item
        }
    })

    return sum
}

const arrayDepth = <T>(arr: Array<T>) : number => {
    let result = 0

    if(Array.isArray(arr)) {
        result += 1 
        arr.map( item => {
            if (Array.isArray(item)) {
                 result += arrayDepth(item)
            }
        })

        return result 
    }
    
    return 0
}

const biggerValue = <T>(arr: Array<T>): number =>  {
    const contentArray = arr.flat(arr.length)
    let bigger: number = contentArray[0] as number

    contentArray.map(item => {
        if (typeof item === "number") {
            if(item > bigger) {
                bigger = item
            }
        }
    })

    return bigger
}

const smallerValue = <T>(arr: Array<T>): number =>  {
    const contentArray = arr.flat(arr.length)
    let smaller = contentArray[0] as number

    contentArray.map(item => {
        if (typeof item === "number") {
            if(item < smaller) {
                smaller = item
            }
        }
    })

    return smaller
}

const array = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]
console.log("---- Sum ----");
console.log(arraySum(array));
console.log("---- Deep ----");
console.log(arrayDepth(array));
console.log("---- Bigger ----");
console.log(biggerValue(array));
console.log("---- Smaller ----");
console.log(smallerValue(array));


