import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Get Supabase credentials from environment
const getSupabaseUrl = (): string => {
  const url = Constants.expoConfig?.extra?.supabaseUrl;
  if (!url) {
    throw new Error(
      'Missing SUPABASE_URL environment variable. Please add it to your .env file and app.config.js'
    );
  }
  return url;
};

const getSupabaseAnonKey = (): string => {
  const key = Constants.expoConfig?.extra?.supabaseAnonKey;
  if (!key) {
    throw new Error(
      'Missing SUPABASE_ANON_KEY environment variable. Please add it to your .env file and app.config.js'
    );
  }
  return key;
};

// Initialize Supabase client
const supabaseUrl = getSupabaseUrl();
const supabaseAnonKey = getSupabaseAnonKey();

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // No auth yet, so no session persistence needed
    autoRefreshToken: false,
  },
});

// Database types (will be auto-generated later with `supabase gen types typescript`)
export interface Database {
  public: {
    Tables: {
      meals: {
        Row: {
          id: string;
          device_id: string;
          text: string;
          calories: number;
          protein: number | null;
          carbs: number | null;
          fat: number | null;
          timestamp: string; // ISO timestamp
          ai_explanation: string | null;
          confidence: number | null;
          sources: string[] | null; // JSONB array
          created_at: string;
        };
        Insert: {
          id?: string;
          device_id: string;
          text: string;
          calories: number;
          protein?: number | null;
          carbs?: number | null;
          fat?: number | null;
          timestamp: string;
          ai_explanation?: string | null;
          confidence?: number | null;
          sources?: string[] | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          device_id?: string;
          text?: string;
          calories?: number;
          protein?: number | null;
          carbs?: number | null;
          fat?: number | null;
          timestamp?: string;
          ai_explanation?: string | null;
          confidence?: number | null;
          sources?: string[] | null;
          created_at?: string;
        };
      };
      user_settings: {
        Row: {
          device_id: string;
          daily_calorie_goal: number;
          target_protein: number;
          target_carbs: number;
          target_fat: number;
          meal_reminders: boolean;
          track_water: boolean;
          dark_mode: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          device_id: string;
          daily_calorie_goal?: number;
          target_protein?: number;
          target_carbs?: number;
          target_fat?: number;
          meal_reminders?: boolean;
          track_water?: boolean;
          dark_mode?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          device_id?: string;
          daily_calorie_goal?: number;
          target_protein?: number;
          target_carbs?: number;
          target_fat?: number;
          meal_reminders?: boolean;
          track_water?: boolean;
          dark_mode?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      daily_summaries: {
        Row: {
          id: string;
          device_id: string;
          date: string; // YYYY-MM-DD
          total_calories: number;
          total_protein: number;
          total_carbs: number;
          total_fat: number;
          meal_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          device_id: string;
          date: string;
          total_calories: number;
          total_protein: number;
          total_carbs: number;
          total_fat: number;
          meal_count: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          device_id?: string;
          date?: string;
          total_calories?: number;
          total_protein?: number;
          total_carbs?: number;
          total_fat?: number;
          meal_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
