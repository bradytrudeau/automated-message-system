const moment = require('moment');
const MessageTemplate = require('../models/MessageTemplate');
const Guest = require('../models/Guest');
const Company = require('../models/Company');
const jsonBasePath = 'src/json';
const fs = require('fs');

class MessageController {
  loadMessageTemplates(templateId) {
    const templatePath = `${jsonBasePath}/MessageTemplates.json`;
    const templates = fs.readFileSync(templatePath);
    const parsedTemplates = JSON.parse(templates);
    const selectedTemplate = parsedTemplates.find((template) => template.id === templateId);
    return new MessageTemplate(selectedTemplate.message);
  }

  loadGuests(guestId) {
    const guestPath = `${jsonBasePath}/Guests.json`;
    const guests = fs.readFileSync(guestPath);
    const parsedGuests = JSON.parse(guests);
    const selectedGuest = parsedGuests.find((guest) => guest.id === guestId);
    return new Guest(selectedGuest.firstName, selectedGuest.lastName, selectedGuest.reservation.roomNumber);
  }

  loadCompanies(companyId) {
    const companyPath = `${jsonBasePath}/Companies.json`;
    const companies = fs.readFileSync(companyPath);
    const parsedCompanies = JSON.parse(companies);
    const selectedCompany = parsedCompanies.find((company) => company.id === companyId);
    return new Company(selectedCompany.company);
  }

  getGreeting() {
    // Calculate greeting by the current time
    const hour = moment().hour();
    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  generateFinalMessage(template, guest, company) {
    let message = template.message;
    // Replace placeholder variables in string with correct values
    message = message.replace('{{firstName}}', guest.firstName);
    message = message.replace('{{lastName}}', guest.lastName);
    message = message.replace('{{roomNumber}}', guest.roomNumber);
    message = message.replace('{{companyName}}', company.name);
    message = message.replace('{{greeting}}', this.getGreeting());

    return message;
  }

  processMessages({ templateId, guestId, companyId }) {
    // Fetch template by id
    const selectedTemplate = this.loadMessageTemplates(templateId);
    // Fetch company by id
    const selectedCompany = this.loadCompanies(companyId);
    // Fetch guest by id
    const selectedGuest = this.loadGuests(guestId);
    // Generate the final message
    const finalMessage = this.generateFinalMessage(
      { ...selectedTemplate },
      { ...selectedGuest },
      { ...selectedCompany }
    );
    return finalMessage;
  }
}

module.exports = MessageController;
