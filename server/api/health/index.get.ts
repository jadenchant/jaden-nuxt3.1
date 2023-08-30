import { Distances, Flights, Steps } from '../../models';

export default defineEventHandler(async (event) => {
  console.log('Get All Health Data');

  try {
    const distance = await Distances.getDistancePrev();
    const flights = await Flights.getFlightsPrev();
    const steps = await Steps.getStepsPrev();
    return {
      distance: distance.map((dist) => ({
        distance: dist.distance,
        units: dist.units,
      })),
      flights: flights.map((flt) => ({
        flights: flt.flights,
        units: flt.units,
      })),
      steps: steps.map((stp) => ({
        steps: stp.steps,
        units: stp.units,
      })),
    };
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: 'Error',
      message: 'Server Error',
    };
  }
});
