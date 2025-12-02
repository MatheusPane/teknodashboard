import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Car, Clock } from 'lucide-react';

const popularCars = [
  { name: 'Toyota Camry', bookings: 67, rating: 4.8 },
  { name: 'Mercedes C-Class', bookings: 51, rating: 4.9 },
  { name: 'Honda CR-V', bookings: 45, rating: 4.7 },
  { name: 'BMW X5', bookings: 38, rating: 4.8 },
  { name: 'Audi A4', bookings: 35, rating: 4.6 },
  { name: 'Mazda CX-5', bookings: 33, rating: 4.7 },
];

const weeklyData = [
  { day: 'Senin', bookings: 12, revenue: 18000000 },
  { day: 'Selasa', bookings: 15, revenue: 22500000 },
  { day: 'Rabu', bookings: 18, revenue: 27000000 },
  { day: 'Kamis', bookings: 14, revenue: 21000000 },
  { day: 'Jumat', bookings: 20, revenue: 30000000 },
  { day: 'Sabtu', bookings: 25, revenue: 37500000 },
  { day: 'Minggu', bookings: 22, revenue: 33000000 },
];

const hourlyData = [
  { hour: '00:00', bookings: 2 },
  { hour: '03:00', bookings: 1 },
  { hour: '06:00', bookings: 3 },
  { hour: '09:00', bookings: 15 },
  { hour: '12:00', bookings: 12 },
  { hour: '15:00', bookings: 18 },
  { hour: '18:00', bookings: 10 },
  { hour: '21:00', bookings: 7 },
];

export function Analytics() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Analitik</h1>
        <p className="text-gray-600">Insight mendalam tentang performa bisnis Anda.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Tingkat Okupansi</p>
              <p className="text-3xl mb-2 text-[#0f172a]">78%</p>
              <p className="text-sm text-[#10b981]">↑ 5% dari bulan lalu</p>
            </div>
            <div className="bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] p-3 rounded-lg shadow-md">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Durasi Rata-rata</p>
              <p className="text-3xl mb-2 text-[#0f172a]">4.2 hari</p>
              <p className="text-sm text-[#0ea5e9]">Per booking</p>
            </div>
            <div className="bg-gradient-to-br from-[#10b981] to-[#14b8a6] p-3 rounded-lg shadow-md">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Repeat Customer</p>
              <p className="text-3xl mb-2 text-[#0f172a]">42%</p>
              <p className="text-sm text-[#10b981]">↑ 8% dari bulan lalu</p>
            </div>
            <div className="bg-gradient-to-br from-[#38bdf8] to-[#60a5fa] p-3 rounded-lg shadow-md">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 shadow-sm border border-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Rating Rata-rata</p>
              <p className="text-3xl mb-2 text-[#0f172a]">4.7</p>
              <p className="text-sm text-gray-600">Dari 892 ulasan</p>
            </div>
            <div className="bg-gradient-to-br from-[#14b8a6] to-[#10b981] p-3 rounded-lg shadow-md">
              <Car className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl mb-6 text-[#0f172a]">Performa Mingguan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="bookings" stroke="#0ea5e9" fill="url(#areaGradient)" fillOpacity={0.6} name="Booking" />
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl mb-6 text-[#0f172a]">Pola Booking per Jam</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="url(#hourGradient)" name="Booking" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="hourGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Popular Cars */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl mb-6 text-[#0f172a]">Mobil Paling Populer</h3>
        <div className="space-y-4">
          {popularCars.map((car, index) => (
            <div key={car.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-[#f0f9ff] to-[#ecfdf5] rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0ea5e9] to-[#10b981] text-white rounded-full flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm text-[#0f172a]">{car.name}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-gray-600">{car.bookings} booking</span>
                    <span className="text-xs text-yellow-600">★ {car.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 mx-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#0ea5e9] to-[#10b981] h-2 rounded-full" 
                    style={{ width: `${(car.bookings / popularCars[0].bookings) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#0f172a]">{car.bookings} booking</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}