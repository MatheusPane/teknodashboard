import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Calendar, CreditCard } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Jan', revenue: 186000000, bookings: 45 },
  { month: 'Feb', revenue: 237000000, bookings: 58 },
  { month: 'Mar', revenue: 273000000, bookings: 67 },
  { month: 'Apr', revenue: 247500000, bookings: 61 },
  { month: 'May', revenue: 319500000, bookings: 78 },
  { month: 'Jun', revenue: 369000000, bookings: 89 },
  { month: 'Jul', revenue: 433500000, bookings: 102 },
  { month: 'Aug', revenue: 400500000, bookings: 95 },
  { month: 'Sep', revenue: 351000000, bookings: 84 },
  { month: 'Oct', revenue: 376500000, bookings: 91 },
  { month: 'Nov', revenue: 417000000, bookings: 98 },
  { month: 'Dec', revenue: 337500000, bookings: 76 },
];

const categoryRevenue = [
  { name: 'Sedan', value: 35, amount: 1450000000 },
  { name: 'SUV', value: 30, amount: 1240000000 },
  { name: 'Luxury', value: 20, amount: 830000000 },
  { name: 'Sports', value: 10, amount: 415000000 },
  { name: 'Electric', value: 5, amount: 207500000 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export function Revenue() {
  const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
  const avgMonthlyRevenue = totalRevenue / monthlyRevenue.length;
  const currentMonth = monthlyRevenue[monthlyRevenue.length - 1].revenue;
  const lastMonth = monthlyRevenue[monthlyRevenue.length - 2].revenue;
  const monthGrowth = ((currentMonth - lastMonth) / lastMonth * 100).toFixed(1);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Pendapatan</h1>
        <p className="text-gray-600">Analisa pendapatan dan performa finansial.</p>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Pendapatan</p>
              <p className="text-2xl mb-2 text-[#0f172a]">Rp {(totalRevenue / 1000000000).toFixed(1)} M</p>
              <p className="text-sm text-gray-600">Tahun 2025</p>
            </div>
            <div className="bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] p-3 rounded-lg shadow-md">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Rata-rata per Bulan</p>
              <p className="text-2xl mb-2 text-[#0f172a]">Rp {(avgMonthlyRevenue / 1000000).toFixed(0)} Jt</p>
              <p className="text-sm text-[#0ea5e9]">2025</p>
            </div>
            <div className="bg-gradient-to-br from-[#10b981] to-[#14b8a6] p-3 rounded-lg shadow-md">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Bulan Ini</p>
              <p className="text-2xl mb-2 text-[#0f172a]">Rp {(currentMonth / 1000000).toFixed(0)} Jt</p>
              <p className="text-sm text-[#10b981]">↑ {monthGrowth}% vs bulan lalu</p>
            </div>
            <div className="bg-gradient-to-br from-[#38bdf8] to-[#60a5fa] p-3 rounded-lg shadow-md">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pendapatan Tertinggi</p>
              <p className="text-2xl mb-2 text-[#0f172a]">Rp 433 Jt</p>
              <p className="text-sm text-gray-600">Juli 2025</p>
            </div>
            <div className="bg-gradient-to-br from-[#14b8a6] to-[#10b981] p-3 rounded-lg shadow-md">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl mb-6 text-[#0f172a]">Tren Pendapatan Bulanan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(0)}Jt`} stroke="#64748b" />
              <Tooltip formatter={(value: number) => `Rp ${value.toLocaleString('id-ID')}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="url(#revenueGradient)" strokeWidth={3} name="Pendapatan" />
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl mb-6 text-[#0f172a]">Perbandingan Pendapatan & Booking</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenue.slice(-6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis yAxisId="left" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}Jt`} stroke="#64748b" />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="revenue" fill="url(#barRevenue)" name="Pendapatan (Rp)" radius={[8, 8, 0, 0]} />
              <Bar yAxisId="right" dataKey="bookings" fill="url(#barBooking)" name="Booking" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="barRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
                <linearGradient id="barBooking" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl mb-6">Pendapatan per Kategori</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryRevenue}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryRevenue.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl mb-6">Detail Kategori</h3>
          <div className="space-y-4">
            {categoryRevenue.map((category, index) => (
              <div key={category.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <div>
                    <p className="text-sm">{category.name}</p>
                    <p className="text-xs text-gray-600">{category.value}% dari total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">Rp {(category.amount / 1000000).toFixed(0)} Jt</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}