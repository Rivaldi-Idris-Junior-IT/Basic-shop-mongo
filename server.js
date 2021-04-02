const express = require('express')
const cors = require('cors')
const colors = require('colors')
const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) =>  {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes )

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))