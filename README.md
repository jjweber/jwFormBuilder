# jwFormBuilder
NPM Module to build form

Made with TDD.

# Installation

Just use npm:
npm install --save jwFormBuilder


# Usage

```javascript
const jwformbuilder = require("jwformbuilder");
```

### buildForm
Takes an array of fields and options. Returns an HTML form that contains those requested inputs.

```javascript
const fieldJson = [
  {type: 'text', id: 'textInput1', name: 'textInput1', placeholder: 'Enter text here'},
  {type: 'select', id: 'selectTest', name: 'selectTest'},
  {type: 'password', id: 'userPassword', name: 'userPassword', placeholder: 'Enter password'},
  {type: 'email', id: 'userEmail', name: 'userEmail', placeholder: 'Enter email'},
  {type: 'textarea', id: 'textarea', name: 'textarea', placeholder: 'Write a message here'}
];

let formHtml = jwformbuilder.createForm(fieldJson);
// use the html as you desire
console.log('HTML for this form: ', formHtml);
```
