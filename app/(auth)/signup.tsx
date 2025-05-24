import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function SignUp() {
  const router = useRouter();
  const { register } = useAuth();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    register(email.trim().toLowerCase(), password);
    router.replace('/(tabs)');      // jump straight into the tab stack
  }

  return (
    <View style={s.screen}>
      <Text style={s.title}>Create your account</Text>

      <TextInput
        style={s.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={s.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleSignUp} style={s.btn}>
        <Text style={s.btnText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
        <Text style={s.link}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', padding: 24 },
  title:  { fontSize: 26, fontWeight: '600', marginBottom: 32, textAlign: 'center' },
  input:  { borderWidth: 1, borderColor: '#d0d0d0', borderRadius: 8, padding: 14, marginBottom: 16 },
  btn:    { backgroundColor: '#8494ff', borderRadius: 24, padding: 16, alignItems: 'center', marginTop: 8 },
  btnText:{ color: '#fff', fontWeight: '600' },
  link:   { textAlign: 'center', marginTop: 20, color: '#6c6c6c' },
});
