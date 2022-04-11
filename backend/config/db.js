const mongoose = require('mongoose')
const colors = require('colors/safe');

colors.enable()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        
        console.log(colors.bgWhite.black.underline(`MongoDB Connected: ${conn.connection.host}`))


    } catch (error) {
        console.log(error)
        process.exit(1) 
    }
}

module.exports = connectDB