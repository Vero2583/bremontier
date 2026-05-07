import express from "express"
import { getImage, createImage, getImageById, updateImageById } from "../controllers/images.controller.js";
import { upload } from '../middlewares/upload.middleware.js';

const router = express.Router();

router.get('/', getImage);
router.get('/:id', getImageById);
router.post('/', upload.single('nom'), createImage);
router.put('/:id', updateImageById)



export default router;