import { Distances, Flights, Steps } from '../../models';
import round from '../../functions/round';

// Check for duplicate data

export default defineEventHandler(async (event) => {
  console.log('POST /api/health');

  try {
    const body = await readBody(event);
    const data = body.data.metrics;
    //const {flights, steps, distance} = body.data
    const flights = data[0];
    const distance = data[1];
    const steps = data[2];

    const flightsData = new Flights({
      date: flights.data[0].date,
      flights: flights.data[0].qty,
      units: flights.units,
    });

    const stepsData = new Steps({
      date: steps.data[0].date,
      steps: steps.data[0].qty,
      units: steps.units,
    });

    const distanceData = new Distances({
      date: distance.data[0].date,
      distance: round(distance.data[0].qty),
      units: distance.units,
    });

    const flightsSave = await flightsData.save();
    const stepsSave = await stepsData.save();
    const distanceSave = await distanceData.save();

    return { flights: flightsSave, steps: stepsSave, distance: distanceSave };
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: 'ERROR',
      message: 'Something wrong.',
    };
  }
});
