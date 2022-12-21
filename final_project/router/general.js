const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 6: Register a new user
public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (username && password) {
      if (!isValid(username)) { 
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registered, you can now login."});
      } else {
        return res.status(404).json({message: "User already exists, please try again with a different username."});    
      }
    } 
    return res.status(404).json({message: "A error ocurred when trying to register user, please try again."});
  });

// Task 1: Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify(books,null,4));
});

// Task 2: Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn])
 });
  
// Task 3: Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    let book = [];
    Object.keys(books).forEach(x => {
        if(books[x].author.toLowerCase() == author.toLowerCase()){
            book.push(books[x])
        }
    });
    res.send(book)
});

// Task 4: Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    let book = [];
    Object.keys(books).forEach(x => {
        if(books[x].title.toLowerCase() == title.toLowerCase()){
            book.push(books[x])
        }
    });
    res.send(book)
});

//  Task 5: Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn].reviews)
});

module.exports.general = public_users;
