import { StatCard } from '../StatCard';
import { RecentBookings } from '../RecentBookings';
import { RevenueChart, BookingsChart } from '../RevenueChart';
import { Car, Users, DollarSign, Calendar } from 'lucide-react';

export function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Dashboard</h1>
        <p className="text-gray-600">Selamat datang! Berikut ringkasan bisnis rental mobil Anda.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Booking"
          value="1,284"
          change="12.5%"
          icon={Calendar}
          trend="up"
        />
        <StatCard
          title="Rental Aktif"
          value="43"
          change="8.2%"
          icon={Car}
          trend="up"
        />
        <StatCard
          title="Total Pendapatan"
          value="Rp 4,2 M"
          change="23.1%"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Total Pelanggan"
          value="892"
          change="5.4%"
          icon={Users}
          trend="up"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RevenueChart />
        <BookingsChart />
      </div>

      {/* Recent Bookings */}
      <div>
        <RecentBookings />
      </div>
    </div>
  );
}