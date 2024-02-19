import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export const GET = handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    const returnToQuery = req.query?.returnTo;
    const returnTo = typeof returnToQuery === 'string' ? returnToQuery : '/';

    return await handleLogin(req, res, {
      authorizationParams: {
        prompt: 'login',
      },
      returnTo,
    });
  },
});
