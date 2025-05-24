import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';

export default function HotelDetailsScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back" size={24} color={Colors.light.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hotel Detail Screen</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Buttons */}
   

        {/* Image */}
        <Image
          source={require('../assets/images/hotel1.png')}
          // source={require('../../assets/images/hotel1.png')}

          style={styles.mainImage}
        />

        {/* Tags & Rating */}
        <View style={styles.tagRow}>
          <View style={styles.tag}><Text style={styles.tagText}>Free Wifi</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Free Breakfast</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>⭐ 5.0</Text></View>
        </View>

        {/* Title, Location, Price */}
        <View style={styles.detailsSection}>
          <Text style={styles.title}>The Aston Vill Hotel</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color={Colors.light.textSecondary} />
            <Text style={styles.locationText}>Alice Springs NT 0870, Australia</Text>
          </View>
          <Text style={styles.price}>$200.7 <Text style={styles.perNight}>/night</Text></Text>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. Elegant 5 star hotel overlooking the sea. Perfect for a romantic, charming <Text style={styles.readMore}>Read More...</Text>
        </Text>

        {/* Preview Images */}
        <Text style={styles.sectionTitle}>Preview</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.previewRow}>
          {[1, 2, 3].map((i) => (
            <Image
              key={i}
              source={require(`../assets/images/hotel1.png`)}
              // source={require(`../../assets/images/hotel1.png`)}

              style={styles.previewImage}
            />
          ))}
        </ScrollView>
      </ScrollView>

      {/* Booking Button */}
      <TouchableOpacity style={styles.bookingButton}>
        <Text style={styles.bookingText}>Booking Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,      // increased gap after header
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.textPrimary,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  iconButton: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 10,
  },
  mainImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 12,
    marginVertical: 16,
  },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#F4F4F4',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    color: Colors.light.textPrimary,
  },
  detailsSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: Colors.light.textPrimary,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    marginLeft: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.light.tint,
  },
  perNight: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.textPrimary,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  readMore: {
    color: Colors.light.tint,
  },
  previewRow: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  previewImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  bookingButton: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  bookingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});