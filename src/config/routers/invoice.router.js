import express from 'express'
import invoiceController from '../../api/controllers/invoice.controller';
 export const router = express.Router();


//invoices

router.get('/invoices',invoiceController.findAll)
