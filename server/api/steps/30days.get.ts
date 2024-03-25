import { Steps } from '../../models';

export default defineEventHandler(async (event) => {
  console.log('Get Distance');

  try {
    const data = await Steps.getPrev30();
    if (data) {
      return data.map((stp) => ({
        date: stp.date,
        distance: stp.steps,
        units: stp.units,
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
