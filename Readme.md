### install typescript
npm install -g typescript

### check version
tsc --version

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

### install ts-node
npm install -D ts-node

### package.json - add:
```json
"scripts": {
   "start": "ts-node ./src/index.ts"
}
```


### manually
### build Typescript into JavaScript - build everything inside src
tsc

### run
node dist/index.js

// tsc --target ES6 ./src/Classes/propsAndMethods.ts --outFile ./app.js --watch