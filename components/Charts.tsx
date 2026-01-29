import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';

// --- Credit History Chart ---

const creditData = [
  { name: 'Jan', income: 12000, expense: 8000 },
  { name: 'Feb', income: 15000, expense: 11000 },
  { name: 'Mar', income: 18000, expense: 13000 },
  { name: 'Apr', income: 14000, expense: 9000 },
  { name: 'May', income: 24000, expense: 18000 }, // Peak as shown in image
  { name: 'Jun', income: 19000, expense: 14000 },
  { name: 'Jul', income: 22000, expense: 16000 },
  { name: 'Aug', income: 21000, expense: 15000 },
  { name: 'Sep', income: 23000, expense: 17000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
        <p className="font-bold text-gray-800 mb-2">{73901}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
          <div className="w-2 h-2 rounded-full bg-purple-200"></div>
          <span>Current Income</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span>Current Experience</span>
          <span className="font-bold text-gray-800 ml-auto">98,032</span>
        </div>
      </div>
    );
  }
  return null;
};

export const CreditHistoryChart: React.FC = () => {
  return (
    <div className="w-full h-[250px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={creditData}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          barCategoryGap="20%"
        >
          <defs>
            <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
              <rect width="2" height="4" transform="translate(0,0)" fill="#E9D5FF" />
            </pattern>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6B7280', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          {/* Background bars (striped) */}
          <Bar dataKey="income" stackId="a" radius={[20, 20, 20, 20]} fill="url(#stripePattern)" />
          {/* Foreground bars (solid) - Rendered slightly offset or as main value */}
          <Bar dataKey="expense" stackId="b" radius={[20, 20, 20, 20]} fill="#8B5CF6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// --- Expense Breakdown Mini Charts ---

interface DonutProps {
  percentage: number;
  color: string;
  trackColor: string;
}

export const MiniDonut: React.FC<DonutProps> = ({ percentage, color, trackColor }) => {
  const data = [
    { name: 'Value', value: percentage },
    { name: 'Rest', value: 100 - percentage },
  ];

  return (
    <div className="w-24 h-12 relative overflow-hidden">
        {/* Simple CSS-based semi-circle/gauge visual to match the image exactly */}
        <div className="w-24 h-24 rounded-full border-[10px] absolute top-0 left-0"
             style={{ borderColor: trackColor, borderBottomColor: 'transparent', borderLeftColor: 'transparent', transform: 'rotate(135deg)' }}>
        </div>
         <div className="w-24 h-24 rounded-full border-[10px] absolute top-0 left-0 transition-all duration-1000"
             style={{ 
                borderColor: color, 
                borderBottomColor: 'transparent', 
                borderRightColor: 'transparent', 
                borderLeftColor: 'transparent', 
                transform: `rotate(-45deg)` // Simplified for static visual, real implementation would calculate degrees based on percentage
             }}>
        </div>
        {/* Striped overlay for texture if needed, using CSS patterns */}
        <div className="absolute inset-0 w-full h-full opacity-20" 
             style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '4px 4px' }}>
        </div>
    </div>
  );
};
