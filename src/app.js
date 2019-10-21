import express from 'express';
import swaggerUi from 'swagger-ui-express';

import mongoose from 'mongoose';
import logger from 'morgan';

import { router } from './config/routers/invoice.router';
import swaggerDocument from "./config/swagger";

mongoose.Promise = global.Promise;
mongoose
  .connect(
    'mongodb+srv://invoice-builder:12345@invoice-builder-zdirm.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log('💻 Mondodb Connected'))
  .catch(err => console.error(err));

const app = express();
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Swagger
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocument,{
  explore:true
}))

app.use('/api', router);
app.use((req,res,next)=>{
  const error =new Error('Not Found');
  error.message='Invalid route'
  error.status=404;
  next(error)
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500)
  return res.json({ error:{
    message:error.message
  } });
})





const port = process.env.PORT || 5001;


app.listen(port,()=>{
  console.log(`Server running on port ${port} 🔥`);
})
