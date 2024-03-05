const controllers = require('../controllers');
const express = require('express');
const router = express.Router();

router.post('/create', controllers.eventUser.createEventUser);
router.get('/event/:id', controllers.eventUser.getEventUsersByEventId);
router.get('/user/:id', controllers.eventUser.getEventUsersByUserId);
router.get('/:id', controllers.eventUser.getEventUserById);
router.delete('/:id', controllers.eventUser.deleteEventUser);
router.put('/:id', controllers.eventUser.updateEventUser);
module.exports = router;