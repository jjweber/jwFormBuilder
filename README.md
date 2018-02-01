# jwFormBuilder
NPM Module to build form

Made with TDD.

# Installation

Just use npm:
npm install --save jwFormBuilder


# Usage

```javascript
const jwFormBuilder = require("./src/jwFormBuilder");
```

### buildForm
Takes an array of fields and options. Returns an HTML form that contains those requested inputs.

```javascript
const fieldJson = [
  {type: 'text', name: 'textInput1'},
  {type: 'select', name: 'selectTest'},
  {type: 'password', name: 'userPassword'},
  {type: 'email', name: 'userEmail'}
];

let formHtml = jwFormBuilder.createForm(fieldJson);
// use the html as you desire
console.log('HTML for this form: ', formHtml);
```
