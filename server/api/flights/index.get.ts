import { Flights } from '../../models';

export default defineEventHandler(async (event) => {
  console.log('Get Flights');

  try {
    const data = await Flights.getFlightsPrev();
    return data.map((flight) => ({
      flights: flight.flights,
      units: flight.units,
    }));
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: 'Error',
      message: 'Server Error',
    };
  }
});
