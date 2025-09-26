// Comprehensive Mock Data for AgriVision AI Dashboard

export interface CropData {
  id: string;
  name: string;
  area: number;
  predictedYield: number;
  actualYield?: number;
  healthScore: number;
  growthStage: string;
  daysToHarvest: number;
  riskLevel: 'low' | 'medium' | 'high';
  ndviValue: number;
  revenue: number;
  trend: 'up' | 'down' | 'stable';
}

export interface WeatherData {
  date: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  pressure: number;
  condition: string;
  icon: string;
}

export interface SoilData {
  fieldId: string;
  ph: number;
  moisture: number;
  organicMatter: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  conductivity: number;
}

export interface EquipmentData {
  id: string;
  name: string;
  type: string;
  status: 'operational' | 'maintenance' | 'offline';
  efficiency: number;
  lastMaintenance: string;
  location: { lat: number; lng: number };
  fuelLevel?: number;
  hoursUsed: number;
}

export interface AlertData {
  id: string;
  type: 'irrigation' | 'pest' | 'weather' | 'equipment' | 'harvest';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  timestamp: string;
  resolved: boolean;
  fieldId?: string;
  recommendations: string[];
}

// Mock Crop Data
export const mockCropData: CropData[] = [
  {
    id: '1',
    name: 'Corn',
    area: 45.2,
    predictedYield: 8.5,
    actualYield: 8.2,
    healthScore: 94,
    growthStage: 'Flowering',
    daysToHarvest: 45,
    riskLevel: 'low',
    ndviValue: 0.78,
    revenue: 38250,
    trend: 'up'
  },
  {
    id: '2',
    name: 'Soybeans',
    area: 32.8,
    predictedYield: 3.2,
    actualYield: 3.1,
    healthScore: 88,
    growthStage: 'Pod Development',
    daysToHarvest: 62,
    riskLevel: 'medium',
    ndviValue: 0.72,
    revenue: 29200,
    trend: 'up'
  },
  {
    id: '3',
    name: 'Wheat',
    area: 28.5,
    predictedYield: 4.8,
    healthScore: 91,
    growthStage: 'Grain Filling',
    daysToHarvest: 28,
    riskLevel: 'low',
    ndviValue: 0.75,
    revenue: 22800,
    trend: 'stable'
  },
  {
    id: '4',
    name: 'Cotton',
    area: 18.7,
    predictedYield: 1.8,
    healthScore: 85,
    growthStage: 'Boll Development',
    daysToHarvest: 78,
    riskLevel: 'medium',
    ndviValue: 0.68,
    revenue: 25600,
    trend: 'down'
  },
  {
    id: '5',
    name: 'Tomatoes',
    area: 12.3,
    predictedYield: 42.5,
    healthScore: 96,
    growthStage: 'Fruit Development',
    daysToHarvest: 21,
    riskLevel: 'low',
    ndviValue: 0.82,
    revenue: 52300,
    trend: 'up'
  }
];

// Mock Weather Data (7-day forecast)
export const mockWeatherData: WeatherData[] = [
  {
    date: '2025-01-20',
    temperature: 24,
    humidity: 68,
    rainfall: 0,
    windSpeed: 12,
    pressure: 1015,
    condition: 'Sunny',
    icon: '☀️'
  },
  {
    date: '2025-01-21',
    temperature: 26,
    humidity: 72,
    rainfall: 2.5,
    windSpeed: 8,
    pressure: 1012,
    condition: 'Light Rain',
    icon: '🌦️'
  },
  {
    date: '2025-01-22',
    temperature: 22,
    humidity: 78,
    rainfall: 12.3,
    windSpeed: 15,
    pressure: 1008,
    condition: 'Heavy Rain',
    icon: '🌧️'
  },
  {
    date: '2025-01-23',
    temperature: 25,
    humidity: 65,
    rainfall: 0,
    windSpeed: 10,
    pressure: 1018,
    condition: 'Partly Cloudy',
    icon: '⛅'
  },
  {
    date: '2025-01-24',
    temperature: 27,
    humidity: 62,
    rainfall: 0,
    windSpeed: 14,
    pressure: 1020,
    condition: 'Sunny',
    icon: '☀️'
  },
  {
    date: '2025-01-25',
    temperature: 28,
    humidity: 58,
    rainfall: 0,
    windSpeed: 16,
    pressure: 1022,
    condition: 'Clear',
    icon: '☀️'
  },
  {
    date: '2025-01-26',
    temperature: 29,
    humidity: 60,
    rainfall: 1.2,
    windSpeed: 11,
    pressure: 1019,
    condition: 'Light Clouds',
    icon: '🌤️'
  }
];

// Mock Soil Data
export const mockSoilData: SoilData[] = [
  {
    fieldId: 'field-1',
    ph: 6.8,
    moisture: 42,
    organicMatter: 3.2,
    nitrogen: 28,
    phosphorus: 35,
    potassium: 180,
    temperature: 18.5,
    conductivity: 0.8
  },
  {
    fieldId: 'field-2',
    ph: 7.1,
    moisture: 38,
    organicMatter: 2.9,
    nitrogen: 32,
    phosphorus: 42,
    potassium: 165,
    temperature: 19.2,
    conductivity: 0.9
  },
  {
    fieldId: 'field-3',
    ph: 6.5,
    moisture: 45,
    organicMatter: 3.5,
    nitrogen: 25,
    phosphorus: 38,
    potassium: 195,
    temperature: 17.8,
    conductivity: 0.7
  }
];

// Mock Equipment Data
export const mockEquipmentData: EquipmentData[] = [
  {
    id: 'tractor-1',
    name: 'John Deere 8R 370',
    type: 'Tractor',
    status: 'operational',
    efficiency: 94,
    lastMaintenance: '2025-01-15',
    location: { lat: 40.7128, lng: -74.0060 },
    fuelLevel: 78,
    hoursUsed: 234
  },
  {
    id: 'harvester-1',
    name: 'Case IH Axial-Flow 9250',
    type: 'Harvester',
    status: 'operational',
    efficiency: 91,
    lastMaintenance: '2025-01-10',
    location: { lat: 40.7589, lng: -73.9851 },
    fuelLevel: 45,
    hoursUsed: 156
  },
  {
    id: 'irrigation-1',
    name: 'Valley Pivot System',
    type: 'Irrigation',
    status: 'operational',
    efficiency: 98,
    lastMaintenance: '2025-01-08',
    location: { lat: 40.7282, lng: -74.0776 },
    hoursUsed: 2840
  },
  {
    id: 'drone-1',
    name: 'DJI Agras T30',
    type: 'Drone',
    status: 'maintenance',
    efficiency: 87,
    lastMaintenance: '2025-01-18',
    location: { lat: 40.7505, lng: -73.9934 },
    hoursUsed: 89
  }
];

// Mock Alert Data
export const mockAlerts: AlertData[] = [
  {
    id: 'alert-1',
    type: 'irrigation',
    severity: 'high',
    title: 'Low Soil Moisture Detected',
    description: 'Field-2 showing moisture levels below optimal range (38%). Immediate irrigation recommended.',
    timestamp: '2025-01-20T08:30:00Z',
    resolved: false,
    fieldId: 'field-2',
    recommendations: [
      'Activate irrigation system immediately',
      'Monitor moisture levels every 2 hours',
      'Check for irrigation system leaks'
    ]
  },
  {
    id: 'alert-2',
    type: 'pest',
    severity: 'medium',
    title: 'Pest Activity Detected',
    description: 'Increased insect activity observed in corn field via drone surveillance.',
    timestamp: '2025-01-20T06:15:00Z',
    resolved: false,
    fieldId: 'field-1',
    recommendations: [
      'Deploy targeted pesticide application',
      'Increase monitoring frequency',
      'Coordinate with entomologist'
    ]
  },
  {
    id: 'alert-3',
    type: 'weather',
    severity: 'medium',
    title: 'Heavy Rain Forecast',
    description: 'Severe weather expected tomorrow with 12.3mm rainfall. Prepare for field protection.',
    timestamp: '2025-01-20T05:45:00Z',
    resolved: false,
    recommendations: [
      'Secure loose equipment',
      'Delay planned harvesting',
      'Check drainage systems'
    ]
  },
  {
    id: 'alert-4',
    type: 'equipment',
    severity: 'low',
    title: 'Scheduled Maintenance Due',
    description: 'Drone-1 requires routine maintenance check.',
    timestamp: '2025-01-19T14:20:00Z',
    resolved: false,
    recommendations: [
      'Schedule maintenance appointment',
      'Ground drone until inspection',
      'Update maintenance logs'
    ]
  }
];

// Historical Yield Data for Charts
export const mockHistoricalYield = [
  { month: 'Jan', predicted: 6.2, actual: 6.0, year2023: 5.8 },
  { month: 'Feb', predicted: 6.5, actual: 6.3, year2023: 6.1 },
  { month: 'Mar', predicted: 7.1, actual: 6.9, year2023: 6.5 },
  { month: 'Apr', predicted: 7.8, actual: 7.6, year2023: 7.2 },
  { month: 'May', predicted: 8.2, actual: 8.0, year2023: 7.8 },
  { month: 'Jun', predicted: 8.8, actual: 8.5, year2023: 8.2 },
  { month: 'Jul', predicted: 9.1, actual: 8.9, year2023: 8.6 },
  { month: 'Aug', predicted: 8.9, actual: 8.7, year2023: 8.4 },
  { month: 'Sep', predicted: 8.4, actual: 8.2, year2023: 7.9 },
  { month: 'Oct', predicted: 7.8, actual: 7.6, year2023: 7.3 },
  { month: 'Nov', predicted: 7.2, actual: 7.0, year2023: 6.8 },
  { month: 'Dec', predicted: 6.8, actual: 6.6, year2023: 6.4 }
];

// Environmental Data for Charts
export const mockEnvironmentalData = [
  { date: '2025-01-14', temperature: 22, humidity: 65, soilMoisture: 42, rainfall: 0 },
  { date: '2025-01-15', temperature: 24, humidity: 68, soilMoisture: 40, rainfall: 2.1 },
  { date: '2025-01-16', temperature: 26, humidity: 72, soilMoisture: 38, rainfall: 0 },
  { date: '2025-01-17', temperature: 25, humidity: 70, soilMoisture: 36, rainfall: 0 },
  { date: '2025-01-18', temperature: 23, humidity: 74, soilMoisture: 45, rainfall: 8.3 },
  { date: '2025-01-19', temperature: 21, humidity: 78, soilMoisture: 48, rainfall: 12.5 },
  { date: '2025-01-20', temperature: 24, humidity: 68, soilMoisture: 42, rainfall: 0 }
];