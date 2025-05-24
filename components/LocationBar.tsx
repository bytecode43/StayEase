import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/constants/theme';

type Props = {
  location: string;
  onPressBell: () => void;
};

export default function LocationBar({ location, onPressBell }: Props) {
  return (
    <View style={styles.bar}>
      <View style={styles.left}>
        <Ionicons name="location-outline" size={20} color={theme.primary} />
        <Text style={styles.text}>{location}</Text>
      </View>
      <TouchableOpacity onPress={onPressBell} style={styles.bell}>
        <Ionicons name="notifications-outline" size={24} color={theme.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  text: { marginLeft: 6, fontSize: 16, fontWeight: '500', color: theme.textPrimary },
  bell: { padding: 4 },
});
