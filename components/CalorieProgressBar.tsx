/**
 * CalorieProgressBar - Bottom floating bar showing calorie progress
 * Uses Reanimated for smooth 60 FPS number transitions
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { COLORS } from '@/constants/mockData';

// Create Animated Text component
const AnimatedText = Animated.createAnimatedComponent(Text);

interface CalorieProgressBarProps {
  consumed: number;
  goal: number;
  onPress?: () => void;
}

export const CalorieProgressBar: React.FC<CalorieProgressBarProps> = ({
  consumed,
  goal,
  onPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = COLORS[colorScheme ?? 'light'];

  // Animated values for smooth transitions
  const animatedConsumed = useSharedValue(consumed);
  const animatedRemaining = useSharedValue(goal - consumed);

  // Update animated values when props change
  useEffect(() => {
    animatedConsumed.value = withSpring(consumed, {
      damping: 15,
      stiffness: 100,
      mass: 0.5,
    });
    animatedRemaining.value = withSpring(goal - consumed, {
      damping: 15,
      stiffness: 100,
      mass: 0.5,
    });
  }, [consumed, goal, animatedConsumed, animatedRemaining]);

  // Animated props for the calorie text
  const animatedProps = useAnimatedProps(() => {
    const remaining = Math.round(animatedRemaining.value);
    return {
      text: `${remaining.toLocaleString()} cal`,
    } as any;
  });

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: colors.cardBackground,
          borderTopColor: colors.border,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <View style={styles.content}>
        <Text style={[styles.labelText, { color: colors.textSecondary }]}>
          Remaining
        </Text>
        <AnimatedText
          style={[styles.calorieText, { color: colors.text }]}
          animatedProps={animatedProps}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 20,
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: -0.24,
  },
  calorieText: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
});
