import { Request, Response } from 'express';
import { prisma } from '../../libs/prisma';

const getFilteredCompanies = async (req: Request, res: Response) => {
  try {
    const { industry, location, size, name } = req.query;

    const filterValue = (value: any) =>
      value != undefined && value != null && value != ''
        ? { contains: String(value) }
        : undefined;

    const companies = await prisma.company.findMany({
      where: {
        industry: filterValue(industry),
        location: filterValue(location),
        size: filterValue(size),
        name: filterValue(name),
      },
    });

    res.status(200).json({ data: companies });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export default getFilteredCompanies;
