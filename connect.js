const mongoose = require('mongoose')
async function connectMongoDB(url){
    retrun mongoose.connect(url)
}