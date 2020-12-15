const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Yah Connected to database')
});

mongoose.connection.on('error', (err)=> {
    console.log('Darn not connected to database')
    console.log(err)
})


