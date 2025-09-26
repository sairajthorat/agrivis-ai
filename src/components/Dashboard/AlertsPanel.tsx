import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Droplets, 
  Bug, 
  CloudRain, 
  Settings, 
  Download,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { mockAlerts } from '../../data/mockData';

const AlertsPanel = () => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'irrigation': return <Droplets className="h-5 w-5" />;
      case 'pest': return <Bug className="h-5 w-5" />;
      case 'weather': return <CloudRain className="h-5 w-5" />;
      case 'equipment': return <Settings className="h-5 w-5" />;
      default: return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-500/10 text-red-400';
      case 'high': return 'border-orange-500 bg-orange-500/10 text-orange-400';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10 text-yellow-400';
      case 'low': return 'border-blue-500 bg-blue-500/10 text-blue-400';
      default: return 'border-gray-500 bg-gray-500/10 text-gray-400';
    }
  };

  const activeAlerts = mockAlerts.filter(alert => !alert.resolved);
  const exportOptions = [
    { label: 'Weekly Report', icon: FileText, format: 'PDF' },
    { label: 'Yield Analysis', icon: Download, format: 'Excel' },
    { label: 'Field Summary', icon: Calendar, format: 'CSV' }
  ];

  return (
    <motion.div
      className="grid grid-cols-3 gap-6"
      style={{ gridArea: 'alerts' }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* Smart Alerts */}
      <motion.div
        className="agri-card-glow p-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Smart Alerts</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full pulse-glow" />
            <span className="text-sm text-red-400 font-medium">{activeAlerts.length}</span>
          </div>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto">
          {activeAlerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              className={`p-4 rounded-xl border-l-4 ${getSeverityColor(alert.severity)}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground truncate">
                    {alert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                      <span>View</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Center */}
      <motion.div
        className="agri-card-glow p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Action Center</h3>
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Start Irrigation', icon: Droplets, color: '#3b82f6', urgent: true },
            { label: 'Schedule Spray', icon: Bug, color: '#f59e0b', urgent: false },
            { label: 'Check Sensors', icon: Settings, color: '#10b981', urgent: false },
            { label: 'Weather Alert', icon: CloudRain, color: '#ef4444', urgent: true }
          ].map((action, index) => (
            <motion.button
              key={action.label}
              className={`p-4 rounded-xl border transition-all hover:scale-105 ${
                action.urgent ? 'border-orange-500/50 bg-orange-500/10' : 'border-secondary bg-secondary/30'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.9 }}
              whileTap={{ scale: 0.95 }}
            >
              <action.icon 
                className="h-6 w-6 mx-auto mb-2" 
                style={{ color: action.color }} 
              />
              <p className="text-xs font-medium text-foreground text-center">
                {action.label}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 pt-4 border-t border-secondary">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-green-400">12</p>
              <p className="text-xs text-muted-foreground">Tasks Today</p>
            </div>
            <div>
              <p className="text-lg font-bold text-blue-400">98%</p>
              <p className="text-xs text-muted-foreground">System Health</p>
            </div>
            <div>
              <p className="text-lg font-bold text-amber-400">3</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Export Center */}
      <motion.div
        className="agri-card-glow p-6"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Export Center</h3>
          <Download className="h-5 w-5 text-purple-400" />
        </div>

        <div className="space-y-3">
          {exportOptions.map((option, index) => (
            <motion.button
              key={option.label}
              className="w-full p-4 rounded-xl border border-secondary bg-secondary/20 hover:bg-secondary/40 transition-all text-left"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 1.0 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <option.icon className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.format} Format</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Recent Downloads */}
        <div className="mt-6 pt-4 border-t border-secondary">
          <p className="text-sm font-medium text-muted-foreground mb-3">Recent Downloads</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Yield Report Q4</span>
              <span className="text-green-400">Downloaded</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Soil Analysis</span>
              <span className="text-green-400">Downloaded</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AlertsPanel;