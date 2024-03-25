import { Distances } from '../../models';

export default defineEventHandler(async (event) => {
  console.log('Get Distance');

  try {
    const data = await Distances.getPrev();
    if (data) {
      return {
        distance: data.distance,
        units: data.units,
      };
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
