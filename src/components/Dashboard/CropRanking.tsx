import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, TrendingUp } from 'lucide-react';
import { mockCropData } from '../../data/mockData';

const CropRanking = () => {
  const sortedCrops = [...mockCropData]
    .sort((a, b) => b.healthScore - a.healthScore)
    .slice(0, 5);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="h-5 w-5 text-yellow-400" />;
      case 1: return <Medal className="h-5 w-5 text-gray-300" />;
      case 2: return <Award className="h-5 w-5 text-amber-600" />;
      default: return <Star className="h-4 w-4 text-blue-400" />;
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-400';
    if (score >= 80) return 'from-blue-500 to-cyan-400';
    if (score >= 70) return 'from-yellow-500 to-amber-400';
    return 'from-red-500 to-orange-400';
  };

  return (
    <motion.div
      className="agri-card-glow p-6"
      style={{ gridArea: 'ranking' }}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Top Performing Crops</h3>
        <TrendingUp className="h-5 w-5 text-green-400" />
      </div>

      <div className="space-y-4">
        {sortedCrops.map((crop, index) => (
          <motion.div
            key={crop.id}
            className="flex items-center space-x-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            whileHover={{ x: 5 }}
          >
            {/* Rank Icon */}
            <div className="flex-shrink-0">
              {getRankIcon(index)}
            </div>

            {/* Crop Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground truncate">{crop.name}</h4>
                <span className="text-sm font-bold text-foreground">{crop.healthScore}</span>
              </div>
              
              {/* Health Score Progress */}
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${getHealthColor(crop.healthScore)} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${crop.healthScore}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
                />
              </div>
              
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>{crop.area} acres</span>
                <span>{crop.growthStage}</span>
              </div>
            </div>

            {/* NDVI Indicator */}
            <div className="flex-shrink-0 text-right">
              <div className="text-sm font-medium text-foreground">
                NDVI: {crop.ndviValue.toFixed(2)}
              </div>
              <div className={`text-xs ${
                crop.ndviValue > 0.7 ? 'text-green-400' : 
                crop.ndviValue > 0.6 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {crop.ndviValue > 0.7 ? 'Excellent' : 
                 crop.ndviValue > 0.6 ? 'Good' : 'Needs Attention'}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Average Health Score</span>
          <span className="font-bold text-green-400">
            {(sortedCrops.reduce((acc, crop) => acc + crop.healthScore, 0) / sortedCrops.length).toFixed(1)}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CropRanking;