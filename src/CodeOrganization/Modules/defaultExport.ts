
// If you don’t have a good reason to use a default export, 
// it is best to avoid them.
export default class Yacht {
    constructor(
        public name: string,
        public port: string,
        public displacement: number) {
    }
}