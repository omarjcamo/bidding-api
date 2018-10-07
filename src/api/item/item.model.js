import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var Item = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: 'The Name of the Item is required'
  },
  startingPrice: {
    type: Number,
    required: 'The starting Price of the Item is required'
  },
});

export default mongoose.model('Item', Item);
