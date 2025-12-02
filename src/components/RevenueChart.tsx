import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueData = [
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

export function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl mb-6 text-[#0f172a]">Ringkasan Pendapatan</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(0)}Jt`} stroke="#64748b" />
          <Tooltip formatter={(value: number) => `Rp ${value.toLocaleString('id-ID')}`} />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="url(#colorRevenue)" strokeWidth={3} name="Pendapatan (Rp)" />
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BookingsChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl mb-6 text-[#0f172a]">Tren Booking</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Legend />
          <Bar dataKey="bookings" fill="url(#colorBookings)" name="Jumlah Booking" radius={[8, 8, 0, 0]} />
          <defs>
            <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}