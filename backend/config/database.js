const mongoose = require('mongoose')

const dbConnect = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection established!");
}

module.exports = dbConnect;