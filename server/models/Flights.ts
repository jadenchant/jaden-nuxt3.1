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
      getPrev30() {
        const last = new Date();
        last.setDate(last.getDate() - 30);
        const now = new Date();

        return this.aggregate([
          {
            $match: {
              date: {
                $gt: last,
                $lt: now,
              },
            },
          },
          {
            $group: {
              _id: {
                year: { $year: '$date' },
                month: { $month: '$date' },
                day: { $dayOfMonth: '$date' },
              },
              data: { $first: '$$ROOT' },
            },
          },
          {
            $sort: {
              '_id.year': 1,
              '_id.month': 1,
              '_id.day': 1,
            },
          },
          {
            $replaceRoot: { newRoot: '$data' },
          },
        ]);
      },
    },
  }
);

export default mongoose.model('Flights', flightsSchema, 'flights');
