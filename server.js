const mongoose=require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const DB=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.o4ffhpq.mongodb.net/${process.env.DATABASE}`

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('DB connection successfull')
})
const app = require('./app')
const port = process.env.PORT;
// const port = 3004;
const server = app.listen(port,()=>{
    console.log('App running on port '+port)

})