require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: String,
    number: String
})

contactSchema.set("toJSON", {
    transform: (document, returnedContact) => {
        returnedContact.id = returnedContact._id.toString()
        delete returnedContact._id
        delete returnedContact.__v
    }
})

const Contact = mongoose.model('Contact', contactSchema)

app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('body', (req, res) => { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

/* let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323524",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Juha Tauriainen",
        "number": "040-987567",
        "id": 5
    },
    {
        "name": "Tarja Turunen",
        "number": "040-5489468",
        "id": 6
    }
] */

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
        mongoose.connection.close()
    })
})

app.get('/api/persons', (request, response) => {
    Contact.find({}).then(contacts => {
        response.json(contacts)
        mongoose.connection.close()
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person !== undefined) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const data = request.body
    const duplicates = persons.filter(person => person.name === data.name)

    if (!data.name) {
        return response.status(400).json({
            error: "a name must be provided"
        })
    } else if (!data.number) {
        return response.status(400).json({
            error: "a number must be provided"
        })
    } else if (Array.isArray(duplicates) && duplicates.length) {
        return response.status(400).json({
            error: "name must be unique"
        })
    } else {
        const newPerson = {
            "name": data.name,
            "number": data.number,
            "id": Math.floor(Math.random() * Math.floor(60))
        }

        persons = persons.concat(newPerson)
        response.json(newPerson)
    }
})

// More custom Middleware
// This will be called if no routes above can handle the incoming request
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})