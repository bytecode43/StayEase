import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  function handleLogin() {
    const ok = login(email.trim().toLowerCase(), password);
    if (ok) {
      router.replace('/(tabs)');
    } else {
      setError('Invalid credentials');
    }
  }

  return (
    <View style={s.screen}>
      <Text style={s.title}>Welcome back!</Text>

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

      {error ? <Text style={s.error}>{error}</Text> : null}

      <TouchableOpacity onPress={handleLogin} style={s.btn}>
        <Text style={s.btnText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
        <Text style={s.link}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', padding: 24 },
  title:  { fontSize: 26, fontWeight: '600', marginBottom: 32, textAlign: 'center' },
  input:  { borderWidth: 1, borderColor: '#d0d0d0', borderRadius: 8, padding: 14, marginBottom: 16 },
  error:  { color: 'red', marginBottom: 8, textAlign: 'center' },
  btn:    { backgroundColor: '#8494ff', borderRadius: 24, padding: 16, alignItems: 'center', marginTop: 8 },
  btnText:{ color: '#fff', fontWeight: '600' },
  link:   { textAlign: 'center', marginTop: 20, color: '#6c6c6c' },
});
