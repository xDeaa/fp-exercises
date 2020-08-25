const compose = <T, U, V> (f: (T) => U, g: (U) => V) => (x: T) => f(g(x))

const trim = (x: string) : string => {
    return x.trim()
}

const upper = (x: string): string=>  {
    return x.toUpperCase()
}

const trimUpper = compose(trim, upper);

console.log(trimUpper("  Andrea Serrano   "));
