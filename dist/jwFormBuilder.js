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

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;
        if (field.placeholder) fieldHtml += ` placeholder="${field.placeholder}"`;

        fieldHtml += '/>';

        break;
      }
    case "password":
      {

        fieldHtml = ` <input type="password"`;

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;
        if (field.placeholder) fieldHtml += ` placeholder="${field.placeholder}"`;

        fieldHtml += '/>';

        break;
      }
    case "email":
      {

        fieldHtml = ` <input class="form-control" type="email"`;

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;
        if (field.placeholder) fieldHtml += ` placeholder="${field.placeholder}"`;

        fieldHtml += '/>';

        break;
      }
    case "textarea":
      {

        fieldHtml = ` <textarea class="form-control" `;

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;
        if (field.rows) fieldHtml += ` rows="${field.rows}"`;
        if (field.placeholder) fieldHtml += ` placeholder="${field.placeholder}"`;

        fieldHtml += '></textarea>';

        break;
      }
    case "select":
      {

        fieldHtml = ` <select`;

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;
        if (field.placeholder) fieldHtml += ` placeholder="${field.placeholder}"`;

        fieldHtml += `></select> `;

        break;
      }
    case "checkbox":
      {

        fieldHtml = ` <input type="checkbox" class="form-check-input"`;

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;
        if (field.rows) fieldHtml += ` rows="${field.rows}"`;

        fieldHtml += '/>';

        break;
      }
    case "buttonSubmit":
      {

        fieldHtml = ` <button type="submit" class="btn btn-primary" `;

        if (field.id) fieldHtml += ` id="${field.id}"`;
        if (field.name) fieldHtml += ` name="${field.name}"`;

        fieldHtml += `>Submit</button> `;

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