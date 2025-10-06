import { Request, Response } from 'express';
import { prisma } from '../../libs/prisma';

const getFilteredCompanies = async (req: Request, res: Response) => {
  try {
    console.log('Received query parameters:', req.query);
    const { industry, size, query, page = '1', per_page = '10' } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const perPageNumber = parseInt(per_page as string, 10);

    const filterValue = (value: any) =>
      value != undefined && value != null && value != ''
        ? { contains: String(value) }
        : undefined;

    const where: any = {
      industry: filterValue(industry),
      size: filterValue(size),
    };

    // Add unified "query" search for both name and location
    if (query && query != '') {
      where.OR = [
        { name: { contains: String(query) } },
        { location: { contains: String(query) } },
      ];
    }

    // Get total count of all companies (without filters)
    const total = await prisma.company.count();

    // Fetch filtered companies with pagination
    const companies = await prisma.company.findMany({
      where,
      skip: (pageNumber - 1) * perPageNumber,
      take: perPageNumber,
    });

    res.status(200).json({
      data: companies,
      total, // total number of all companies (unfiltered)
      page: pageNumber,
      per_page: perPageNumber,
      total_pages: Math.ceil(total / perPageNumber),
    });

    console.log('Fetched companies:', companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export default getFilteredCompanies;
