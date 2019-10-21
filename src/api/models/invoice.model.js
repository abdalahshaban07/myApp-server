import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
 item : {
    type: String,
    required: `item field required`
  } ,
  qty:{
      type:Number,
      required:true
  },
  date:{
      type:Date,
      required:true
  },
  due:{
    type:Date,
    required:true
  },
  rate:{
      type:Number
  },
  tax:{
      type:Number
  }
});

module.exports = mongoose.model("Invoice", InvoiceSchema);