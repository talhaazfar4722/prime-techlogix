import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteproject, getproject, upload } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/upload', verifyToken, upload)
router.get('/getproject', getproject)
router.delete('/deleteproject/:projectId/:userId', verifyToken, deleteproject )


export default router;