const mongoose = require('mongoose')

// Defining schema
const contactSchema = new mongoose.Schema({
    name: String,
    number: String
})

// Binding the schema to a model
const Contact = mongoose.model('Contact',contactSchema)

// Getting command line arguments
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

// Defining connection URL to the MongoDB Atlas cluster and connection
const url = `mongodb+srv://fullstack:${password}@fullstackcluster-wrvcs.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

if(process.argv.length < 3) {
    console.log('Please enter your MongoDB password and person details to be saved: node mongo.js <password> <name> <phone number>')
    process.exit(1)
} else if(process.argv.length === 3) {
    Contact.find({}).then(contacts => {
        console.log('phonebook')
        contacts.forEach(contact => {
            console.log(`${contact.name} ${contact.number}`)
        })
        mongoose.connection.close()
    })
} else {
    const contact = new Contact({
        name: name,
        number: number
    })

    contact.save().then(() => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}
