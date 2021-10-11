const  mongoose = require('mongoose');

// DB connection using the mongoose, DB name Bcg-insurence
mongoose.connect('mongodb://127.0.0.1:27017/Todo-App', {
    useNewUrlParser: true,
    useCreateIndex: true
})