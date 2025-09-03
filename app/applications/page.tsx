'use client';

import { useState } from 'react';
import { ApplicationTable } from '@/components/applications/application-table';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import { mockApplications, mockAdopters, mockAnimals } from '@/lib/data/mock-data';

export default function Applications() {
  const [applications, setApplications] = useState(() => {
    return mockApplications.map(app => {
      const adopter = mockAdopters.find(a => a.id === app.adopterId);
      const animal = mockAnimals.find(a => a.id === app.animalId);
      
      return {
        ...app,
        adopter: {
          name: adopter?.name || 'Unknown',
          email: adopter?.email || 'unknown@example.com',
        },
        animal: {
          name: animal?.name || 'Unknown',
          species: animal?.species || 'Unknown',
        },
      };
    });
  });

  const handleView = (application: any) => {
    console.log('View application:', application);
    // In a real app, this would open a modal or navigate to a detail page
  };

  const handleApprove = (application: any) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === application.id
          ? { ...app, status: 'approved' }
          : app
      )
    );
  };

  const handleReject = (application: any) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === application.id
          ? { ...app, status: 'rejected' }
          : app
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-0">
        <Header />
        
        <main className="flex-1 space-y-6 p-4 lg:p-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Adoption Applications</h1>
            <p className="text-muted-foreground">
              Manage and review adoption applications from potential pet parents.
            </p>
          </div>
          
          <ApplicationTable
            applications={applications}
            onView={handleView}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </main>
      </div>
    </div>
  );
}
