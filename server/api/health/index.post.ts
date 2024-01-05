import { Distances, Flights, Steps } from '../../models';
import round from '../../functions/round';

// Check for duplicate data

export default defineEventHandler(async (event) => {
  console.log('POST /api/health');

  try {
    const body = await readBody(event);
    const data = body.data.metrics;

    let flights, steps, distance;

    for (let i = 0; i < 3; i++) {
      if (data[i].name === 'flights_climbed') {
        flights = data[i];
      } else if (data[i].name === 'step_count') {
        steps = data[i];
      } else if (data[i].name === 'walking_running_distance') {
        distance = data[i];
      }
    }

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
