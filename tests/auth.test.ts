import auth from '../src/middlewares/auth';

describe('[my auth function]', () => {
  it('should return true if the auth key is correct', async () => {
    const isAuth = await auth(
      {
        headers: { 'x-auth-key': 'this-is-my-secret-key' },
      }
    );
    expect(isAuth).toEqual(true);
  });
  it('should return false if the auth key is incorrect', async () => {
    const isAuth = await auth(
      {
        headers: { 'x-auth-key': 'this-is-my-wrong-key' },
      }
    );
    expect(isAuth).toEqual(false);
  });
});