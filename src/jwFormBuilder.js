"use strict";

function createForm(formFields = []) {
  let form = "<form>";

  //iterate through all form fields in JSON and create accompanying HTML
  formFields.forEach((field, index) => {
    form += getHtmlForField(field);
  });

  form += "</form>";

  return form;
}


function getHtmlForField(field) {
  let fieldHtml = "";

  
  //generate unique HTML for each input type
  switch(field.type) {
     case "text": {

        fieldHtml = ' <input type="text"';

        if (field.name) fieldHtml += ' name="${field.name}"';

        fieldHtml += '/>';

        break;
     }
     case "select": {

        fieldHtml = ' <select';

        if (field.name) fieldHtml += ' name="${field.name}"';

        fieldHtml += '></select> ';

        break;
     }
     default: {
        fieldHtml = ' ';
        break;
     }
  }

  return fieldHtml;
}


module.exports = {
  createForm : createForm
};
