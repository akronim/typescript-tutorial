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
    "target": "es6",   
    // for structuring and organizing JavaScript code (require(), module.exports ...)                            
    "module": "commonjs",                           
    "outDir": "./dist",                             
    "rootDir": "./src",                             
    "strict": true,
    "moduleResolution": "node",
    // to compile ES6 modules to commonjs modules
    "esModuleInterop": true,                       
  },
  // what not to compile
  "exclude":[
    "./node_modules"
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
tsc --target ES6 ./src/index.ts --outFile ./app.js --watch


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