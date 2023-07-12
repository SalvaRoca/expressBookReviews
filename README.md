# Node.js Book Review Online Application

A simple back-end application, based on Node.js and Express.js, that stores, retrieves and manages book ratings and reviews, including the following features and capabilities to allow users to:

* Retrieve a list of all books available in the bookshop
* Search for specific books and retrieve their details based on the book’s ISBN code, author names and titles
* Retrieve reviews/comments for specified books
* Register as a new user of the application
* Login to the application
* Add a new review for a book (logged in users only)
* Modify a book review (logged in users can modify only their own reviews)
* Delete a book review (logged in users can delete only their own reviews)
* (Multiple users) Access the application at the same time to view and manage different book reviews simultaneously

These functionalities have been provided by implementing the corresponding the CRUD capabilities listed above as HTTP methods in the Express server, and can be tested using Postman. In addition, Session and JWT authentication have been implemented to allow only logged in users to perform certain operations.

Final project for [Developing Back-End Apps with Node.js and Express](https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express) course, part of [IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer) Specialization.
