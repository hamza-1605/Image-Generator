import Post from '../models/PostSchema.js' ;
import { createError } from '../error.js' ;
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
    api_key: process.env.CLOUDINARY_API_KEY , 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({
            success: true,
            data: posts
        })
    } 
    catch (err) {
        createError( 
            err.status, 
            err?.response?.data?.error?.message || err.message 
        );
    }
}
    
    
export const createPost = async (req, res) => {
    try {
        const { author, prompt, photo } = req.body;

        const photoURL = await cloudinary.uploader.upload( photo , {
            resource_type: "image",
            folder: "GenAI Images"      
        }) ;
        
        const newPost = await Post.create({
            author,
            prompt,
            photo: photoURL.secure_url ,
        });

        res.status(201).json({
            success: true,
            message: 'Post Created Successfully!' ,
            data: newPost
        });
    } 
    catch (err) {
        console.error( "Cloudinary Error: " , err);
    }
}
