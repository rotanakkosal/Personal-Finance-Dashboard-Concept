export interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  icon: 'stripe' | 'figma' | 'loom';
}

export interface ChartDataPoint {
  name: string;
  income: number;
  expense: number;
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}