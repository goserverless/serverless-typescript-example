import auth from '../middlewares/auth';

export async function myExampleService(params) {
  const response = {
    message: 'Your function executed successfully!',
    params,
  };
  return response;
}