import express, { Request, Response } from 'express';

import { myExampleService } from '../services/example-service';

const router = express.Router();


router.get('/mypath/:id', async (req: Request, res: Response) => {
  const response = await myExampleService(req.params);
  return res.json(response);
});

export { router };