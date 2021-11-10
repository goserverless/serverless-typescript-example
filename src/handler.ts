import auth from './middlewares/auth';

export async function myExampleFunction(event: any) {
  // This is simple authentication method based on request headers:

  // if (!auth(event)) {
  //   return {
  //     statusCode: 403,
  //     message: 'Unauthorized',
  //   }
  // }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!',
      event,
    }, null, 2),
  };

  return response;
}