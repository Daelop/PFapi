const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.get('/events',(req, res)=>{ controllers.eventController.getEvents(req, res)});
router.get('/events/:id',(req, res)=>{ controllers.eventController.getEvent(req, res)});
router.post('/events',(req, res)=>{ controllers.eventController.createEvent(req, res)});
router.put('/events/:id',(req, res)=>{ controllers.eventController.updateEvent(req, res)});
router.delete('/events/:id',(req, res)=>{ controllers.eventController.deleteEvent(req, res)});

module.exports = router;