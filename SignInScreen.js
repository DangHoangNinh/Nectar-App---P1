// screens/SignInScreen.js
import React from 'react';
import { View, Text, TextInput, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh nền */}
      <ImageBackground
        source={require('../assets/signin.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      />

      {/* Nội dung */}
      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries</Text>
        <Text style={styles.title}>with nectar</Text>

        {/* Ô nhập số điện thoại */}
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => navigation.navigate('EnterNumber')}
        >
          <Image source={require('../assets/flag-VietNam.png')}
           style={styles.flag} />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your number"
            keyboardType="phone-pad"
            editable={false}
          />
        </TouchableOpacity>

        {/* Dòng ngăn cách */}
        <Text style={styles.orText}>Or connect with social media</Text>

        {/* Nút đăng nhập bằng Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={20} color="white" />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Nút đăng nhập bằng Facebook */}
        <TouchableOpacity style={styles.facebookButton}>
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: '40%',
    marginTop: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '85%',
    height: 50,
    marginTop: 20,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#A1A1A1',
  },
  orText: {
    marginVertical: 20,
    fontSize: 14,
    color: '#A1A1A1',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4A73E8',
    width: '85%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#3B5998',
    width: '85%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignInScreen;
