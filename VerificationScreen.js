// screens/VerificationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={28} color='#333' />
      </TouchableOpacity>

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.label}>Code</Text>
        <TextInput
          style={styles.input}
          placeholder='- - - -'
          keyboardType='numeric'
          value={code}
          onChangeText={setCode}
          maxLength={4}
        />

        <TouchableOpacity>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Ionicons name='arrow-forward-circle' size={80} color='#53B175' />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    textAlign: 'left',
    marginBottom: 20,
  },
  resend: {
    color: '#53B175',
    fontSize: 16,
    marginTop: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 80,
    height: 80,
  },
});