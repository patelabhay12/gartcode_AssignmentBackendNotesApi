# Notes Backend API 
This is a simple Backend of notes tanking Application built with Node.js and MongoDB. Follow these steps to set up and run the application on your local machine.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js: Download and install Node.js from the official website: https://nodejs.org/
- Git: Download and install Git from: https://git-scm.com/downloads
- MongoDB Atlas: Sign up for a MongoDB Atlas account if you don't have one already: https://www.mongodb.com/cloud/atlas

## Clone the Repository
1. Open your terminal or command prompt.

2. Clone this repository to your local machine using the following command:
   ```bash
   git clone <repository_url>

2.Installing Dependencies:

a.	Navigate to the project directory:
		cd backend
				
b.	In the terminal, run the following command to install the project's dependencies(for both frontend and backend):
    ```bash
		npm install


3.Backend setup
a. Create a .env file in the project directory in the backend.
b. Inside the .env file, add the following lines,
   ```bash
   replacing <your_mongodb_uri> and <your_secret_key> with           
   your actual MongoDB URI and secret key:
	 MONGODB_URI=<your_mongodb_uri>
	 SECRET_KEY=<your_secret_key>

Running the Application:
a.	After the dependencies are installed, start the application with the following command:
		nodemon server

