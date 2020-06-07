const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Mongoose configuration options
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(v) {
                return v.length > 3
            },
            message: props => `${props.value} is shorter than the minimum allowed length (3).`
        }
    },
    number: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 8
            },
            message: props => `${props.value} is shorter than the minimum allowed length (8).`
        }
    }
})

contactSchema.plugin(uniqueValidator)
// eslint-disable-next-line no-unused-vars
const Contact = mongoose.model('Contact', contactSchema)

contactSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Contact',contactSchema)