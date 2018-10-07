[![Build Status](https://travis-ci.org/patrickvaler/es6-express-mongoose-starter.svg?branch=master)](https://travis-ci.org/patrickvaler/es6-express-mongoose-starter) [![Dependency Status](https://david-dm.org/patrickvaler/es6-express-mongoose-starter/status.svg?style=flat)](https://david-dm.org/patrickvaler/es6-express-mongoose-starter) [![GitHub version](https://badge.fury.io/gh/patrickvaler%2Fes6-express-mongoose-starter.svg)](https://badge.fury.io/gh/patrickvaler%2Fes6-express-mongoose-starter)


# bidding-api 
This repo serves as an application test for an API written in JavaScript (ES6), running with Express and Mongoose. It contains a REST API that connects to MongoDB and uses [Mocha]("https://mochajs.org/")/[Chai]("http://chaijs.com/") for the unit tests.

### Requirements
- [Node.js]("https://nodejs.org/") >= 6.x
- [MongoDB]("https://docs.mongodb.com/manual/installation/")

### Clone project & install dependencies
```bash
$ git clone https://github.com/omarjcamo/bidding-api ./my-example-api
$ cd my-example-api

$ yarn install
  OR
$ npm install
```

### Initialize MongoDB with data
> The server tries to connect with `'mongodb://localhost:27017/bidding-api'`, you can overwrite this default setting for each environment in `src/config/config.js`.

Connect to your MongoDB instance and insert:
```bash
$ use bidding-api
$ db.items.insert([{ name: 'Piano Yamaha CK100', startingPrice: 1200 },
                   { name: 'Motorbike Piaggio 125cc', startingPrice: 560  }]);
```

### Run backend
```bash
$ npm run serve
```
Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 3000 by default, you can overwrite this default setting for each environment in `src/config/config.js`

Test if the backend is running by `curl` or a tool like [Postman]("https://www.getpostman.com/"):
```bash
$ curl localhost:3000/api/v1
```
It should return the current version of the package.json file.

> All available routes of this starter package can be found [below](#availableRoutes) or in `src/config/routes.js`.

## Additional information
### <a name="availableRoutes">Available routes</a>

**Get a list of Items**
```
GET localhost:3000/api/v1/items
```

**Add an Item**
```
POST localhost:3000/api/v1/item

Body: {
    name: String,
    startingPrice: Number
}
```

**Update an Item**
```
PUT localhost:3000/api/v1/item/:id

Body: {
    name: String,
    startingPrice: Number
}
```

**Delete an Item**
```
DELETE localhost:3000/api/v1/item/:id
```

### Scripts
**Run for development**
```bash
$ npm run serve
```
Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 3000 by default, this can be overwritten by `API_PORT` constant in `src/config/config.js`. Application will automatically run babel and eslint and restart if a code change was detected.

**Build**
```bash
$ npm run build
```
Runs eslint, transpiles the ES6 code and copies the transpiled code into build folder.

**Test**
```bash
$ npm test
```
Runs eslint and verifies the unit tests from `test/` folder;

### Eslint
 is pre-configured for this starter package. It uses the airbnb configuration package and a minimal set of own rules. Configuration is available in `.eslintrc.js`.

### Unit-Tests
A set of unit tests is available in `test/` folder. [Mocha]("https://mochajs.org/")/[Chai]("http://chaijs.com/") was used to create and run the unit tests.


## License

*The MIT License (MIT)*

Copyright (c) 2017 Patrick Valer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.