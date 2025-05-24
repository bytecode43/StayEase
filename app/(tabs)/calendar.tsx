// app/(tabs)/calendar.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import Ionicons from '@expo/vector-icons/Ionicons';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

// Sample schedule data
const scheduleItems = [
  {
    id: '1',
    title: 'The Aston Vill Hotel',
    date: '19 March 2024',
    price: '200.7',
    image: require('../../assets/images/hotel1.png'),
  },
  {
    id: '2',
    title: 'Golden Palace Hotel',
    date: '25 March 2024',
    price: '175.9',
    image: require('../../assets/images/hotel2.png'),
  },
];

export default function CalendarScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.screen}>
      {/* Header */}
      <View style={[styles.header]}>        
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color={Colors.light.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color={Colors.light.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Calendar Widget */}
      <View style={styles.calendarContainer}>
        <Calendar
          monthFormat="MMMM yyyy"
          firstDay={1}
          hideExtraDays={false}
          onDayPress={day => console.log('selected', day)}
          style={styles.calendar}
          theme={{
            backgroundColor: Colors.light.background,
            calendarBackground: Colors.light.background,
            textSectionTitleColor: Colors.light.textSecondary,
            selectedDayBackgroundColor: Colors.light.primary,
            selectedDayTextColor: '#fff',
            todayTextColor: Colors.light.primary,
            dayTextColor: Colors.light.textPrimary,
            textDisabledColor: '#ccc',
            arrowColor: Colors.light.primary,
            monthTextColor: Colors.light.textPrimary,
          }}
        />
      </View>

      {/* My Schedule Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Schedule</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Scheduled Items List */}
      <ScrollView contentContainerStyle={styles.list}>
        {scheduleItems.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.row}>
                <IconSymbol name="calendar" size={16} color={Colors.light.textSecondary} />
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.price}>${item.price}/night</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color={Colors.light.textSecondary} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: Colors.light.background,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.textPrimary,
  },
  calendarContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  calendar: {
    borderRadius: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.textPrimary,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.primary,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.textPrimary,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  date: {
    marginLeft: 4,
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.primary,
  },
});
