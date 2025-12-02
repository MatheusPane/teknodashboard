import { Search, UserPlus, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalBookings: number;
  totalSpent: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

const allCustomers: Customer[] = [
  { id: 'CUST001', name: 'John Doe', email: 'john.doe@email.com', phone: '081234567890', address: 'Jakarta Selatan', totalBookings: 12, totalSpent: 18750000, joinDate: '2024-01-15', status: 'active' },
  { id: 'CUST002', name: 'Sarah Smith', email: 'sarah.smith@email.com', phone: '081234567891', address: 'Jakarta Pusat', totalBookings: 8, totalSpent: 14250000, joinDate: '2024-02-20', status: 'active' },
  { id: 'CUST003', name: 'Mike Johnson', email: 'mike.j@email.com', phone: '081234567892', address: 'Tangerang', totalBookings: 15, totalSpent: 22500000, joinDate: '2023-11-10', status: 'active' },
  { id: 'CUST004', name: 'Emily Davis', email: 'emily.d@email.com', phone: '081234567893', address: 'Bekasi', totalBookings: 5, totalSpent: 7875000, joinDate: '2024-05-08', status: 'active' },
  { id: 'CUST005', name: 'David Wilson', email: 'david.w@email.com', phone: '081234567894', address: 'Jakarta Barat', totalBookings: 20, totalSpent: 31500000, joinDate: '2023-08-22', status: 'active' },
  { id: 'CUST006', name: 'Lisa Anderson', email: 'lisa.a@email.com', phone: '081234567895', address: 'Depok', totalBookings: 3, totalSpent: 4500000, joinDate: '2024-07-14', status: 'inactive' },
  { id: 'CUST007', name: 'Robert Brown', email: 'robert.b@email.com', phone: '081234567896', address: 'Jakarta Timur', totalBookings: 18, totalSpent: 27000000, joinDate: '2023-09-30', status: 'active' },
  { id: 'CUST008', name: 'Maria Garcia', email: 'maria.g@email.com', phone: '081234567897', address: 'Bogor', totalBookings: 7, totalSpent: 10500000, joinDate: '2024-03-25', status: 'active' },
];

export function Customers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCustomers = allCustomers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || customer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Kelola Pelanggan</h1>
        <p className="text-gray-600">Kelola data pelanggan Anda.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm border border-white">
          <p className="text-gray-600 text-sm mb-1">Total Pelanggan</p>
          <p className="text-3xl mb-2 text-[#0f172a]">{allCustomers.length}</p>
          <p className="text-sm text-[#10b981]">↑ 12% dari bulan lalu</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-sm border border-white">
          <p className="text-gray-600 text-sm mb-1">Pelanggan Aktif</p>
          <p className="text-3xl mb-2 text-[#0f172a]">{allCustomers.filter(c => c.status === 'active').length}</p>
          <p className="text-sm text-[#10b981]">↑ 8% dari bulan lalu</p>
        </div>
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 shadow-sm border border-white">
          <p className="text-gray-600 text-sm mb-1">Rata-rata Transaksi</p>
          <p className="text-3xl mb-2 text-[#0f172a]">Rp 14,5 Jt</p>
          <p className="text-sm text-[#10b981]">↑ 5% dari bulan lalu</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari nama, email, atau telepon..."
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
                <option value="inactive">Tidak Aktif</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] text-white rounded-lg hover:shadow-lg transition-shadow">
                <UserPlus className="w-4 h-4" />
                Tambah Pelanggan
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#f0f9ff] to-[#ecfdf5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Nama</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Kontak</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Alamat</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Total Booking</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Bergabung</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs text-[#0f172a] uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{customer.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] to-[#10b981] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white">{customer.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{customer.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{customer.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{customer.totalBookings}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Rp {customer.totalSpent.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 rounded-full ${
                      customer.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {customer.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#0ea5e9] hover:text-[#0284c7]">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Menampilkan {filteredCustomers.length} dari {allCustomers.length} pelanggan
          </p>
        </div>
      </div>
    </div>
  );
}