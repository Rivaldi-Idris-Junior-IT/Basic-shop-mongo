const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/"+process.env.MONGO_COMPASS_DBNAME+"", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection}`.green.bold)
    }catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB;