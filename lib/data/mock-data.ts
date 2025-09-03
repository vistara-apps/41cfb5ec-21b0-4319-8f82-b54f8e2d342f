// Mock data for demonstration purposes
export const mockOrganization = {
  id: '1',
  name: 'Happy Tails Rescue',
  contactEmail: 'contact@happytails.org',
  website: 'https://happytails.org',
  paymentWalletAddress: '0x1234567890123456789012345678901234567890',
}

export const mockAnimals = [
  {
    id: '1',
    organizationId: '1',
    name: 'Luna',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    gender: 'Female',
    bio: 'Luna is a friendly and energetic dog who loves playing fetch and swimming.',
    temperament: ['Friendly', 'Energetic', 'Good with kids'],
    photos: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'],
    videos: [],
    status: 'available',
  },
  {
    id: '2',
    organizationId: '1',
    name: 'Max',
    species: 'Cat',
    breed: 'Maine Coon',
    age: 2,
    gender: 'Male',
    bio: 'Max is a gentle giant who loves to cuddle and purr.',
    temperament: ['Calm', 'Affectionate', 'Indoor cat'],
    photos: ['https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400'],
    videos: [],
    status: 'available',
  },
  {
    id: '3',
    organizationId: '1',
    name: 'Bella',
    species: 'Dog',
    breed: 'Mixed Breed',
    age: 5,
    gender: 'Female',
    bio: 'Bella is a sweet senior dog looking for a quiet home.',
    temperament: ['Calm', 'Gentle', 'Senior friendly'],
    photos: ['https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400'],
    videos: [],
    status: 'pending',
  },
]

export const mockAdopters = [
  {
    id: '1',
    organizationId: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, ST 12345',
    preferences: {
      species: ['Dog'],
      age: 'Any',
      temperament: ['Friendly', 'Good with kids'],
    },
  },
  {
    id: '2',
    organizationId: '1',
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    phone: '(555) 987-6543',
    address: '456 Oak Ave, Somewhere, ST 67890',
    preferences: {
      species: ['Cat'],
      age: 'Young',
      temperament: ['Calm', 'Indoor cat'],
    },
  },
]

export const mockApplications = [
  {
    id: '1',
    adopterId: '1',
    animalId: '1',
    organizationId: '1',
    applicationDate: new Date('2024-01-15'),
    status: 'submitted',
    notes: 'Interested in Luna. Has experience with Golden Retrievers.',
  },
  {
    id: '2',
    adopterId: '2',
    animalId: '2',
    organizationId: '1',
    applicationDate: new Date('2024-01-10'),
    status: 'approved',
    notes: 'Perfect match for Max. Indoor apartment with lots of love.',
  },
]

export const mockVolunteers = [
  {
    id: '1',
    organizationId: '1',
    name: 'Emily Davis',
    contactInfo: 'emily.davis@email.com',
    availability: ['Weekends', 'Evenings'],
    skills: ['Dog walking', 'Cat socialization'],
  },
  {
    id: '2',
    organizationId: '1',
    name: 'James Wilson',
    contactInfo: 'james.wilson@email.com',
    availability: ['Weekday mornings'],
    skills: ['Cleaning', 'Administrative tasks'],
  },
]

export const mockShifts = [
  {
    id: '1',
    volunteerId: '1',
    organizationId: '1',
    dateTime: new Date('2024-01-20T10:00:00'),
    task: 'Dog walking - Morning shift',
    status: 'scheduled',
  },
  {
    id: '2',
    volunteerId: '2',
    organizationId: '1',
    dateTime: new Date('2024-01-21T09:00:00'),
    task: 'Kennel cleaning',
    status: 'completed',
  },
]

export const mockDonationCampaigns = [
  {
    id: '1',
    organizationId: '1',
    title: 'Medical Fund for Rescue Animals',
    description: 'Help us provide medical care for our rescue animals in need.',
    goalAmount: 5000,
    currentAmount: 3250,
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-03-01'),
  },
  {
    id: '2',
    organizationId: '1',
    title: 'Sponsor a Kennel',
    description: 'Sponsor monthly kennel maintenance for one of our animals.',
    goalAmount: 2000,
    currentAmount: 800,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-02-15'),
  },
]

export const mockDonations = [
  {
    id: '1',
    donationCampaignId: '1',
    donorName: 'Anonymous',
    amount: 100,
    transactionHash: '0xabc123...',
    timestamp: new Date('2024-01-18T14:30:00'),
  },
  {
    id: '2',
    donationCampaignId: '1',
    donorName: 'John Smith',
    amount: 250,
    transactionHash: '0xdef456...',
    timestamp: new Date('2024-01-17T09:15:00'),
  },
]
