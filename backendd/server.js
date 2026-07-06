const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
//initialize the express application
const app=express();
//activate all the middlewares
app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/issueDB').then(()=>console.log("Database /MongoDB connected"))
.catch(err=>console.log(err));

//use routes
const issueRoute=require('./Routes/issueRoutes');
app.use('/api/issues',issueRoute);
app.listen(5000,()=>console.log("Server is running on port 5000"));