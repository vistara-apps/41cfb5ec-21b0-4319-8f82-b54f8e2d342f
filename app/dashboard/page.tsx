'use client';

import { Heart, Users, Calendar, DollarSign } from 'lucide-react';
import { StatsGrid } from '@/components/dashboard/stats-cards';
import { RecentApplications } from '@/components/dashboard/recent-applications';
import { DonationChart } from '@/components/dashboard/donation-chart';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';

const stats = [
  {
    title: 'Total Animals',
    value: '38',
    change: { value: 12, type: 'increase' as const, period: 'last month' },
    icon: <Heart className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Active Applications',
    value: '24',
    change: { value: 8, type: 'increase' as const, period: 'last week' },
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Volunteers',
    value: '16',
    change: { value: 2, type: 'neutral' as const, period: 'last month' },
    icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: 'Monthly Donations',
    value: '$2,840',
    change: { value: 15, type: 'increase' as const, period: 'last month' },
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-0">
        <Header />
        
        <main className="flex-1 space-y-6 p-4 lg:p-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your rescue organization.
            </p>
          </div>
          
          {/* Stats */}
          <StatsGrid stats={stats} />
          
          {/* Charts and Tables */}
          <div className="grid gap-6 lg:grid-cols-2">
            <RecentApplications />
            <DonationChart />
          </div>
        </main>
      </div>
    </div>
  );
}
