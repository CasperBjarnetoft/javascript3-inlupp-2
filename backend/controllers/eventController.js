const router = require('express').Router();
const eventModel = require('../models/events/eventModel')
const auth = require('../authentication/auth')
 
// GET (all products)
router.get('/', auth.verifyToken, eventModel.getEvents)

// GET (one product by id)
router.get('/:id', eventModel.getEventbyId)

// POST (Create a product)
router.post('/', auth.verifyToken, eventModel.createEvent)

// PATCH (uppdate product)
router.patch('/:id', eventModel.updateEvent)

// DELETE (remove product)
router.delete('/:id', eventModel.deleteEvent)


module.exports = router;