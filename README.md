# Message Processor

## Table Of Contents

- [About the Application](#about-the-application)
- [Technology Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Using The Application](#using-the-application)
- [Future Additions](#future-additions)
- [Authors](#authors)

## About The Application

This application allows the user to select various templates, guests, and companies to generate a formatted message from the selected variables.

## Tech Stack

This application is built with the following technologies:

- [Express](https://expressjs.com/)
- [Javascript](https://www.javascript.com/)
- [Node](https://nodejs.org/en)
- [React](https://react.dev/)
- [HTML](https://www.w3schools.com/html/)

### Prerequisites

Before running this application locally, please make sure you have the following installed on your machine:

- Node
- NPM

To test this you can run the following commands:

- `node -v`
- `npm -v`

### Installation

- Clone the repository by running `git clone https://github.com/bradytrudeau/automated-message-system`
- Open the repository in your editor of choice and run `npm install` from the root directory
- `node server/index.js` from the root directory
- `npm start` from the root directory
- Note: The `npm run client` command will automatically open up a new browser tab for you!

## Using the Application

Upon render of the app, you will be able to select a guest by name, company by name, and message template by name. After doing so, click the "Submit" button and you will be routed to a view that will display the movies that generated message. To enter a new message, click on the "Try Again" button located at the bottom of the page.

## Future Additions

- DB to hold all of the current json files
- Create, Update, and Delete functionality for adding guests, companies, and message templates
- Cron job to fire off messages based on check in/check out times

## Authors

- [Brady Trudeau](bradytrudeau@gmail.com)
