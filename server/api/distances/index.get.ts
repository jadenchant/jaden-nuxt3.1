import { distances } from "~~/server/models";

export default defineEventHandler(async (event) => {
  console.log("Get Distance")
  
  try {
    const data = await distances.getDistancePrev();
    return data.map((dist) => ({
      distance: dist.distance,
      units: dist.units
    }))
  } catch (error) {
    console.dir(error);
    event.node.res.statusCode = 500;
    return {
      code: "Error", 
      message: "Server Error"
    }
  }
})