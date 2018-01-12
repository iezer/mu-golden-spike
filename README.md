# MU Golden Spike

Ember.js module unification golden spike of module-unification app with module-unification addon.
Addon is https://github.com/stonecircle/mu-first-post.

![screen shot 2018-01-12 at 11 53 39 am](https://user-images.githubusercontent.com/87991/34886115-0f61e326-f790-11e7-8cc8-169eaff803c3.png)

## Prerequisites

**Important prerequisite**

You need to locally build a custom version of ember.js and npm link.
  * Checkout this branch locally `https://github.com/iezer/ember.js/tree/isaac/namespaced-mu-components`
  * Inside that repo, run `npm run build` and `npm link`
  * Inside this `mu-golden-spike` repo, run `npm link ember-source`

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd golden-spike`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
