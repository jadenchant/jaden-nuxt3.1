import { Flights } from '../../models';

export default defineEventHandler(async (event) => {
  console.log('Get 30Flights');

  try {
    const data = await Flights.getPrev30();
    if (data) {
      return data.map((flt) => ({
        date: flt.date,
        flights: flt.flights,
        units: flt.units,
      }));
    } else {
      throw new Error('Data is null');
    }
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: 'Error',
      message: 'Server Error',
    };
  }
});
