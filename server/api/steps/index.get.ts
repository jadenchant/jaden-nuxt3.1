import { steps } from "~~/server/models";

export default defineEventHandler(async (event) => {
  console.log("Get Steps")
  
  try {
    const data = await steps.getStepsPrev();
    return data.map((step) => ({
      steps: step.steps,
      units: step.units
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