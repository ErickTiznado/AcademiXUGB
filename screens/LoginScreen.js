import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const { height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/LoginPersonaje.png')} style={styles.mascot} />
        <Text style={styles.headerText}>Inicia sesión para comenzar</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Inicia Sesión</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Usuario</Text>
          <View style={styles.inputIconContainer}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} />
            <TextInput style={styles.input} placeholder="admin1" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <View style={styles.inputIconContainer}>
            <FontAwesomeIcon icon={faLock} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="123456"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupPromptText}>¿No tienes una cuenta? por favor regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4FAC2',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  mascot: {
    width: 250, 
    height: 250, 
    marginBottom: -40,
  },
  headerText: {
    fontSize: 22, 
    fontFamily: 'Merriweather_400Regular', 
    textAlign: 'center',
    marginTop: -10,
  },
  body: {
    backgroundColor: '#B9FADB',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
    borderColor: '#02713C',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    height: '70%',
    justifyContent: 'space-evenly', 
  },
  bodyTitle: {
    fontSize: 24,
    fontFamily: 'Merriweather_400Regular',
  },
  inputContainer: {
    width: '80%',
  },
  inputLabel: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginBottom: 8,
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginLeft: 10,
  },
  eyeIcon: {
    marginLeft: -40,
  },
  icon: {
    fontSize: 18,
    color: '#02713C',
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#02713C',
  },
  forgotPasswordText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: 'gray',
    marginBottom: 16,
  },
  signupPromptText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#02713C',
  },
});
