import express from 'express';
import bodyParser from 'body-parser'; // this allows us to take incoming post requests body
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json()) // this gonna say that we are gonna use json data in our application

app.use('/users', usersRoutes)

app.get('/', (req, res)=>{
    res.send("Hello from homepage")
})

app.listen(PORT, ()=>{
    console.log(`Server Running on port : http://localhost:${PORT}`)
})