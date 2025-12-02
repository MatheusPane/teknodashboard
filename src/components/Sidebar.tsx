import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Car, Users, Calendar, 
  DollarSign, Settings as SettingsIcon, BarChart3 
} from "lucide-react";

export function Sidebar() {
  const { pathname } = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/bookings", label: "Bookings", icon: Calendar },
    { path: "/cars", label: "Cars", icon: Car },
    { path: "/customers", label: "Customers", icon: Users },
    { path: "/revenue", label: "Revenue", icon: DollarSign },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen p-6">
      <div className="mb-8 flex items-center gap-2">
        <Car className="w-8 h-8 text-[#10b981]" />
        <span className="text-xl">EasyDrive Admin</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-gradient-to-r from-[#0ea5e9] to-[#10b981] text-white shadow-lg"
                  : "text-gray-300 hover:bg-[#334155]"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
