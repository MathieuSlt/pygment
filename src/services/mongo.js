const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pygment')
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(() => {
        console.log("Connection failed")
    })


const newSchema = new mangoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model('collection', newSchema);

module.exports = collection;