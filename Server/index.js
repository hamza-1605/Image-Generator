import './config.js'

import express, { json, urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import PostRouter from './routes/PostsRoutes.js' ;
import AIRouter from './routes/AIRoutes.js'

const port = process.env.PORT;

const app = express();
app.use( cors() );
app.use( json( {limit: '50mb'} ) );
app.use( urlencoded( {extended: true} ) );


// error handler
app.use( (err, req, res, next) => {
    const status = err.status || 500 ;
    const message = err.message || 'You made a boo boo!';
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

// Default entry point
app.get('/' , (req, res) => {
    res.send('GenAI backend is running!')
})

// API endpoints
app.use('/api/post' , PostRouter)
app.use('/api/ai' , AIRouter)


// connect to database
const connectDB = () => {
    try {
        mongoose.connect( process.env.MONGODB );
        console.log('MongoDB connected successfully!')
    } 
    catch (error) {
        console.error(error);    
    }
}


// start server
const startServer = () => {
    try {
        app.listen( port , () => console.log('Server running on port#' , port) );
        connectDB();
    } 
    catch (error) {
        console.error(error);
    }
}

startServer();