import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { mockCropData } from '../../data/mockData';

const CropPredictions = () => {
  const topCrop = mockCropData[0]; // Corn - highest performing
  const confidenceScore = 94;
  const riskFactors = [
    { factor: 'Weather Stability', level: 'low', score: 92 },
    { factor: 'Pest Pressure', level: 'medium', score: 78 },
    { factor: 'Soil Health', level: 'low', score: 96 },
    { factor: 'Market Volatility', level: 'low', score: 89 }
  ];

  const recommendations = [
    'Increase nitrogen application by 15% for optimal growth',
    'Schedule pest monitoring for mid-season protection',
    'Implement precision irrigation in south fields',
    'Consider early harvest window for premium pricing'
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <motion.div
      className="agri-card-glow p-6 space-y-6"
      style={{ gridArea: 'predictions' }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">AI Crop Predictions</h3>
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-400" />
          <span className="text-sm text-purple-400 font-medium">ML Model v2.1</span>
        </div>
      </div>

      {/* Primary Prediction Card */}
      <motion.div
        className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-foreground">{topCrop.name}</h4>
            <p className="text-sm text-muted-foreground">Primary Crop Focus</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-400">{topCrop.predictedYield} t/ha</p>
            <p className="text-sm text-muted-foreground">Predicted Yield</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Growth Stage:</span>
            <span className="ml-2 font-medium text-foreground">{topCrop.growthStage}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Days to Harvest:</span>
            <span className="ml-2 font-medium text-foreground">{topCrop.daysToHarvest} days</span>
          </div>
        </div>
      </motion.div>

      {/* Confidence Score */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">ML Model Confidence</span>
          <span className="text-lg font-bold text-foreground">{confidenceScore}%</span>
        </div>
        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${confidenceScore}%` }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Shield className="h-5 w-5 mr-2 text-blue-400" />
          Risk Assessment Matrix
        </h4>
        <div className="space-y-3">
          {riskFactors.map((risk, index) => (
            <motion.div
              key={risk.factor}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
            >
              <span className="text-sm font-medium text-foreground">{risk.factor}</span>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">{risk.score}%</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskColor(risk.level)}`}>
                  {risk.level.toUpperCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Target className="h-5 w-5 mr-2 text-amber-400" />
          AI Recommendations
        </h4>
        <div className="space-y-2">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.9 }}
            >
              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{recommendation}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CropPredictions;