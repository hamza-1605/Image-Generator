import { getAllPosts, createPost } from '../controllers/Posts.js' ;
import express from 'express' ;

const router = express.Router() ;

router.get( '/' , getAllPosts );
router.post( '/create' , createPost );

export default router;