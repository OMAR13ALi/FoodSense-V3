/**
 * Mock data for Phase 1 UI implementation
 */

import { MealEntry, UserSettings } from '@/types';

// Default user settings
export const DEFAULT_SETTINGS: UserSettings = {
  dailyCalorieGoal: 2000,
  targetProtein: 150,
  targetCarbs: 250,
  targetFat: 65,
  mealReminders: false,
  trackWater: true,
  darkMode: false,
};

// Sample meal entries for initial state
export const SAMPLE_MEALS: MealEntry[] = [
  {
    id: '1',
    text: 'Chicken breast with rice and vegetables',
    calories: 520,
    protein: 45,
    carbs: 58,
    fat: 8,
    timestamp: new Date(new Date().setHours(12, 30, 0, 0)),
  },
  {
    id: '2',
    text: 'Greek yogurt with berries and granola',
    calories: 280,
    protein: 18,
    carbs: 42,
    fat: 6,
    timestamp: new Date(new Date().setHours(8, 15, 0, 0)),
  },
  {
    id: '3',
    text: 'Salmon salad with olive oil dressing',
    calories: 450,
    protein: 35,
    carbs: 12,
    fat: 28,
    timestamp: new Date(new Date().setHours(18, 45, 0, 0)),
  },
];

// Emoji indicators for macros
export const MACRO_EMOJIS = {
  calories: '🔥',
  protein: '🥩',
  carbs: '🥖',
  fat: '💧',
  water: '💧',
  meals: '🍽️',
};

// Loading state emojis for search animation
export const LOADING_EMOJIS = ['🔍', '🤔', '💭', '🧠', '✨'];

// Color palette - Apple Notes inspired design
export const COLORS = {
  light: {
    background: '#FDFCF9',        // Warm off-white (main screen)
    cardBackground: '#FFFFFF',     // Pure white cards
    primary: '#FFD60A',           // Apple yellow
    secondary: '#F5F5DC',         // Warm beige
    text: '#1C1C1E',              // Apple dark gray
    textSecondary: '#8E8E93',     // Apple medium gray
    border: '#E5E5EA',            // Apple light gray
    success: '#34C759',           // Apple green
    warning: '#FF9500',           // Apple orange
    error: '#FF3B30',             // Apple red
    caloriePositive: '#FF9500',   // Orange for calories
    shadow: 'rgba(0, 0, 0, 0.04)', // Very subtle shadows
    placeholder: '#C7C7CC',       // Apple placeholder gray
  },
  dark: {
    background: '#000000',        // True black (Apple style)
    cardBackground: '#1C1C1E',    // Dark gray cards
    primary: '#FFD60A',           // Apple yellow
    secondary: '#2C2C2E',         // Dark gray
    text: '#FFFFFF',              // White text
    textSecondary: '#98989D',     // Medium gray
    border: '#38383A',            // Dark border
    success: '#30D158',           // Apple green (dark)
    warning: '#FF9F0A',           // Apple orange (dark)
    error: '#FF453A',             // Apple red (dark)
    caloriePositive: '#FF9F0A',   // Orange for calories
    shadow: 'rgba(0, 0, 0, 0.3)', // Darker shadows
    placeholder: '#48484A',       // Dark placeholder
  },
};
