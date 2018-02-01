"use strict";

function createForm(formFields = []) {
   let form = "<form>";

   formFields.forEach((field, index) => {
      form += getHtmlForField(field);
   });

   form += "</form>";

   return form;
}

function getHtmlForField(field) {
   let fieldHtml = "";

   switch (field.type) {
      case "text":
         {

            fieldHtml = ` <input type="text"`;

            if (field.name) fieldHtml += ` name="${field.name}"`;

            fieldHtml += '/>';

            break;
         }
      case "select":
         {

            fieldHtml = ` <select`;

            if (field.name) fieldHtml += ` name="${field.name}"`;

            fieldHtml += `></select> `;

            break;
         }
      default:
         {
            fieldHtml = ` `;
            break;
         }
   }

   return fieldHtml;
}

module.exports = {
   createForm: createForm
};