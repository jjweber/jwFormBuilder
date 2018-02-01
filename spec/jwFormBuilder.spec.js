const jwFormBuilder = require('../dist/jwFormBuilder');

const fieldJson = [
  {type: 'text', id: 'textInput1', name: 'textInput1', placeholder: 'Enter text here'},
  {type: 'select', id: 'selectTest', name: 'selectTest'},
  {type: 'password', id: 'userPassword', name: 'userPassword', placeholder: 'Enter password'},
  {type: 'email', id: 'userEmail', name: 'userEmail', placeholder: 'Enter email'},
  {type: 'textarea', id: 'textarea', name: 'textarea', placeholder: 'Write a message here'}
];

describe('jwFormBuilder', function() {

    describe('createForm', function() {
        it('should be satisfied if this function return a form as a string', function() {
            expect(jwFormBuilder.createForm()).toBeTruthy();
            expect(typeof jwFormBuilder.createForm()).toEqual('string');
            expect(jwFormBuilder.createForm()).toContain('<form>');

            expect(jwFormBuilder.createForm([
              {type: 'text'},
              {type: 'select'}
            ])).toEqual(`<form> <input type="text"/> <select></select> </form>`);

            expect(jwFormBuilder.createForm([
              {type: 'text', id: 'textInput1', name: 'textInput1', placeholder: 'Enter text here'},
              {type: 'select', id: 'selectTest', name: 'selectTest'}
            ])).toEqual(`<form> <input type="text" id="textInput1" name="textInput1" placeholder="Enter text here"/> <select id="selectTest" name="selectTest"></select> </form>`);

        });
    });
});
