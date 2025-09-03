'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDateTime } from '@/lib/utils';
import { Clock, MapPin, User } from 'lucide-react';

interface Shift {
  id: string;
  volunteer: {
    name: string;
    contactInfo: string;
  };
  dateTime: Date;
  task: string;
  status: string;
}

interface VolunteerScheduleProps {
  shifts: Shift[];
  onEdit: (shift: Shift) => void;
}

export function VolunteerSchedule({ shifts, onEdit }: VolunteerScheduleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Volunteer Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {shifts.map((shift) => (
          <div key={shift.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${shift.volunteer.name}`} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-1">
                <p className="font-medium">{shift.volunteer.name}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDateTime(shift.dateTime)}
                </p>
                <p className="text-sm flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {shift.task}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant={
                shift.status === 'completed' ? 'success' : 
                shift.status === 'cancelled' ? 'destructive' : 'default'
              }>
                {shift.status}
              </Badge>
              <Button variant="outline" size="sm" onClick={() => onEdit(shift)}>
                Edit
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
