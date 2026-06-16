export interface Agent {
  id: string;
  name: string;
  designation: string;
  experience: number;
  specialization: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  listings: number;
  volume: string;
}

export const agents: Agent[] = [
  {
    id: 'julian-vance',
    name: 'Julian Vance',
    designation: 'Global Portfolio Director',
    experience: 18,
    specialization: 'Ultra-luxury estates & trophy properties',
    description: 'Julian has facilitated over $4.2B in real estate transactions across six continents. His expertise in ultra-luxury trophy properties and his discretion make him the advisor of choice for the world\'s most discerning collectors.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    email: 'julian@primenest.com',
    phone: '+1 (212) 555-0100',
    listings: 47,
    volume: '$1.8B',
  },
  {
    id: 'elena-moretti',
    name: 'Elena Moretti',
    designation: 'Penthouse Specialist',
    experience: 14,
    specialization: 'Urban penthouses & European estates',
    description: 'With a background in architecture and interior design, Elena brings an unparalleled eye for detail to every transaction. She specializes in Manhattan penthouses and Mediterranean villas, consistently achieving record sale prices.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
    email: 'elena@primenest.com',
    phone: '+1 (212) 555-0101',
    listings: 38,
    volume: '$940M',
  },
  {
    id: 'silas-thorne',
    name: 'Silas Thorne',
    designation: 'Island & Retreat Advisor',
    experience: 12,
    specialization: 'Private islands & resort properties',
    description: 'Silas has pioneered the market for private island acquisitions and resort-style retreats. His global network of developers, architects, and private sellers gives clients access to properties that never reach the open market.',
    image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=800',
    email: 'silas@primenest.com',
    phone: '+1 (212) 555-0102',
    listings: 29,
    volume: '$720M',
  },
  {
    id: 'anya-petrov',
    name: 'Anya Petrov',
    designation: 'Sustainability Advisor',
    experience: 10,
    specialization: 'Sustainable luxury & biophilic design',
    description: 'Anya leads PrimeNest\'s sustainable luxury division, advising clients on carbon-neutral estates, passive house designs, and biophilic properties that minimize environmental impact without compromising on excellence.',
    image: 'https://images.pexels.com/photos/3756675/pexels-photo-3756675.jpeg?auto=compress&cs=tinysrgb&w=800',
    email: 'anya@primenest.com',
    phone: '+1 (212) 555-0103',
    listings: 22,
    volume: '$380M',
  },
];

export const getAgentById = (id: string) => agents.find(a => a.id === id);
