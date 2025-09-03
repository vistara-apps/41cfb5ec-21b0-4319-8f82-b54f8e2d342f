'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Heart, Share, Edit } from 'lucide-react';
import Image from 'next/image';

interface DonationCampaign {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
}

interface CampaignCardProps {
  campaign: DonationCampaign;
  onDonate: (campaign: DonationCampaign) => void;
  onShare: (campaign: DonationCampaign) => void;
  onEdit: (campaign: DonationCampaign) => void;
}

export function CampaignCard({ campaign, onDonate, onShare, onEdit }: CampaignCardProps) {
  const progressPercentage = (campaign.currentAmount / campaign.goalAmount) * 100;
  const isActive = new Date() <= campaign.endDate;

  return (
    <Card variant="hoverable" className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={campaign.imageUrl}
          alt={campaign.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={isActive ? 'success' : 'secondary'}>
            {isActive ? 'Active' : 'Ended'}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-2">{campaign.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {campaign.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-primary">
              {formatCurrency(campaign.currentAmount)}
            </span>
            <span className="text-muted-foreground">
              of {formatCurrency(campaign.goalAmount)}
            </span>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Ends {formatDate(campaign.endDate)}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            onClick={() => onDonate(campaign)} 
            className="flex-1"
            disabled={!isActive}
          >
            <Heart className="h-4 w-4 mr-1" />
            Donate
          </Button>
          <Button variant="outline" size="sm" onClick={() => onShare(campaign)}>
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => onEdit(campaign)}>
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Progress component (simple implementation)
function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`bg-secondary rounded-full overflow-hidden ${className}`}>
      <div 
        className="bg-primary h-full transition-all duration-300" 
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  );
}
