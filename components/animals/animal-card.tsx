'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Eye, Edit } from 'lucide-react';
import Image from 'next/image';

interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  bio: string;
  temperament: string[];
  photos: string[];
  status: string;
}

interface AnimalCardProps {
  animal: Animal;
  onView: (animal: Animal) => void;
  onEdit: (animal: Animal) => void;
}

export function AnimalCard({ animal, onView, onEdit }: AnimalCardProps) {
  return (
    <Card variant="hoverable" className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={animal.photos[0] || '/placeholder-pet.jpg'}
          alt={animal.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={
            animal.status === 'available' ? 'success' : 
            animal.status === 'pending' ? 'warning' : 'secondary'
          }>
            {animal.status}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {animal.name}
          <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Species:</span>
            <span>{animal.species}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Breed:</span>
            <span>{animal.breed}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Age:</span>
            <span>{animal.age} years</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Gender:</span>
            <span>{animal.gender}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {animal.bio}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {animal.temperament.slice(0, 2).map((trait) => (
            <Badge key={trait} variant="outline" className="text-xs">
              {trait}
            </Badge>
          ))}
          {animal.temperament.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{animal.temperament.length - 2} more
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={() => onView(animal)} className="flex-1">
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button variant="outline" size="sm" onClick={() => onEdit(animal)} className="flex-1">
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
