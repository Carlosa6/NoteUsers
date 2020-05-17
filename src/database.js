const mongoose = require('mongoose');


const URI = process.env.MONG_URI
            ? process.env.MONG_URI
            : "mongodb://localhost/mernstack";

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

const connection = mongoose.connection;

connection.once('open', () => console.log('DB connected'));
