# Angular Project

This project was generated with Angular version 6.0.8 using NodeJS version 10.7.0. The purpose of this project was to design and implement a web application for maintaining contact information. Angular was chosen because to develop a single web application that is very user-friendly.

This project also uses services injected into the components to share information among the classes.

This project configures an in-memory web API to enable HTTP services to simulate a RESTful API to display observables. The web application makes requests to and receive responses from the HttpClient and applies them to an in-memory data store.

# Features

This web application is able to display a list of contacts simulated from a data server. Each contacts' information can be edited and their status can be changes from Active to Inactive or vice versa. Additional contacts can also be added onto the current list of contacts. Contact profiles can also be deleted from the server.

Each contact contains the information: ID, first name, last name, email, phone number, status.

# Organization

This project consists of multiple components rendered in a root container. Each component is created in their own respective folders. Classes used to simulate a data server, contact list, message service were built in the 'app' root directory.

# Installation

This web application requires NodeJS and was built with NodeJS version 10.7.0. If you do not have NodeJS installed, you can install it from https://nodejs.org/en/.

Clone the repository from https://github.com/jvan0314/EvolentHealth_Project.git using 'git clone https://github.com/jvan0314/EvolentHealth_Project.git' or you can download the zip folder from GitHub and extract the zip folder.

Open a command line interface directed to the root location and run 'npm install' to build the node modules and install all the dependencies of the project.

Run 'npm start' in the command line interface to build the application modules and have the Angular Live Development Server listening on localhost:4200, open your browser on http://localhost:4200/.
