const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./config/connect');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const feedbackRouter = require('./routes/feedbackRotuer');
const catagoryRouter = require('./routes/catagoryRouter');
const titleRouter =  require('./routes/titleRouter');
const questionRouter = require('./routes/questionRouter');
const feedbackRotuer = require('./routes/feedbackRotuer');
const adminRouter  = require('./routes/adminRouter');

dotenv.config();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());
app.use(userRouter);
app.use(feedbackRouter);
app.use(catagoryRouter);
app.use(titleRouter);
app.use(questionRouter);
app.use(feedbackRotuer);
app.use(adminRouter);


const port = 3000;
connection();

app.get('/',(req,res)=>{
    res.send(`Server is running`);
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})