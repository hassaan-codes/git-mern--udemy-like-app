const {app} = require('./app')



app.listen(process.env.PORT, () => {
    console.log('server started' + process.env.PORT);
});