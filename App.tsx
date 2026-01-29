import React, { useState } from 'react';
import { 
  Home, 
  Wallet, 
  CreditCard, 
  FileText, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  MoreHorizontal,
  Plus,
  ChevronDown,
  ChevronRight,
  Filter
} from 'lucide-react';
import { CreditHistoryChart, MiniDonut } from './components/Charts';
import { StatCard, PaymentRow, MyCardWidget, ConnectedAccountCard } from './components/DashboardComponents';
import { Transaction } from './types';

// --- Mock Data ---
const transactions: Transaction[] = [
  { id: '1', name: 'Stripe Pricing', category: 'Payment Links', date: 'Sat, 23 January 1:03 PM', amount: 2.400, icon: 'stripe' },
  { id: '2', name: 'FigJam Membership', category: 'Professional', date: 'Sat, 24 January 1:09 PM', amount: 434, icon: 'figma' },
  { id: '3', name: 'Loom Subscription', category: 'Loom Business', date: 'Sat, 25 January 1:23 PM', amount: 103, icon: 'loom' },
];

// --- Sub-components for Layout ---

const Sidebar = () => (
  <div className="w-24 bg-white border-r border-gray-100 flex flex-col items-center py-8 fixed left-0 top-0 h-full z-10 shadow-sm">
    <div className="mb-12">
      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
        F.
      </div>
    </div>
    
    <nav className="flex flex-col gap-8 w-full items-center">
      <button className="p-3 text-gray-400 hover:text-primary transition-colors"><Home size={24} /></button>
      <button className="p-3 bg-primary text-white rounded-full shadow-lg shadow-purple-200"><Wallet size={24} /></button>
      <button className="p-3 text-gray-400 hover:text-primary transition-colors"><CreditCard size={24} /></button>
      <button className="p-3 text-gray-400 hover:text-primary transition-colors"><FileText size={24} /></button>
      <button className="p-3 text-gray-400 hover:text-primary transition-colors"><Settings size={24} /></button>
    </nav>

    <div className="mt-auto flex flex-col gap-6 items-center">
      <button className="p-3 text-gray-400 hover:text-primary transition-colors"><HelpCircle size={24} /></button>
      <div className="w-10 h-10 rounded-full bg-yellow-400 overflow-hidden border-2 border-white shadow-md">
        <img src="https://picsum.photos/100/100" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="flex justify-between items-center mb-10 pl-2">
    <div className="flex items-center gap-4 text-gray-500">
        <Home size={18} />
        <ChevronRight size={16} />
        <span className="text-gray-800 font-medium">Dashboard</span>
    </div>

    <div className="flex items-center gap-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search everything..." 
          className="pl-12 pr-4 py-3 bg-white rounded-full text-sm w-96 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm text-gray-600 placeholder-gray-400"
        />
      </div>
      
      <button className="relative p-2 bg-white rounded-full shadow-sm text-gray-600">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
      </button>

      <button className="bg-secondary hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-emerald-200 transition-colors">
        Earn $100
      </button>
    </div>
  </header>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pl-24 pr-8 py-6 font-sans">
      <Sidebar />
      <Header />

      <main className="max-w-7xl mx-auto">
        
        {/* Page Title & Controls */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Accounts</h1>
            <div className="flex items-center gap-3">
              <div className="flex bg-white rounded-xl p-1 shadow-sm border border-gray-100 items-center">
                 <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-primary">
                    <Wallet size={16} />
                 </div>
                 <div className="px-3 font-semibold text-gray-700">874</div>
                 <button className="p-1 hover:bg-gray-100 rounded-lg"><ChevronDown size={16} className="text-gray-400" /></button>
              </div>
              <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm border border-gray-100">
                 <Plus size={20} />
              </button>
               <button className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                 <Filter size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2 shadow-sm">
                <Settings size={16} />
                Manage Balance
             </button>
             <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 flex items-center gap-2 shadow-lg">
                <Plus size={16} />
                New Payment
             </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          
          {/* Left Column (Account & Expenses) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            
            {/* Connected Account */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50/50">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800">Connected Account</h3>
                  <button className="text-xs text-gray-500 hover:text-primary flex items-center">
                    View All <ChevronRight size={14} />
                  </button>
               </div>
               <ConnectedAccountCard />
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50/50 flex-1">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800">Expense Breakdown</h3>
                  <button className="text-gray-400"><MoreHorizontal size={20}/></button>
               </div>
               
               <div className="flex justify-between items-end gap-2">
                  <div className="flex flex-col gap-2 items-start">
                     <span className="text-[10px] text-gray-500 font-medium">Subscriptions</span>
                     <span className="text-sm font-bold mb-2">65.8%</span>
                     <MiniDonut percentage={65} color="#FDBA74" trackColor="#FFEDD5" /> {/* Orange */}
                  </div>
                  <div className="flex flex-col gap-2 items-start">
                     <span className="text-[10px] text-gray-500 font-medium">Software</span>
                     <span className="text-sm font-bold mb-2">32%</span>
                     <MiniDonut percentage={32} color="#C4B5FD" trackColor="#EDE9FE" /> {/* Purple */}
                  </div>
                   <div className="flex flex-col gap-2 items-start">
                     <span className="text-[10px] text-gray-500 font-medium">Software</span>
                     <span className="text-sm font-bold mb-2">24.8%</span>
                     <MiniDonut percentage={25} color="#67E8F9" trackColor="#CFFAFE" /> {/* Cyan */}
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column (Credit History Chart) */}
          <div className="col-span-12 lg:col-span-8">
             <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50/50 h-full relative">
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <h3 className="text-gray-400 font-medium text-sm mb-1">Credit History</h3>
                      <div className="flex items-center gap-3">
                         <span className="text-4xl font-bold text-gray-900">$832.920,32</span>
                         <span className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded text-xs font-bold">+1.5%</span>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-purple-200 rounded-sm"></div>
                         <span className="text-xs text-gray-500 font-medium">Current Income</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-primary rounded-sm"></div>
                         <span className="text-xs text-gray-500 font-medium">Current Experience</span>
                      </div>
                      
                      <div className="ml-4 flex items-center bg-gray-50 rounded-lg p-1">
                         <button className="px-3 py-1.5 bg-white text-xs font-bold rounded-md shadow-sm border border-gray-100 flex items-center gap-2">
                            Bar chart
                         </button>
                         <button className="px-3 py-1.5 text-gray-400 text-xs hover:text-gray-600">
                            <Filter size={14} />
                         </button>
                      </div>
                   </div>
                </div>

                <CreditHistoryChart />
             </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-6">
           
           {/* Stats Row */}
           <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-6">
                 <StatCard title="Monthly Income" value="$78,821.88" change="1.5" isPositive={true} />
                 <StatCard title="Monthly Experience" value="$16,325.23" change="1.5" isPositive={true} />
                 <StatCard title="Monthly Savings" value="$11,235.14" change="1.5" isPositive={true} />
              </div>

              {/* Upcoming Payments List */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50/50">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-800">Upcoming Payment</h3>
                    <button className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800">View All</button>
                 </div>
                 <div className="flex flex-col">
                    {transactions.map(t => (
                       <PaymentRow key={t.id} transaction={t} />
                    ))}
                 </div>
              </div>
           </div>

           {/* My Cards Section */}
           <div className="col-span-12 lg:col-span-4">
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50/50 h-full flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-800">My Cards</h3>
                    <button className="text-gray-400"><MoreHorizontal size={20}/></button>
                 </div>

                 <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900">3 Cards Active</h4>
                    <p className="text-gray-400 text-sm mt-1">Integration your card Fanin</p>
                 </div>

                 {/* Card Widget & Add Button Container */}
                 <div className="flex gap-4 h-full">
                    {/* Add Button Area (Left) */}
                    <div className="flex flex-col justify-end w-1/3 gap-2">
                        <p className="text-[10px] text-gray-400 underline cursor-pointer mb-2">Check Card's availability here</p>
                        <button className="w-full py-3 bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors rounded-xl flex items-center justify-center gap-2 text-xs font-bold">
                           <Plus size={14} />
                           Add New Card
                        </button>
                    </div>

                    {/* The Yellow Card (Right) */}
                    <div className="flex-1 min-w-0">
                       <MyCardWidget />
                    </div>
                 </div>
              </div>
           </div>

        </div>

      </main>
    </div>
  );
};

export default App;