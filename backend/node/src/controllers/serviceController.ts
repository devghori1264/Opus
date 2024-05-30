import { Request, Response } from 'express';

const availableServices = [
  'Chatbots', 'Recommendation Engines', 'Predictive Analytics', 'Sentiment Analysis',
  'Image and Video Recognition', 'Voice Recognition', 'Fraud Detection', 'Automated Content Creation',
  'Personalized Marketing', 'Customer Segmentation', 'Image Generation', 'Video Generation', 'Text Generation'
];

export const getServices = (req: Request, res: Response) => {
  res.json(availableServices);
};
