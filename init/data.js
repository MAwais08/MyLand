const sampleListings = [
  {
    title: 'Ski-in Ski-out Chalet',
    description: 'An eco-friendly getaway with modern features.',
    image: {
      url: 'https://images.unsplash.com/photo-1582719478185-2198b3c0c78e?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1582719478185-2198b3c0c78e'
    },
    price: 2784,
    location: 'Reykjavik',
    country: 'Iceland'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'A luxurious experience with traditional charm.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 4514,
    location: 'Bali',
    country: 'Indonesia'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 2278,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Charming Paris Loft',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 3460,
    location: 'Malibu',
    country: 'United States'
  },
  {
    title: 'Elegant Desert Villa',
    description: 'A luxurious experience with traditional charm.',
    image: {
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1570129477492-45c003edd2be'
    },
    price: 1962,
    location: 'Sydney',
    country: 'Australia'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1554995207-c18c203602cb'
    },
    price: 3719,
    location: 'Cancun',
    country: 'Mexico'
  },
  {
    title: 'Rustic Lake House',
    description: 'Ideal for families, friends, or solo travelers seeking peace.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 2419,
    location: 'Malibu',
    country: 'United States'
  },
  {
    title: 'Charming Paris Loft',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1522708323590-d24dbb6b0267'
    },
    price: 4691,
    location: 'Malibu',
    country: 'United States'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 3765,
    location: 'Paris',
    country: 'France'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 1880,
    location: 'Sydney',
    country: 'Australia'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Ideal for families, friends, or solo travelers seeking peace.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 3116,
    location: 'Aspen',
    country: 'United States'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1582719478185-2198b3c0c78e?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1582719478185-2198b3c0c78e'
    },
    price: 1919,
    location: 'Aspen',
    country: 'United States'
  },
  {
    title: 'Historic Castle Stay',
    description: 'Steps from iconic landmarks and packed with comfort.',
    image: {
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1570129477492-45c003edd2be'
    },
    price: 3715,
    location: 'Toronto',
    country: 'Canada'
  },
  {
    title: 'Rustic Lake House',
    description: 'Get away from city noise in this well-equipped space.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 1492,
    location: 'Reykjavik',
    country: 'Iceland'
  },
  {
    title: 'Ski-in Ski-out Chalet',
    description: 'Ideal for families, friends, or solo travelers seeking peace.',
    image: {
      url: 'https://images.unsplash.com/photo-1582719478185-2198b3c0c78e?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1582719478185-2198b3c0c78e'
    },
    price: 4660,
    location: 'Cancun',
    country: 'Mexico'
  },
  {
    title: 'Historic Castle Stay',
    description: 'An eco-friendly getaway with modern features.',
    image: {
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1552733407-5d5c46c3bb3b'
    },
    price: 3248,
    location: 'Rome',
    country: 'Italy'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'An eco-friendly getaway with modern features.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 2277,
    location: 'Aspen',
    country: 'United States'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1522708323590-d24dbb6b0267'
    },
    price: 4148,
    location: 'Rome',
    country: 'Italy'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'Get away from city noise in this well-equipped space.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 2436,
    location: 'Sydney',
    country: 'Australia'
  },
  {
    title: 'Charming Paris Loft',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 4837,
    location: 'Marrakech',
    country: 'Morocco'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1522708323590-d24dbb6b0267'
    },
    price: 1173,
    location: 'Cape Town',
    country: 'South Africa'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'An eco-friendly getaway with modern features.',
    image: {
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1570129477492-45c003edd2be'
    },
    price: 3231,
    location: 'Marrakech',
    country: 'Morocco'
  },
  {
    title: 'Island Overwater Bungalow',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1600585154501-5196d61f8d3b?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1600585154501-5196d61f8d3b'
    },
    price: 2478,
    location: 'Rome',
    country: 'Italy'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'An eco-friendly getaway with modern features.',
    image: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1522708323590-d24dbb6b0267'
    },
    price: 1056,
    location: 'Rome',
    country: 'Italy'
  },
  {
    title: 'Luxury City Penthouse',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1570129477492-45c003edd2be'
    },
    price: 811,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 4428,
    location: 'Bali',
    country: 'Indonesia'
  },
  {
    title: 'Luxury City Penthouse',
    description: 'A luxurious experience with traditional charm.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 1227,
    location: 'Cancun',
    country: 'Mexico'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'A luxurious experience with traditional charm.',
    image: {
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1552733407-5d5c46c3bb3b'
    },
    price: 4006,
    location: 'Cape Town',
    country: 'South Africa'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1522708323590-d24dbb6b0267'
    },
    price: 742,
    location: 'Toronto',
    country: 'Canada'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 671,
    location: 'Rome',
    country: 'Italy'
  },
  {
    title: 'Modern Tokyo Apartment',
    description: 'An eco-friendly getaway with modern features.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 1783,
    location: 'Reykjavik',
    country: 'Iceland'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1554995207-c18c203602cb'
    },
    price: 2418,
    location: 'Paris',
    country: 'France'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Steps from iconic landmarks and packed with comfort.',
    image: {
      url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1523413651479-597eb2da0ad6'
    },
    price: 3312,
    location: 'Cancun',
    country: 'Mexico'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 4716,
    location: 'Toronto',
    country: 'Canada'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 4400,
    location: 'Toronto',
    country: 'Canada'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 4320,
    location: 'Marrakech',
    country: 'Morocco'
  },
  {
    title: 'Elegant Desert Villa',
    description: 'Romantic stay with unforgettable sunsets.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 2317,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 1088,
    location: 'Sydney',
    country: 'Australia'
  },
  {
    title: 'Modern Tokyo Apartment',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1582719478185-2198b3c0c78e?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1582719478185-2198b3c0c78e'
    },
    price: 2541,
    location: 'Reykjavik',
    country: 'Iceland'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1508057198894-247b23fe5ade'
    },
    price: 4681,
    location: 'Paris',
    country: 'France'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1570129477492-45c003edd2be'
    },
    price: 4411,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Countryside Vineyard Escape',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1600585154501-5196d61f8d3b?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1600585154501-5196d61f8d3b'
    },
    price: 4742,
    location: 'Bali',
    country: 'Indonesia'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Enjoy the beauty of the surroundings with top-notch amenities.',
    image: {
      url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1506748686214-e9df14d4d9d0'
    },
    price: 4945,
    location: 'Paris',
    country: 'France'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Steps from iconic landmarks and packed with comfort.',
    image: {
      url: 'https://images.unsplash.com/photo-1582719478185-2198b3c0c78e?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1582719478185-2198b3c0c78e'
    },
    price: 3104,
    location: 'Bali',
    country: 'Indonesia'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'A luxurious experience with traditional charm.',
    image: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1522708323590-d24dbb6b0267'
    },
    price: 419,
    location: 'Malibu',
    country: 'United States'
  },
  {
    title: 'Modern Mountain Cabin',
    description: 'Get away from city noise in this well-equipped space.',
    image: {
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1552733407-5d5c46c3bb3b'
    },
    price: 4385,
    location: 'Marrakech',
    country: 'Morocco'
  },
  {
    title: 'Ski-in Ski-out Chalet',
    description: 'Ideal for families, friends, or solo travelers seeking peace.',
    image: {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1542314831-068cd1dbfeeb'
    },
    price: 540,
    location: 'Aspen',
    country: 'United States'
  },
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1554995207-c18c203602cb'
    },
    price: 3155,
    location: 'Paris',
    country: 'France'
  },
  {
    title: 'Tranquil Jungle Retreat',
    description: 'Steps from iconic landmarks and packed with comfort.',
    image: {
      url: 'https://images.unsplash.com/photo-1582719478185-2198b3c0c78e?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1582719478185-2198b3c0c78e'
    },
    price: 446,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Modern Tokyo Apartment',
    description: 'Perfect for a quiet weekend with nature views and fresh air.',
    image: {
      url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60',
      filename: 'photo-1554995207-c18c203602cb'
    },
    price: 4248,
    location: 'Aspen',
    country: 'United States'
  }

];

module.exports = sampleListings;
