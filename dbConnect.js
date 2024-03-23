var mongoose = require('mongoose')
var config = require('./config')

var connectDB = async function() {
    try {
        await mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPass}@${config.mongoUrl}/${config.mongoDb}?retryWrites=true`,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message)
    }
}

module.exports = connectDB