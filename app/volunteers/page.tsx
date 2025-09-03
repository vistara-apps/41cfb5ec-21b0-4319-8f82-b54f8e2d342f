'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { VolunteerSchedule } from '@/components/volunteers/volunteer-schedule';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import { mockShifts, mockVolunteers } from '@/lib/data/mock-data';
import { Plus } from 'lucide-react';

export default function Volunteers() {
  const [shifts] = useState(() => {
    return mockShifts.map(shift => {
      const volunteer = mockVolunteers.find(v => v.id === shift.volunteerId);
      return {
        ...shift,
        volunteer: {
          name: volunteer?.name || 'Unknown Volunteer',
          contactInfo: volunteer?.contactInfo || '',
        },
      };
    });
  });

  const handleEdit = (shift: any) => {
    console.log('Edit shift:', shift);
    // In a real app, this would open an edit form
  };

  const handleAddShift = () => {
    console.log('Add new shift');
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
              <h1 className="text-3xl font-bold tracking-tight">Volunteer Management</h1>
              <p className="text-muted-foreground">
                Schedule and coordinate volunteer activities.
              </p>
            </div>
            <Button onClick={handleAddShift}>
              <Plus className="h-4 w-4 mr-2" />
              Schedule Shift
            </Button>
          </div>
          
          <VolunteerSchedule
            shifts={shifts}
            onEdit={handleEdit}
          />
        </main>
      </div>
    </div>
  );
}
