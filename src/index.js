const express  = require('express');
const cors = require('cors')

require('./db/mongoose');
const todosRouter = require('./routers/todo');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(todosRouter);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})