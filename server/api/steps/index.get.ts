import { Steps } from '../../models';

export default defineEventHandler(async (event) => {
  console.log('Get Steps');

  try {
    const data = await Steps.getPrev();
    if (data) {
      return {
        steps: data.steps,
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
