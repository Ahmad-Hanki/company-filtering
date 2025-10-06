import { prisma } from '../libs/prisma';

const generateHardcodedData = async () => {
  try {
    await prisma.company.createMany({
      data: [
        {
          name: 'GreenWave',
          industry: 'Renewable Energy',
          location: 'Oslo, Norway',
          size: 'medium',
        },
        {
          name: 'ByteCrafters',
          industry: 'Software Development',
          location: 'Austin, USA',
          size: 'small',
        },
        {
          name: 'HealthBridge',
          industry: 'Healthcare',
          location: 'Munich, Germany',
          size: 'large',
        },
        {
          name: 'UrbanTaste',
          industry: 'Food & Beverage',
          location: 'Tokyo, Japan',
          size: 'medium',
        },
        {
          name: 'EduVision',
          industry: 'Education Technology',
          location: 'Toronto, Canada',
          size: 'small',
        },
        {
          name: 'AgroNext',
          industry: 'Agriculture',
          location: 'Buenos Aires, Argentina',
          size: 'medium',
        },
        {
          name: 'SkyLogix',
          industry: 'Logistics',
          location: 'Singapore',
          size: 'large',
        },
        {
          name: 'TravelSphere',
          industry: 'Tourism',
          location: 'Barcelona, Spain',
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

generateHardcodedData();
