'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CampaignCard } from '@/components/donations/campaign-card';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import { mockDonationCampaigns } from '@/lib/data/mock-data';
import { Plus } from 'lucide-react';

export default function Donations() {
  const [campaigns] = useState(mockDonationCampaigns);

  const handleDonate = (campaign: any) => {
    console.log('Donate to campaign:', campaign);
    // In a real app, this would initiate a donation flow
  };

  const handleShare = (campaign: any) => {
    console.log('Share campaign:', campaign);
    // In a real app, this would generate a shareable link
    if (navigator.share) {
      navigator.share({
        title: campaign.title,
        text: campaign.description,
        url: window.location.href,
      });
    }
  };

  const handleEdit = (campaign: any) => {
    console.log('Edit campaign:', campaign);
    // In a real app, this would open an edit form
  };

  const handleCreateCampaign = () => {
    console.log('Create new campaign');
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
              <h1 className="text-3xl font-bold tracking-tight">Donation Campaigns</h1>
              <p className="text-muted-foreground">
                Create and manage fundraising campaigns for your rescue organization.
              </p>
            </div>
            <Button onClick={handleCreateCampaign}>
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                onDonate={handleDonate}
                onShare={handleShare}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
