import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

type Props = {
  options: string[];
  selected: string;
  onSelect: (opt: string) => void;
};

export default function FilterTabs({ options, selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {options.map((opt) => {
        const active = opt === selected;
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => onSelect(opt)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 16 },
  tab: {
    flex: 1,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: { backgroundColor: theme.primary, borderColor: theme.primary },
  label: { fontSize: 14, color: theme.textPrimary },
  labelActive: { color: '#FFFFFF' },
});
