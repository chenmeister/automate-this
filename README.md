# Automate This!

Welcome to a ( hopefully ) gentle introduction to test-driven-development, continuous integration, and continusous delivery.

## Goals
We'll be setting up CI to lint, test, and deploy an application to Heroku.

## Requirements
node 10.15.0 or above.

## Technologies

Testing
-------
- [eslint](https://eslint.org)
- [mocha](https://mochajs.org)
- [chai](https;//www.chaijs.com)
- [chai-spies](https://github.com/chaijs/chai-spies)

CI/CD
-----
- [travis-ci](https://travis-ci.org)

Deployment
----------
- [heroku](https://www.heroku.com/)

## Helpful Links As You Go
- [chai assertions](https://www.chaijs.com/api/assert/)
- [mocha docs](https://mochajs.org/#getting-started)
- [travis-ci docs](https://docs.travis-ci.com/user/for-beginners/)

# What To Build?
A calculator app! This way, we're not focused on more than getting CI set up, and testing all the things!
<img src="https://jlottosen.files.wordpress.com/2017/07/1t5hik.jpg" />

The repo uses [express generator](https://expressjs.com/en/starter/generator.html) to create a quick express server that
uses [handlebars](http://handlebarsjs.com/) for templating. We'll write some functions to create the calculator
functionality, and a simple UI that gets served to the templating engine. We will also, of course, write tests as we go.
