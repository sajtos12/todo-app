## Description

Simple Todo app for hoppy purposes with NestJS framework and mongodb

## Installation

```bash
$ npm install

$ docker-compose -f docker.yml up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Config

MONGODB_URI=mongodb://username:password@localhost:27017/todo?authSource=admin

## License

Nest is [MIT licensed](LICENSE).
