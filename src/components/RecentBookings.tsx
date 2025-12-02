interface Booking {
  id: string;
  customer: string;
  car: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  amount: number;
}

const mockBookings: Booking[] = [
  { id: 'BK001', customer: 'John Doe', car: 'Tesla Model 3', startDate: '2025-12-05', endDate: '2025-12-10', status: 'active', amount: 6750000 },
  { id: 'BK002', customer: 'Sarah Smith', car: 'BMW X5', startDate: '2025-12-03', endDate: '2025-12-08', status: 'active', amount: 9000000 },
  { id: 'BK003', customer: 'Mike Johnson', car: 'Audi A4', startDate: '2025-12-02', endDate: '2025-12-06', status: 'pending', amount: 5100000 },
  { id: 'BK004', customer: 'Emily Davis', car: 'Mercedes C-Class', startDate: '2025-11-28', endDate: '2025-12-01', status: 'completed', amount: 5250000 },
  { id: 'BK005', customer: 'David Wilson', car: 'Toyota Camry', startDate: '2025-12-04', endDate: '2025-12-07', status: 'active', amount: 2925000 },
];

export function RecentBookings() {
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl text-[#0f172a]">Booking Terbaru</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#f0f9ff] to-[#ecfdf5]">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Booking ID</th>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Pelanggan</th>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Mobil</th>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Tanggal Mulai</th>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Tanggal Selesai</th>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{booking.car}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Rp {booking.amount.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}