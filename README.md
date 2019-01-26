# Automate This!

Welcome to a ( hopefully ) gentle introduction to test-driven-development, continuous integration, and continusous delivery.

## Goals
We'll be setting up CI to lint, test, and deploy an application to Heroku.

## Requirements
node 10.15.0 or above.

## Technologies

### Testing
- [eslint](https://eslint.org)
- [mocha](https://mochajs.org)
- [chai](https;//www.chaijs.com)
- [chai-spies](https://github.com/chaijs/chai-spies)

### CI/CD
- [travis-ci](https://travis-ci.org)

### Deployment
- [heroku](https://www.heroku.com/)

## Sign Up and Install
If you haven't yet:
- create your [github](https://github.com) account
- Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Sign up for [Heroku](https://www.heroku.com/)
- Install the [Heroku CLI Tools](https://devcenter.heroku.com/articles/heroku-cli)
- Make sure you have `ruby` version >= 1.9.3 by running `ruby -v`
  - Check the [ruby docs](https://www.ruby-lang.org/en/documentation/installation/) to install/upgrade ruby
- Sign up for [Travis CI](https://travis-ci.org/) with GitHub
- Install the [Travis CLI Tools](https://github.com/travis-ci/travis.rb)

## DON'T FORK THIS REPO!!!!
Since Travis depends on the repo and owner information, you won't be able to set stuff up if you fork the repo. Instead:
- clone the repo
- fix your remotes with
  - `git remote rm origin`
  - `git remote add origin https://github.com/<YOUR USERNAME>/automate-this.git`
- Go to your GitHub account
- Create a new repository called `automate-this`
Then you should be good to go!

# What To Build?
A calculator app! This way, we're not focused on more than getting CI set up, and testing all the things!
<img src="https://jlottosen.files.wordpress.com/2017/07/1t5hik.jpg" />

The repo uses [express generator](https://expressjs.com/en/starter/generator.html) to create a quick express server that
uses [handlebars](http://handlebarsjs.com/) for templating. We'll write some functions to create the calculator
functionality, and a simple UI that gets served to the templating engine. We will also, of course, write tests as we go.

# Helpful Links As You Go
- [chai assertions](https://www.chaijs.com/api/assert/)
- [mocha docs](https://mochajs.org/#getting-started)
- [travis-ci docs](https://docs.travis-ci.com/user/for-beginners/)
