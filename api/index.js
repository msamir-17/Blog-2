import express from 'express';
import mongoose from 'mongoose' ;
import dotenv from 'dotenv';
import userRoutes from './route/user-route.js';
import authRoutes from './route/auth-route.js';

dotenv.config();


mongoose
    .connect(process.env.MONGO )
        .then(() => {
            console.log('mongosdb is connected');
        }).catch(err => {
            console.log(err);
        });
    
    

const app = express();
app.use(express.json()); 

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

app.use("/api/auth", userRoutes)
app.use("/api/users", userRoutes)

