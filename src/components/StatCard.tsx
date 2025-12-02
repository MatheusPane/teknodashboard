import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export function StatCard({ title, value, change, icon: Icon, trend }: StatCardProps) {
  const colors = [
    { bg: 'bg-gradient-to-br from-blue-50 to-cyan-50', icon: 'bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4]', iconColor: 'text-white' },
    { bg: 'bg-gradient-to-br from-emerald-50 to-teal-50', icon: 'bg-gradient-to-br from-[#10b981] to-[#14b8a6]', iconColor: 'text-white' },
    { bg: 'bg-gradient-to-br from-sky-50 to-blue-50', icon: 'bg-gradient-to-br from-[#38bdf8] to-[#60a5fa]', iconColor: 'text-white' },
    { bg: 'bg-gradient-to-br from-teal-50 to-green-50', icon: 'bg-gradient-to-br from-[#14b8a6] to-[#10b981]', iconColor: 'text-white' },
  ];
  
  const colorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[colorIndex];

  return (
    <div className={`${color.bg} rounded-xl p-6 shadow-sm border border-white`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{title}</p>
          <p className="text-3xl mb-2 text-[#0f172a]">{value}</p>
          <div className="flex items-center gap-1">
            <span className={`text-sm ${trend === 'up' ? 'text-[#10b981]' : 'text-red-600'}`}>
              {trend === 'up' ? '↑' : '↓'} {change}
            </span>
            <span className="text-gray-500 text-sm">vs last month</span>
          </div>
        </div>
        <div className={`${color.icon} p-3 rounded-lg shadow-md`}>
          <Icon className={`w-6 h-6 ${color.iconColor}`} />
        </div>
      </div>
    </div>
  );
}