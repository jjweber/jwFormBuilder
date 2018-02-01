const jwFormBuilder = require('../dist/jwFormBuilder');

const fieldJson = [
  {type: 'text', name: 'textInput1'},
  {type: 'select', name: 'selectTest'},
  {type: 'password', name: 'userPassword'},
  {type: 'email', name: 'userEmail'}
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
              {type: 'text', name: 'textInput1'},
              {type: 'select', name: 'selectTest'}
            ])).toEqual(`<form> <input type="text" name="textInput1"/> <select name="selectTest"></select> </form>`);

        });
    });
});
