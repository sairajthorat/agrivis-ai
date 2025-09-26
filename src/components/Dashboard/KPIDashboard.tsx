import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  BarChart3, 
  TrendingUp, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: string;
  icon: React.ComponentType<any>;
  color: string;
  index: number;
}

const KPICard: React.FC<KPICardProps> = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendValue, 
  icon: Icon, 
  color,
  index 
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <ArrowUpRight className="h-4 w-4" />;
      case 'down': return <ArrowDownRight className="h-4 w-4" />;
      default: return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div
      className="agri-card-glow p-6 relative overflow-hidden"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, ${color}20, transparent)`
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div 
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
          >
            <Icon className="h-6 w-6" style={{ color }} />
          </div>
          <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm font-medium">{trendValue}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Progress indicator */}
        <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const KPIDashboard = () => {
  const kpiData = [
    {
      title: 'Total Farm Area',
      value: '137.5',
      subtitle: 'Acres under cultivation',
      trend: 'stable' as const,
      trendValue: '0%',
      icon: Sprout,
      color: '#10b981'
    },
    {
      title: 'Active Crops',
      value: '5',
      subtitle: 'Different crop varieties',
      trend: 'up' as const,
      trendValue: '+25%',
      icon: BarChart3,
      color: '#3b82f6'
    },
    {
      title: 'Predicted Yield',
      value: '8.2',
      subtitle: 'Tons per hectare',
      trend: 'up' as const,
      trendValue: '+12%',
      icon: TrendingUp,
      color: '#f59e0b'
    },
    {
      title: 'Revenue Forecast',
      value: '₹56.23 Lakh',
      subtitle: 'This season estimate',
      trend: 'up' as const,
      trendValue: '+18%',
      icon: DollarSign,
      color: '#ef4444'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-6" style={{ gridArea: 'kpi' }}>
      {kpiData.map((kpi, index) => (
        <KPICard key={kpi.title} {...kpi} index={index} />
      ))}
    </div>
  );
};

export default KPIDashboard;