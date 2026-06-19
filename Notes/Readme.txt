# 📚 Notes API Learning Project

A beginner-friendly backend project designed to learn **Node.js**, **Express.js**, and **REST APIs** by building a Notes API one task at a time.

> **Goal:** Complete each task in order. Do not skip steps. Each task introduces a new backend concept required for the next one.

* * *

# 🎯 Learning Outcomes

By the end of this project, you should be able to:

*   Set up a Node.js project
    
*   Understand project structure
    
*   Create an Express server
    
*   Start a backend server
    
*   Understand HTTP Requests and Responses
    
*   Build REST APIs
    
*   Store temporary data
    
*   Test APIs using Apidog/Postman
    

* * *

# 📂 Expected Project Structure

Create a project with the following structure.

    notes-api/
    │
    ├── src/
    │   └── app.js
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── node_modules/
    

* * *

# 🛠️ Task 1 — Initialize the Project

## Objective

Create a new Node.js project.

## Instructions

*   Create a new project folder.
    
*   Open the folder in VS Code.
    
*   Initialize the project using npm.
    
*   Verify that `package.json` has been created.
    

## Learn

*   What is Node.js?
    
*   What is npm?
    
*   Why do we need `package.json`?
    
*   What information does it store?
    

## Verify

*   Project initializes successfully.
    
*   `package.json` exists in the root directory.
    

* * *

# 🛠️ Task 2 — Install Express

## Objective

Add Express to your project.

## Instructions

*   Install Express using npm.
    
*   Observe the newly created files and folders.
    
*   Identify where Express is installed.
    

## Learn

*   What is Express?
    
*   Why do we use Express instead of Node's HTTP module?
    
*   What is a package?
    
*   What is a dependency?
    

## Verify

Make sure the following are created:

*   `node_modules`
    
*   `package-lock.json`
    

* * *

# 🛠️ Task 3 — Understand the Project Structure

## Objective

Organize the project into a professional folder structure.

## Instructions

*   Create a `src` folder.
    
*   Create an application file inside `src`.
    
*   Create a separate server entry file.
    
*   Keep server creation and server startup separate.
    

## Learn

*   Separation of Concerns
    
*   Why production projects avoid writing everything in one file
    
*   Responsibilities of each file
    

## Verify

Your project structure matches the expected layout.

* * *

# 🛠️ Task 4 — Create the Express Application

## Objective

Create an Express application instance.

## Instructions

*   Import Express.
    
*   Create an Express application.
    
*   Export the application for use in another file.
    

## Learn

*   Modules
    
*   `require()`
    
*   `module.exports`
    
*   Express Application Instance
    

## Verify

No errors occur while importing the application.

* * *

# 🛠️ Task 5 — Start the Server

## Objective

Run your backend server.

## Instructions

*   Import the application.
    
*   Start the server.
    
*   Choose a port number.
    
*   Display a message when the server starts.
    

## Learn

*   What is a server?
    
*   What is a port?
    
*   What does `listen()` do?
    
*   What is localhost?
    

## Verify

*   Server starts successfully.
    
*   Browser does not show connection errors.
    

* * *

# 🛠️ Task 6 — Create Your First Route

## Objective

Respond to a client request.

## Instructions

*   Create a root route.
    
*   Return a response to the client.
    
*   Visit the route in the browser.
    

## Learn

*   Routing
    
*   URL
    
*   HTTP Request
    
*   HTTP Response
    

## Verify

Opening the route in the browser returns a successful response.

* * *

# 🛠️ Task 7 — Understand Request & Response

## Objective

Explore the Request and Response objects.

## Instructions

*   Identify the information available inside the Request object.
    
*   Explore how the Response object sends data back to the client.
    
*   Observe how every request generates one response.
    

## Learn

*   Request Object
    
*   Response Object
    
*   Request Lifecycle
    

## Verify

Understand what information is received and what is returned.

* * *

# 🛠️ Task 8 — Prepare Temporary Storage

## Objective

Store notes temporarily while the server is running.

## Instructions

*   Decide how notes should be stored.
    
*   Choose an appropriate JavaScript data structure.
    
*   Prepare storage for multiple notes.
    

## Learn

*   Objects
    
*   Arrays
    
*   Arrays of Objects
    
*   Volatile Memory
    

## Verify

The application is ready to store multiple notes.

* * *

# 🛠️ Task 9 — Configure JSON Parsing

## Objective

Allow the server to accept JSON data.

## Instructions

*   Register the required middleware.
    
*   Understand where middleware should be placed.
    
*   Restart the server after configuration.
    

## Learn

*   Middleware
    
*   JSON Parsing
    
*   Request Body
    

## Verify

The server can successfully receive JSON requests.

* * *

# 🛠️ Task 10 — Build the Create Note API

## Objective

Allow users to create a new note.

## Instructions

*   Create a POST endpoint.
    
*   Accept note data from the client.
    
*   Store the note.
    
*   Return a success response.
    

## Learn

*   POST Method
    
*   Request Body
    
*   HTTP Status Codes
    
*   Creating Resources
    

## Verify

A new note is successfully stored.

* * *

# 🛠️ Task 11 — Build the Fetch Notes API

## Objective

Retrieve all stored notes.

## Instructions

*   Create a GET endpoint.
    
*   Return all stored notes.
    
*   Return a success status.
    

## Learn

*   GET Method
    
*   Sending JSON Responses
    
*   Reading Resources
    

## Verify

Previously stored notes are returned successfully.

* * *

# 🛠️ Task 12 — Test the APIs

## Objective

Verify that your APIs work correctly.

## Instructions

*   Start the server.
    
*   Open Apidog or Postman.
    
*   Send requests to every endpoint.
    
*   Observe the request and response.
    

## Learn

*   API Testing
    
*   HTTP Methods
    
*   Headers
    
*   JSON Body
    
*   Response Status
    

## Verify

*   All APIs execute successfully.
    
*   Responses are returned in JSON format.
    
*   Correct status codes are received.
    

* * *

# ✅ Project Completion Checklist

*    Node.js project created
    
*    Express installed
    
*    Project structure organized
    
*    Express application created
    
*    Server started
    
*    Root route created
    
*    Request and Response understood
    
*    Temporary storage implemented
    
*    JSON middleware configured
    
*    Create Note API completed
    
*    Fetch Notes API completed
    
*    APIs tested using Apidog/Postman
    

* * *

# 🚀 Next Learning Milestones

After completing this project, continue with the following tasks:

*   Delete Note API
    
*   Update Note API
    
*   Route Parameters
    
*   Query Parameters
    
*   Input Validation
    
*   Error Handling
    
*   UUID Generation
    
*   MongoDB Integration
    
*   Mongoose Models
    
*   Authentication (JWT)
    
*   File Uploads
    
*   Deployment
