import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Car {
  id: string;
  name: string;
  brand: string;
  category: string;
  year: number;
  plate: string;
  status: 'available' | 'rented' | 'maintenance';
  dailyRate: number;
  image: string;
  totalBookings: number;
}

const allCars: Car[] = [
  { id: 'C001', name: 'Tesla Model 3', brand: 'Tesla', category: 'Electric', year: 2023, plate: 'B 1234 ABC', status: 'rented', dailyRate: 1425000, image: 'tesla sedan', totalBookings: 42 },
  { id: 'C002', name: 'BMW X5', brand: 'BMW', category: 'SUV', year: 2022, plate: 'B 5678 DEF', status: 'available', dailyRate: 1800000, image: 'luxury suv', totalBookings: 38 },
  { id: 'C003', name: 'Audi A4', brand: 'Audi', category: 'Sedan', year: 2023, plate: 'B 9012 GHI', status: 'available', dailyRate: 1275000, image: 'sedan car', totalBookings: 35 },
  { id: 'C004', name: 'Mercedes C-Class', brand: 'Mercedes', category: 'Luxury', year: 2022, plate: 'B 3456 JKL', status: 'rented', dailyRate: 1650000, image: 'luxury sedan', totalBookings: 51 },
  { id: 'C005', name: 'Toyota Camry', brand: 'Toyota', category: 'Sedan', year: 2021, plate: 'B 7890 MNO', status: 'available', dailyRate: 975000, image: 'toyota sedan', totalBookings: 67 },
  { id: 'C006', name: 'Ford Mustang', brand: 'Ford', category: 'Sports', year: 2023, plate: 'B 2345 PQR', status: 'maintenance', dailyRate: 2250000, image: 'sports car', totalBookings: 28 },
  { id: 'C007', name: 'Honda CR-V', brand: 'Honda', category: 'SUV', year: 2022, plate: 'B 6789 STU', status: 'available', dailyRate: 900000, image: 'honda suv', totalBookings: 45 },
  { id: 'C008', name: 'Mazda CX-5', brand: 'Mazda', category: 'SUV', year: 2023, plate: 'B 0123 VWX', status: 'rented', dailyRate: 1200000, image: 'mazda suv', totalBookings: 33 },
  { id: 'C009', name: 'Hyundai Tucson', brand: 'Hyundai', category: 'SUV', year: 2022, plate: 'B 4567 YZA', status: 'available', dailyRate: 1050000, image: 'hyundai suv', totalBookings: 29 },
];

export function Cars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCars = allCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.plate.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || car.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-700';
      case 'rented': return 'bg-blue-100 text-blue-700';
      case 'maintenance': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Tersedia';
      case 'rented': return 'Disewa';
      case 'maintenance': return 'Perawatan';
      default: return status;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Kelola Mobil</h1>
        <p className="text-gray-600">Kelola inventori mobil rental Anda.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari mobil, merek, atau plat nomor..."
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
                <option value="available">Tersedia</option>
                <option value="rented">Disewa</option>
                <option value="maintenance">Perawatan</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] text-white rounded-lg hover:shadow-lg transition-shadow">
                <Plus className="w-4 h-4" />
                Tambah Mobil
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <ImageWithFallback 
                src={`https://source.unsplash.com/400x250/?${car.image}`}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="mb-1">{car.name}</h4>
                    <p className="text-sm text-gray-600">{car.brand} • {car.year}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(car.status)}`}>
                    {getStatusText(car.status)}
                  </span>
                </div>
                
                <div className="space-y-2 mb-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Plat Nomor:</span>
                    <span>{car.plate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kategori:</span>
                    <span>{car.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Booking:</span>
                    <span>{car.totalBookings}x</span>
                  </div>
                </div>

                <div className="border-t pt-3 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-600">Harga per hari</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#10b981]">Rp {car.dailyRate.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-[#0ea5e9] hover:bg-blue-50 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Menampilkan {filteredCars.length} dari {allCars.length} mobil
          </p>
        </div>
      </div>
    </div>
  );
}