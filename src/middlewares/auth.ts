export default function auth(event) {
  console.log('Current header is: ', event.headers)
  return event.headers['x-auth-key'] && event.headers['x-auth-key'] === process.env.AUTH_KEY;
}