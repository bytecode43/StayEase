import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { theme } from '../constants/theme';

export type Hotel = {
  id: string;
  title: string;
  price: number;
  location: string;
  rating: number;
  image: ImageSourcePropType;
};

type Props = { hotel: Hotel; horizontal?: boolean };

export default function HotelCard({ hotel, horizontal = false }: Props) {
  return (
    <TouchableOpacity style={[styles.card, horizontal && styles.cardHorizontal]}>
      <Image
        source={hotel.image}
        style={[styles.image, horizontal && styles.imageHorizontal]}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {hotel.title}
        </Text>
        <Text style={styles.location}>{hotel.location}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>${hotel.price}/night</Text>
          <Text style={styles.rating}>⭐ {hotel.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    borderRadius: 12,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    marginRight: 16,
    elevation: 2,
  },
  cardHorizontal: { width: 250 },
  image: { width: '100%', height: 120 },
  imageHorizontal: { height: 140 },
  info: { padding: 8 },
  title: { fontSize: 16, fontWeight: '600', color: theme.textPrimary },
  location: { fontSize: 12, color: theme.textSecondary, marginVertical: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 14, fontWeight: '700', color: theme.primary },
  rating: { fontSize: 14, color: theme.textSecondary },
});
