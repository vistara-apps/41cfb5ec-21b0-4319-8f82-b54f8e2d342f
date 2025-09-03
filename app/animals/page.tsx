'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnimalCard } from '@/components/animals/animal-card';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import { mockAnimals } from '@/lib/data/mock-data';
import { Plus } from 'lucide-react';

export default function Animals() {
  const [animals] = useState(mockAnimals);

  const handleView = (animal: any) => {
    console.log('View animal:', animal);
    // In a real app, this would open a modal or navigate to a detail page
  };

  const handleEdit = (animal: any) => {
    console.log('Edit animal:', animal);
    // In a real app, this would open an edit form
  };

  const handleAddAnimal = () => {
    console.log('Add new animal');
    // In a real app, this would open a creation form
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-0">
        <Header />
        
        <main className="flex-1 space-y-6 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Animal Profiles</h1>
              <p className="text-muted-foreground">
                Manage profiles for all animals in your care.
              </p>
            </div>
            <Button onClick={handleAddAnimal}>
              <Plus className="h-4 w-4 mr-2" />
              Add Animal
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {animals.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onView={handleView}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
