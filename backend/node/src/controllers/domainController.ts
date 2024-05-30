import { Request, Response } from 'express';

const availableDomains = [
  'Ecommerce', 'Finance', 'Health', 'Technology', 'Media and Streaming', 'Education', 
  'Real Estate', 'Travel and Tourism', 'Logistics and Supply Chain', 'Agriculture', 'Manufacturing'
];

export const getDomains = (req: Request, res: Response) => {
  res.json(availableDomains);
};
