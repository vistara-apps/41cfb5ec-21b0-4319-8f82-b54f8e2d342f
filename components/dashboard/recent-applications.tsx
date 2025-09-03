'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { mockApplications, mockAdopters, mockAnimals } from '@/lib/data/mock-data';

export function RecentApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockApplications.map((application) => {
          const adopter = mockAdopters.find(a => a.id === application.adopterId);
          const animal = mockAnimals.find(a => a.id === application.animalId);
          
          if (!adopter || !animal) return null;

          return (
            <div key={application.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${adopter.name}`} />
                  <AvatarFallback>
                    {adopter.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{adopter.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Interested in {animal.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(application.applicationDate)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={
                  application.status === 'approved' ? 'success' : 
                  application.status === 'rejected' ? 'destructive' : 'default'
                }>
                  {application.status}
                </Badge>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
