import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

import { Dashboard } from "./components/pages/Dashboard";
import { Bookings } from "./components/pages/Bookings";
import { Cars } from "./components/pages/Cars";
import { Customers } from "./components/pages/Customers";
import { Revenue } from "./components/pages/Revenue";
import { Analytics } from "./components/pages/Analytics";
import { Settings } from "./components/pages/Settings";

export default function App() {
  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}
