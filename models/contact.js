const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

// Mongoose configuration options
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    number: {
        type: String,
        required: true
    }
})

contactSchema.plugin(uniqueValidator)
const Contact = mongoose.model('Contact', contactSchema)

contactSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Contact',contactSchema)