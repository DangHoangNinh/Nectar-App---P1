// screens/EnterNumberScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EnterNumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

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
        <Text style={styles.title}>Enter your mobile number</Text>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/flag-VietNam.png')}
                     style={styles.flag} />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter phone number'
            keyboardType='phone-pad'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.nextButton, phoneNumber.length < 10 && styles.disabledButton]}
        onPress={() => navigation.navigate('Verification')}
        disabled={phoneNumber.length < 10}
      >
        <Ionicons name='arrow-forward' size={32} color='white' />
      </TouchableOpacity>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 14,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
  },
  flag: {
    width: 32,
    height: 22,
    borderRadius: 4,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#53B175',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  disabledButton: {
    backgroundColor: '#A5D6A7',
  },
});
