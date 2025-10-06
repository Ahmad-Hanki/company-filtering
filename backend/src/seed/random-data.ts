import { prisma } from '../libs/prisma';

const generateHardcodedData = async () => {
  try {
    await prisma.company.createMany({
      data: [
        {
          name: 'TechNova',
          industry: 'Technology',
          location: 'San Francisco, USA',
          size: 'large',
        },
        {
          name: 'FinEdge',
          industry: 'Finance',
          location: 'New York, USA',
          size: 'medium',
        },
        {
          name: 'MediLife',
          industry: 'Healthcare',
          location: 'London, UK',
          size: 'large',
        },
        {
          name: 'EcoBuild',
          industry: 'Construction',
          location: 'Berlin, Germany',
          size: 'medium',
        },
        {
          name: 'EduSpark',
          industry: 'Education',
          location: 'Toronto, Canada',
          size: 'small',
        },
        {
          name: 'AgriGrow',
          industry: 'Agriculture',
          location: 'Sydney, Australia',
          size: 'medium',
        },
        {
          name: 'RetailX',
          industry: 'Retail',
          location: 'Dubai, UAE',
          size: 'large',
        },
        {
          name: 'TravelMate',
          industry: 'Travel',
          location: 'Paris, France',
          size: 'small',
        },
      ],
      skipDuplicates: true, // avoids duplicates if you run it multiple times
    });

    console.log('✅ Hardcoded company data generated successfully.');
  } catch (error) {
    console.error('❌ Error generating hardcoded data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

// Run the function (if this file is standalone)
generateHardcodedData();
