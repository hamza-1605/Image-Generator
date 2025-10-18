import { generateImage } from "../controllers/AIGenerateImage.js";
import express from 'express'
const router = express.Router();

router.post( '/generate' , generateImage );

export default router;