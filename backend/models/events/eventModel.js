const Event = require('./eventSchema')

// GET (all models)
exports.getEvents = async (req, res) => {

    try {
        const data = await Event.find({ user: req.userData.id })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Somthing went wrong when fetching the Events'
        })
    }

}


// GET (one model by id)
exports.getEventbyId= (req, res) => {

    Event.exists({ _id: req.params.id }, (err, event) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(!event) {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Oops, that event does not exist',
            })
        }

        Event.findById(req.params.id)
          .then(data => res.status(200).json(data))
          .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message || 'Internal server error'
            })
        })       
    })
}

// POST (Create a model)
exports.createEvent = (req, res) => {
    
    Event.create({
            user: req.userData.id,
            title:          req.body.title,       
            description:    req.body.description,
            date:           new Date(req.body.date).toLocaleString()      
        })
        .then(data => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'event created successfully',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to add event',
                err
            })
        })
}

// PATCH (uppdate model)
exports.updateEvent = (req, res) => {

    Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(!result) {
            res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Oops, that event does not exist',
            })
        }

        Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(data => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'event uppdated successfully',
                    data
                })
            })
            .catch(err => {
                if(err.code === 10000) {
                    return res.status(400).jso({
                        statusCode: 400,
                        status: false,
                        message: 'A event with that name already exist'
                    })
                }

                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to update event'
                })
            })
    })
}

// DELETE (remove model)
exports.deleteEvent = (req, res) => {

    Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request',
            })
        }

        if(!result) {
            res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Oops, that event does not exist',
            })
        }

        Model.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'event deleted',
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete event',
                    err
                })
            })
    })
}