import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var Bid = new Schema({
  _id: Schema.Types.ObjectId,
  bidder: {
    type: Schema.ObjectId,
    ref: "Bidder"
  },
  item: {
    type: Schema.ObjectId,
    ref: "Item"
  },
  bidPrice: {
    type: Number,
    required: 'The bid Price of the Bid is required'
  }
});

export default mongoose.model('Bid', Bid);
