'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', donations: 1200 },
  { month: 'Feb', donations: 1800 },
  { month: 'Mar', donations: 1500 },
  { month: 'Apr', donations: 2200 },
  { month: 'May', donations: 1900 },
  { month: 'Jun', donations: 2800 },
];

export function DonationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Donations</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, 'Donations']} />
            <Bar dataKey="donations" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
