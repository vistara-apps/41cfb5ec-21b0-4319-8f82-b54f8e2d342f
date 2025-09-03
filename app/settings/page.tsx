'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import { mockOrganization } from '@/lib/data/mock-data';
import { Settings, Wallet, Bell, Users } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 lg:ml-0">
        <Header />
        
        <main className="flex-1 space-y-6 p-4 lg:p-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Manage your organization settings and preferences.
            </p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Organization Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Organization Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Organization Name</label>
                  <Input defaultValue={mockOrganization.name} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input defaultValue={mockOrganization.contactEmail} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Website</label>
                  <Input defaultValue={mockOrganization.website} />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Wallet Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Wallet & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Payment Wallet Address</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      defaultValue={mockOrganization.paymentWalletAddress} 
                      className="font-mono text-xs"
                      readOnly
                    />
                    <Badge variant="success">Connected</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    This wallet will receive all donations from your campaigns.
                  </p>
                </div>
                <Button variant="outline">Update Wallet</Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Applications</p>
                      <p className="text-sm text-muted-foreground">Get notified when someone applies to adopt</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Donations Received</p>
                      <p className="text-sm text-muted-foreground">Get notified when donations are received</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Volunteer Reminders</p>
                      <p className="text-sm text-muted-foreground">Send shift reminders to volunteers</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>

            {/* User Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Admin Users</p>
                      <p className="text-sm text-muted-foreground">Full access to all features</p>
                    </div>
                    <Badge>2 users</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Volunteer Coordinators</p>
                      <p className="text-sm text-muted-foreground">Manage volunteers and schedules</p>
                    </div>
                    <Badge variant="secondary">1 user</Badge>
                  </div>
                </div>
                <Button variant="outline">Manage Team</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
