const {app} = require('./app')
const dbConnect = require('./config/database')

dbConnect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('server started' + process.env.PORT);
    });
})