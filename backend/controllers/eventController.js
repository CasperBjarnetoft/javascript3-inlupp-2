const router = require('express').Router();
const eventModel = require('../models/events/eventModel')
 
// GET (all products)
router.get('/', eventModel.getEvents)

// GET (one product by id)
router.get('/:id', eventModel.getEventbyId)

// POST (Create a product)
router.post('/', eventModel.createEvent)

// PATCH (uppdate product)
router.patch('/:id', eventModel.updateEvent)

// DELETE (remove product)
router.delete('/:id', eventModel.deleteEvent)


module.exports = router;