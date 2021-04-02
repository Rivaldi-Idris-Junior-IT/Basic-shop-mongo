const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')
const UserModel = require('./model/userModel')
const ProductModel = require('./model/productModel')
const OrderModel = require('./model/orderModel')
const connecDB = require('./config//db')
const connectDB = require('./config//db')
const User = require('./model/userModel')
const Product = require('./model/productModel')


dotenv.config()

connectDB()

const importData = async () => {
    try{
        await OrderModel.deleteMany()
        await ProductModel.deleteMany()
        await UserModel.deleteMany()

        const createdUsers = await UserModel.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    }catch(error) {
        console.log(`${error}`.red.inverse) 
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await OrderModel.deleteMany()
        await ProductModel.deleteMany()
        await UserModel.deleteMany()        

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    }catch(error) {
        console.log(`${error}`.red.inverse) 
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
}else {
    importData()
}