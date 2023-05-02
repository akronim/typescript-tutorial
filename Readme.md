### install typescript
npm install -g typescript

### check version
tsc --version

### mkdir typescript-sandobox and cd into it

### create a tsconfig.json file in the project root directory
tsc --init

### create a package.json file in the project root directory
npm init -y

### tsconfig.json
```json
{
  "compilerOptions": {      
    // to tell the Typescript compiler to transpile our Typescript code into es6 JavaScript                  
    "target": "es2016",   
    // for structuring and organizing JavaScript code (require(), module.exports ...)                            
    "module": "commonjs",                           
    "outDir": "./dist",                             
    "rootDir": "./src",                             
    "strict": true,
    "moduleResolution": "node",
    // to compile ES6 modules to commonjs modules
    "esModuleInterop": true, 
    "resolveJsonModule": true, /* in case you are importing JSON files */
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "skipLibCheck": true                      
  },
  // what not to compile
  "exclude":[
    "./node_modules",
    "./_tests"
  ]
}
```

### mkdir src

### touch src/index.ts
```ts
function sum (num1:number, num2:number){
    return num1 + num2;
}
console.log(sum(8,4))
```

### install typescript compiler
npm install -D typescript

### running - way one
#### manually build ts into js - build everything inside src
tsc

#### run
node dist/index.js

### running - way two
#### manually build single file plus watch mode
tsc --target es2016 ./src/index.ts --outFile ./app.js --watch
tsc --target es2016 ./src/index.ts --outFile ./app.js --module amd --watch

### running - way three
#### install ts-node
npm install -D ts-node

#### package.json - add:
```json
"scripts": {
   "start": "ts-node ./src/index.ts"
}
```

#### run
npm start

### running - way four
#### install Nodemon
npm install -D nodemon

#### package.json - add:
```json
"scripts": {
   "start": "ts-node ./src/index.ts",
   "dev": "nodemon ./src/index.ts"
}
```

#### run
npm run dev


### mkdir ./src/Functions

### touch ./src/Functions/restParameters.ts
```ts
namespace RestParameters {
  function getAverage(...arr: number[]): string {
    let total = arr.reduce(function (a, b) { return a + b; }, 0);
    return "The average is " + total / arr.length;
  }

  const result = getAverage(2, 4, 6, 8, 10);
  console.log(result);
}
```

### src/index.ts - import another file
```ts
import "./Functions/restParameters";
```

### testing
npm i -D jest @types/jest ts-jest

### touch jest.config.js
```js
module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testRegex: './_tests/.*\\.(test|spec)?\\.(js|ts)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['<rootDir>/_tests'],
};
```

### mkdir _tests
### touch ./_tests/sandbox.spec.ts

### package.json -> scripts
"test": "jest"

### npm test

### https://www.youtube.com/watch?v=Z6kt1N3Lx1c
