export const higherOrderFunctionDemo = (func: (...args: any[]) => void):
    (...args: any[]) => void => {
    const a = "foobar"
    return function (this: any, ...args: any[]) {
        console.log(a)
        func.apply(this, args)
    };
}