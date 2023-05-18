const jsonBasePath = 'server/json';
const fs = require('fs');

class SelectController {
  fetchSelectValues() {
    // Read the json files
    const companyPath = `${jsonBasePath}/Companies.json`;
    const guestPath = `${jsonBasePath}/Guests.json`;
    const templatePath = `${jsonBasePath}/MessageTemplates.json`;
    const messageTemplates = JSON.parse(fs.readFileSync(templatePath));
    const guests = JSON.parse(fs.readFileSync(guestPath));
    const companies = JSON.parse(fs.readFileSync(companyPath));

    // Combine the values and send the response
    const allValues = {
      messageTemplates: [...messageTemplates],
      guests: [...guests],
      companies: [...companies],
    };
    return allValues;
  }
}

module.exports = SelectController;
