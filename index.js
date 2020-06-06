require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')

app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))


morgan.token('body', (req, res) => { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


const generateId = () => {
    const ids = persons.map(person => person.id)
    return Math.max(...ids) + 1
}


// Custom Middleware
const requestLogger = (request, response, next) => {
    console.log('Method: ', request.method)
    console.log('Path: ', request.path)
    console.log('Body: ', request.body)
    console.log('---')
    next()
}
//app.use(requestLogger)

app.get('/info', (request, response) => {
    Contact.countDocuments({}).then((count) => {
        response.send(`<p>Phonebook has info for ${count} people.</p><p>${new Date().toString()}</p>`)
    })
})

app.get('/api/persons', (request, response) => {
    Contact.find({}).then(contacts => {
        response.json(contacts)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Contact.findById(request.params.id)
    .then(contact => {
        response.json(contact)
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
    /* Contact.deleteOne({"_id":request.params.id}).then(contact => {
        response.status(204).end()
    }) */
    Contact.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
    const data = request.body

    if (!data.name) {
        return response.status(400).json({
            error: "a name must be provided"
        })
    } else if (!data.number) {
        return response.status(400).json({
            error: "a number must be provided"
        })
    } else {
        const newContact = Contact({
            "name": data.name,
            "number": data.number
        })

        newContact.save().then(savedContact => {
            response.json(savedContact)
        })
    }
})

// More custom Middleware
// This will be called if no routes above can handle the incoming request
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    if(error.name === 'CastError') {
        return response.status(400).send({error:'malformatted id'})
    }
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})