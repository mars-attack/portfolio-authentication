let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Contact Model
let BusinessContact = require('../models/business-contact');

let businessContactController = require('../controllers/business-contacts');

// GET Route for 

router.get('/', businessContactController.displayBusinessContactList);

// GET Route for displaying the Add Page - Create operation 
router.get('/add', businessContactController.displayAddPage);

// GET Route for processing the Add Page - Create operation 
router.post('/add', businessContactController.processAddPage);


/* GET Route for displaying the Edit Page - UPDATE operation */
router.get('/update/:id', businessContactController.displayUpdatePage);

/* GET Route for processing the Edit Page - UPDATE operation */
router.post('/update/:id', businessContactController.processUpdatePage);

// GET Route to perform the Deletion - DELETE operation
router.get('/delete/:id', businessContactController.processDelete);

module.exports = router;