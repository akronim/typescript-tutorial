export class Ferry {
    constructor(
        public name: string,
        public port: string,
        public displacement: number) {
    }
}


// When consuming this style of module, you should use the import/require 
// style of import

// import Ferry = require('./exportsObject');
// const ferry = new Ferry('Dartmouth Ferry', 'Dartmouth', 580)



