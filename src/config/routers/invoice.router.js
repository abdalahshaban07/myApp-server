import express from 'express'
import invoiceController from '../../api/controllers/invoice.controller';
 export const router = express.Router();


//invoices

router.get('/invoices',invoiceController.findAll)
router.get('/invoice/:id',invoiceController.findOne)
router.delete('/invoice/:id',invoiceController.delete)
router.put('/invoice/:id',invoiceController.update)
router.post('/invoices',invoiceController.create)
