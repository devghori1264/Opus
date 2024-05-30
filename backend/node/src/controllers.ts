import { Request, Response } from 'express';

export const getDomains = (req: Request, res: Response) => {
  const domains = ["Ecommerce", "Finance", "Health", "Technology", "Media and Streaming", "Education", "Real Estate", "Travel and Tourism", "Logistics and Supply Chain", "Agriculture", "Manufacturing"];
  res.json(domains);
};

export const getModels = (req: Request, res: Response) => {
  const models = ["Chatbots (NLP/NLU)", "Recommendation Engines", "Predictive Analytics", "Sentiment Analysis", "Image and Video Recognition", "Voice Recognition", "Fraud Detection", "Automated Content Creation (NLG)", "Personalized Marketing", "Customer Segmentation", "Image Generation", "Video Generation", "Text Generation"];
  res.json(models);
};
