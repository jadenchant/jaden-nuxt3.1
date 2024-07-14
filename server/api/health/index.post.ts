import { Distances, Flights, Steps } from '../../models';
import round from '../../functions/round';

export default defineEventHandler(async (event: any) => {
  console.log('POST /api/health');

  try {
    if (event._path?.substring(23) !== process.env.HEALTH_API) {
      console.log('path', event._path);
      console.log('api:', event._path?.substring(23));
      throw new Error('INVALID API KEY');
    } else {
      const body = await readBody(event);
      const data = body.data.metrics;
      console.log('body:', JSON.stringify(body));
      console.log('data:', JSON.stringify(data));

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
        steps: round(steps.data[0].qty),
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
    }
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: '500 SERVER ERROR',
      message: error,
    };
  }
});
