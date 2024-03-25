import mongoose from 'mongoose';

const flightsSchema = new mongoose.Schema(
  {
    date: {
      required: true,
      type: Date,
    },
    flights: {
      requiered: true,
      type: Number,
    },
    units: {
      required: true,
      type: String,
    },
  },
  {
    statics: {
      getPrev() {
        const last = new Date();
        last.setDate(last.getDate() - 2);
        const now = new Date();
        return this.findOne({
          date: {
            $gt: last,
            $lt: now,
          },
        });
      },
    },
  }
);

export default mongoose.model('Flights', flightsSchema, 'flights');
