// app/(tabs)/index.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LocationBar from '@/components/LocationBar';
import FilterTabs from '@/components/FilterTabs';
import HotelCard, { Hotel } from '@/components/HotelCard';
import { Colors } from '@/constants/Colors';

const sample: Hotel[] = [
  {
    id: '1',
    title: 'The Aston Vill Hotel',
    price: 200.7,
    location: 'Alice Springs NT 0870',
    rating: 5,
    image: require('../../assets/images/icon.png'),
  },
  {
    id: '2',
    title: 'Golden Palace Hotel',
    price: 175.9,
    location: 'Northern Territory, Australia',
    rating: 4.8,
    image: require('../../assets/images/icon.png'),
  },
];

export default function HomeScreen() {
  const [filter, setFilter] = useState('Hotel');
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[styles.screen, { paddingTop: insets.top + 16 }]}
    >
      <View style={styles.container}>
        {/* -- Location + Bell -- */}
        <LocationBar
          location="Wallace, Australia"
          onPressBell={() => {}}
          style={styles.locationBar}
        />

        {/* -- Filter Pills -- */}
        <FilterTabs
          options={['Hotel', 'Homestay', 'Apart']}
          selected={filter}
          onSelect={setFilter}
          style={styles.filterTabs}
        />

        {/* -- Near Location Section -- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Near Location</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {sample.map((h, i) => (
            <HotelCard
              key={h.id}
              hotel={h}
              horizontal
              style={{ marginRight: i === sample.length - 1 ? 0 : 16 }}
            />
          ))}
        </ScrollView>

        {/* -- Popular Hotel Section -- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Hotel</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.verticalList}>
          {sample.slice(0, 1).map((h) => (
            <HotelCard key={h.id} hotel={h} style={styles.verticalCard} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  locationBar: {
    marginBottom: 16,
  },
  filterTabs: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  horizontalList: {
    paddingVertical: 8,
  },
  verticalList: {
    flex: 1,
  },
  verticalCard: {
    marginBottom: 16,
  },
});
