# Secrets API Client

This is a simple Express.js application that interacts with the [Secrets API](https://secrets-api.appbrewery.com). It allows users to perform CRUD operations using both `async/await` and `.then().catch()` styles with **Axios**.

## Features

- Retrieve secrets using `GET`
- Add new secrets using `POST`
- Update secrets using `PUT` and `PATCH`
- Delete secrets using `DELETE`
- Improved error handling for better debugging
- Uses **EJS** for rendering responses

## Installation

1. Clone the repository:
   - git clone  https://github.com/nadi4567/REST_API_practise.git
   - cd REST_API_practise
2. Install Dependencies
- npm install
  
3. Start the server
- node index.js OR nodemon index.js [Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.

4. Open Browser
- The server will run on http://localhost:3000/.

API Endpoints
- Method	 Endpoint    	     Description
- GET	     /	               Render home page
- POST	   /get-secret    	 Fetch a secret by ID
- POST	   /post-secret	     Add a new secret
- POST	   /put-secret	     Update a secret
- POST	   /patch-secret  	 Partially update
- POST	   /delete-secret	   Remove a secret

Technologies Used
- Node.js with Express.js
- Axios for API calls
- EJS for rendering
- Body-parser for handling form data

****Note **** :
- This is just practise for ET, POST, PUT, PATCH, and DELETE operations. Nothing special!
