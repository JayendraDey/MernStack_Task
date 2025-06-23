import express from 'express';
import { addData, getAggregatedData } from '../controller/dataController.js';

export const router = express.Router();

router.post('/data', addData);
router.get('/aggregate', getAggregatedData);


