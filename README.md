# Contact App

**Repository for my Contact Management Application**

Visit: [Contact App](https://contacts-manager-apps.netlify.app/)  
Backend: [JSON Server on Render](https://contact-app-fuwf.onrender.com/)

---

## Overview

Contact App is a lightweight contact manager that allows users to create, edit, and delete contact entries using a frontend that calls data from a simple backend.

- **Frontend** – Powered by React, it provides a clean and responsive UI to manage a list of contacts and allow users to add, update and remove contacts. The site uses some placeholder UI / web design powered by Semantic UI.
- **Backend** – Built with Node.js and JSON Server, which offers a full fake REST API using a simple `db.json` file to store and retrieve contact data. The frontend communicates with the backend via Axios.

The app is hosted using **Netlify** (frontend) and **Render** (backend).

<!-- --- -->

<!-- ![Contact App Promo](/public/images/) -->

<!-- --- -->

## Features

- **Add Contacts** – Input a contact name and email to add a new contact.
- **Edit Contacts** – Update existing contact information.
- **Delete Contacts** – Remove contacts with confirmation modals.
- **Semantic UI Design** – Clean, minimalistic UI using Semantic UI framework.
- **API Integration** – Axios handles communication between frontend and backend.

---

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/contact-app.git
   cd contact-app

2. **Frontend & Backend Install Dependencies**
    
    ```bash
    cd frontend
    npm install

    ../backend
    npm install

3. **Run the application**
    
    Start the backend (JSON server), followed by frontend
    ```bash
    cd backend
    npm start

    cd ../frontend
    npm start

## Built With

React – Frontend library for building UI

Semantic UI – Component styling and layout

Axios – API requests from frontend to backend

JSON Server – Fake REST API for prototyping with db.json

Node.js – Runtime used to run JSON Server


## Author
***Jake Rose***

Website: [https://jake-rose.com/](https://jake-rose.com/)