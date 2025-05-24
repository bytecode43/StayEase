// app/(tabs)/profile.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const router = useRouter();
  const { logout } = useAuth();

  function handleLogout() {
    logout();             // wipe in-memory user
    router.replace('/login');   // jump into the auth stack
  }

  return (
    <SafeAreaView style={[styles.screen, { paddingTop: insets.top + 16 }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={Colors.light.textPrimary}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarPlaceholder} />
        {/* <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity> */}
      </View>

      {/* Name */}
      <Text style={styles.name}>Tester</Text>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Your Email</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="mail-outline"
            size={20}
            color={Colors.light.textSecondary}
          />
          <TextInput
            style={styles.input}
            placeholder="xxx@gmail.com"
            placeholderTextColor={Colors.light.textSecondary}
            editable={false}
          />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="call-outline"
            size={20}
            color={Colors.light.textSecondary}
          />
          <TextInput
            style={styles.input}
            placeholder="+93123135"
            placeholderTextColor={Colors.light.textSecondary}
            keyboardType="phone-pad"
            editable={false}
          />
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.textPrimary,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E0E0E0',
  },
  editIcon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: Colors.light.secondary,
    borderRadius: 16,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.light.textPrimary,
    marginBottom: 32,
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 19,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.light.textPrimary,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: Colors.light.textPrimary,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: Colors.light.secondary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.secondary,
  },
});
