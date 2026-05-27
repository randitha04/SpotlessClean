require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('./models/Service');

const sampleServices = [
  {
    name: 'Deep Clean',
    description: 'Complete deep cleaning of your home including all rooms, carpets, and furniture.',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 299,
    category: 'Residential',
    duration: '4-5 hours',
  },
  {
    name: 'Office Cleaning',
    description: 'Professional office cleaning with modern equipment for a clean workspace.',
    image: 'https://images.pexels.com/photos/4107114/pexels-photo-4107114.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 249,
    category: 'Commercial',
    duration: '3-4 hours',
  },
  {
    name: 'Sofa Express',
    description: 'Quick and efficient sofa cleaning with eco-friendly products.',
    image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 99,
    category: 'Special',
    duration: '1-2 hours',
  },
  {
    name: 'Kitchen Deep Clean',
    description: 'Specialized kitchen cleaning including appliances, cabinets, and floors.',
    image: 'https://images.pexels.com/photos/4099465/pexels-photo-4099465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 199,
    category: 'Residential',
    duration: '2-3 hours',
  },
  {
    name: 'Bathroom Sanitize',
    description: 'Thorough bathroom cleaning with disinfection and sanitization.',
    image: 'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 149,
    category: 'Residential',
    duration: '1.5-2 hours',
  },
  {
    name: 'Carpet Cleaning',
    description: 'Professional carpet and upholstery cleaning with steam extraction.',
    image: 'https://images.pexels.com/photos/4107287/pexels-photo-4107287.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 179,
    category: 'Residential',
    duration: '2-3 hours',
  },
  {
    name: 'Window Cleaning',
    description: 'Crystal clear windows inside and outside with professional grade equipment.',
    image: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 129,
    category: 'Residential',
    duration: '1-2 hours',
  },
  {
    name: 'Move-In/Move-Out Cleaning',
    description: 'Comprehensive cleaning for new tenants or departing residents.',
    image: 'https://images.pexels.com/photos/4239046/pexels-photo-4239046.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 399,
    category: 'Special',
    duration: '5-6 hours',
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB - try MONGODB_URI first, then MONGO_URI, then fallback
    await mongoose.connect(
      process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/cleaning-service'
    );

    console.log('✓ Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('✓ Cleared existing services');

    // Insert sample services
    const insertedServices = await Service.insertMany(sampleServices);
    console.log(`✓ Successfully inserted ${insertedServices.length} services`);

    // Display inserted services
    console.log('\nServices added:');
    insertedServices.forEach((service, index) => {
      console.log(`${index + 1}. ${service.name} - $${service.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDatabase();
