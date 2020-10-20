let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact us page. */
router.get('/contact', indexController.displayContactPage);



/* GET Route for displaying the login page */
router.get('/login', indexController.displayLoginPage);

/* GET Route for processing the login page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the register page */
router.get('/register', indexController.displayRegisterPage);

/* GET Route for processing the register page*/
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform user logout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
