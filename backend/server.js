const {app} = require('./app')
const dbConnect = require('./config/database')
const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

dbConnect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('server started' + process.env.PORT);
    });
})