import { Request, Response } from 'express';

type Domain = 'Ecommerce' | 'Finance' | 'Health' | 'Technology' | 'Media_and_Streaming' | 'Education' | 'Real_Estate' | 'Travel_and_Tourism' | 'Logistics_and_Supply_Chain' | 'Agriculture' | 'Manufacturing';

const domainDatabases: Record<Domain, string[]> = {
  Ecommerce: ['EcommerceDB1', 'EcommerceDB2'],
  Finance: ['FinanceDB1', 'FinanceDB2'],
  Health: ['HealthDB1', 'HealthDB2'],
  Technology: ['TechnologyDB1', 'TechnologyDB2'],
  Media_and_Streaming: ['MediaStreamingDB1', 'MediaStreamingDB2'],
  Education: ['EducationDB1', 'EducationDB2'],
  Real_Estate: ['RealEstateDB1', 'RealEstateDB2'],
  Travel_and_Tourism: ['TravelTourismDB1', 'TravelTourismDB2'],
  Logistics_and_Supply_Chain: ['LogisticsSupplyChainDB1', 'LogisticsSupplyChainDB2'],
  Agriculture: ['AgricultureDB1', 'AgricultureDB2'],
  Manufacturing: ['ManufacturingDB1', 'ManufacturingDB2']
};

export const getDatabases = (req: Request, res: Response) => {
  const { domain } = req.query;
  const domainKey = domain as Domain;

  if (domainKey in domainDatabases) {
    const databases = domainDatabases[domainKey];
    res.json(databases);
  } else {
    res.status(400).json({ error: 'Invalid domain' });
  }
};
