const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./config/connect');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const feedbackRouter = require('./routes/feedbackRotuer');
const catagoryRouter = require('./routes/catagoryRouter');
dotenv.config();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());
app.use(userRouter);
app.use(feedbackRouter);
app.use(catagoryRouter);


const port = 3000;
connection();

app.get('/',(req,res)=>{
    res.send(`Server is on`);
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})