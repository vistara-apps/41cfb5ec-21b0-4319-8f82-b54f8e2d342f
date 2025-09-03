'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/utils';
import { Eye, CheckCircle, XCircle } from 'lucide-react';

interface Application {
  id: string;
  adopter: {
    name: string;
    email: string;
  };
  animal: {
    name: string;
    species: string;
  };
  applicationDate: Date;
  status: string;
  notes: string;
}

interface ApplicationTableProps {
  applications: Application[];
  onView: (application: Application) => void;
  onApprove: (application: Application) => void;
  onReject: (application: Application) => void;
}

export function ApplicationTable({ applications, onView, onApprove, onReject }: ApplicationTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Adoption Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${application.adopter.name}`} />
                  <AvatarFallback>
                    {application.adopter.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium">{application.adopter.name}</p>
                  <p className="text-sm text-muted-foreground">{application.adopter.email}</p>
                  <p className="text-sm">
                    Interested in <span className="font-medium">{application.animal.name}</span> ({application.animal.species})
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Applied on {formatDate(application.applicationDate)}
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
                
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" onClick={() => onView(application)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  {application.status === 'submitted' && (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => onApprove(application)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => onReject(application)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
