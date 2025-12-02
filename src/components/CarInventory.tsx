import { ImageWithFallback } from './figma/ImageWithFallback';

interface Car {
  id: string;
  name: string;
  category: string;
  status: 'available' | 'rented' | 'maintenance';
  dailyRate: number;
  image: string;
}

const mockCars: Car[] = [
  { id: 'C001', name: 'Tesla Model 3', category: 'Electric', status: 'rented', dailyRate: 95, image: 'tesla sedan' },
  { id: 'C002', name: 'BMW X5', category: 'SUV', status: 'available', dailyRate: 120, image: 'luxury suv' },
  { id: 'C003', name: 'Audi A4', category: 'Sedan', status: 'available', dailyRate: 85, image: 'sedan car' },
  { id: 'C004', name: 'Mercedes C-Class', category: 'Luxury', status: 'rented', dailyRate: 110, image: 'luxury sedan' },
  { id: 'C005', name: 'Toyota Camry', category: 'Sedan', status: 'available', dailyRate: 65, image: 'toyota sedan' },
  { id: 'C006', name: 'Ford Mustang', category: 'Sports', status: 'maintenance', dailyRate: 150, image: 'sports car' },
];

export function CarInventory() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-700';
      case 'rented': return 'bg-blue-100 text-blue-700';
      case 'maintenance': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-xl">Car Inventory</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add New Car
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {mockCars.map((car) => (
          <div key={car.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <ImageWithFallback 
              src={`https://source.unsplash.com/400x250/?${car.image}`}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="mb-2">{car.name}</h4>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600">{car.category}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(car.status)}`}>
                  {car.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-600">${car.dailyRate}/day</span>
                <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
