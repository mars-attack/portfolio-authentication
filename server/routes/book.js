let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

// GET Route for book

router.get('/', (req, res, next)=>{
  Book.find((err, BookList) => {
    if(err) 
    {
      return console.error(err);
    } 
    else 
    {
      //console.log(BookList);
      res.render('book', {title: "Book List", BookList: BookList});
    }
  });
});

module.exports = router;