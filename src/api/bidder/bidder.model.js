import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var Bidder = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: 'The Name of the Bidder is required'
  },
});

export default mongoose.model('Bidder', Bidder);
