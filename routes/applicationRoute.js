const controllers = require('../controllers');
const express = require('express');
const router = express.Router();

router.post('/create', controllers.application.createApplication);
router.get('/event/:id', controllers.application.getApplicationsByEventId);
router.get('/user/:id', controllers.application.getApplicationsByUserId);
router.delete('/delete/:id', controllers.application.deleteApplication);
module.exports = router;