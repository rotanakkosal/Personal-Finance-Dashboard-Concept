import React from 'react';
import { MoreHorizontal, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { MetricCardProps, Transaction } from '../types';

// --- Stat Card ---
export const StatCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive }) => {
  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 font-medium text-sm">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
        <span className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
          isPositive ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
        }`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  );
};

// --- Upcoming Payment Row ---
export const PaymentRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'stripe': return <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">S</div>;
      case 'figma': return <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">F</div>;
      case 'loom': return <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">L</div>;
      default: return <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">?</div>;
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors px-2 rounded-lg">
      <div className="flex items-center gap-4 w-1/4">
        {getIcon(transaction.icon)}
        <span className="font-semibold text-gray-800 text-sm">{transaction.name}</span>
      </div>
      <div className="text-gray-500 text-sm w-1/4">{transaction.date}</div>
      <div className="text-gray-800 font-medium text-sm w-1/4">{transaction.category}</div>
      <div className="font-bold text-gray-800 text-right w-1/4">${transaction.amount}</div>
    </div>
  );
};

// --- My Card (Yellow) ---
export const MyCardWidget: React.FC = () => {
  return (
    <div className="bg-[#EBFD58] rounded-[2rem] p-6 relative overflow-hidden h-full flex flex-col justify-between min-h-[220px]">
      {/* Decorative Swirl */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-48 h-48 opacity-20 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000" d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,90.4,-8.9C89.1,3.5,80.3,15.3,71.3,26.4C62.3,37.5,53.1,47.9,42.5,56.7C31.9,65.5,19.9,72.7,6.8,75.3C-6.3,77.9,-20.5,75.9,-33.6,70.1C-46.7,64.3,-58.7,54.7,-68.2,43.2C-77.7,31.7,-84.7,18.3,-84.3,5.1C-83.9,-8.1,-76.1,-21.1,-67.2,-33.1C-58.3,-45.1,-48.3,-56.1,-36.5,-63.9C-24.7,-71.7,-11.1,-76.3,1.3,-78.4C13.7,-80.5,27.4,-80.1,45.7,-76.3Z" transform="translate(100 100)" />
          </svg>
      </div>

      <div className="flex justify-between items-start z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-800">Debit Card</span>
        <MoreHorizontal size={20} className="text-gray-800 opacity-60" />
      </div>

      <div className="z-10 mt-2">
        <div className="text-sm tracking-widest text-gray-700 font-mono mb-6">**** **** **** 1990</div>
      </div>

      <div className="flex justify-between items-end z-10 mt-auto">
        <div>
           <div className="text-2xl font-bold text-gray-900">$14,569.00</div>
           <div className="text-xs text-gray-700 mt-1">Maicel Handray</div>
        </div>
        <div className="text-xs font-bold text-gray-800">12/05</div>
      </div>
    </div>
  );
};

// --- Connected Account Card ---
export const ConnectedAccountCard: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-5 mb-6 relative">
      <div className="flex justify-between items-start mb-4">
        <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">USD Account</h4>
            <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-indigo-700 rounded text-white text-[8px] flex items-center justify-center font-bold italic">VISA</div>
                <div className="text-sm font-bold text-gray-800">Visa</div>
                <div className="text-xs text-gray-400">**** **** **** 1990</div>
            </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
      </div>
      <div className="flex justify-between items-end">
         <div></div> {/* Spacer */}
         <div className="text-xl font-bold text-gray-800">$28,390.20</div>
      </div>
    </div>
  );
};
