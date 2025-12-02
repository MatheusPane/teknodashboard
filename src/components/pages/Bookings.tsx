import { Search, Filter, Download } from 'lucide-react';
import { useState } from 'react';

interface Booking {
  id: string;
  customer: string;
  phone: string;
  car: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  amount: number;
  duration: number;
}

const allBookings: Booking[] = [
  { id: 'BK001', customer: 'John Doe', phone: '081234567890', car: 'Tesla Model 3', startDate: '2025-12-05', endDate: '2025-12-10', status: 'active', amount: 6750000, duration: 5 },
  { id: 'BK002', customer: 'Sarah Smith', phone: '081234567891', car: 'BMW X5', startDate: '2025-12-03', endDate: '2025-12-08', status: 'active', amount: 9000000, duration: 5 },
  { id: 'BK003', customer: 'Mike Johnson', phone: '081234567892', car: 'Audi A4', startDate: '2025-12-02', endDate: '2025-12-06', status: 'pending', amount: 5100000, duration: 4 },
  { id: 'BK004', customer: 'Emily Davis', phone: '081234567893', car: 'Mercedes C-Class', startDate: '2025-11-28', endDate: '2025-12-01', status: 'completed', amount: 5250000, duration: 3 },
  { id: 'BK005', customer: 'David Wilson', phone: '081234567894', car: 'Toyota Camry', startDate: '2025-12-04', endDate: '2025-12-07', status: 'active', amount: 2925000, duration: 3 },
  { id: 'BK006', customer: 'Lisa Anderson', phone: '081234567895', car: 'Honda CR-V', startDate: '2025-11-25', endDate: '2025-11-30', status: 'completed', amount: 4500000, duration: 5 },
  { id: 'BK007', customer: 'Robert Brown', phone: '081234567896', car: 'Ford Mustang', startDate: '2025-12-01', endDate: '2025-12-03', status: 'cancelled', amount: 4500000, duration: 2 },
  { id: 'BK008', customer: 'Maria Garcia', phone: '081234567897', car: 'Mazda CX-5', startDate: '2025-12-06', endDate: '2025-12-09', status: 'pending', amount: 3600000, duration: 3 },
  { id: 'BK009', customer: 'James Martinez', phone: '081234567898', car: 'Hyundai Tucson', startDate: '2025-11-20', endDate: '2025-11-27', status: 'completed', amount: 7350000, duration: 7 },
  { id: 'BK010', customer: 'Jennifer Lee', phone: '081234567899', car: 'Kia Sportage', startDate: '2025-12-03', endDate: '2025-12-05', status: 'active', amount: 2100000, duration: 2 },
];

export function Bookings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredBookings = allBookings.filter(booking => {
    const matchesSearch = booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Kelola Booking</h1>
        <p className="text-gray-600">Kelola semua booking pelanggan Anda di sini.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari booking, pelanggan, atau mobil..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="pending">Pending</option>
                <option value="completed">Selesai</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#f0f9ff] to-[#ecfdf5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">ID Booking</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Pelanggan</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Telepon</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Mobil</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Tanggal Mulai</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Tanggal Selesai</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Durasi</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.car}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.duration} hari</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Rp {booking.amount.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#0ea5e9] hover:text-[#0284c7] mr-3">Detail</button>
                    <button className="text-red-600 hover:text-red-700">Batalkan</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Menampilkan {filteredBookings.length} dari {allBookings.length} booking
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Sebelumnya</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Selanjutnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}