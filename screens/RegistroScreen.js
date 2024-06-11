import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const { height } = Dimensions.get('window');

export default function RegistroScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/LoginPersonaje.png')} style={styles.mascot} />
        <Text style={styles.headerText}>Vamos a registrarnos!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Crear cuenta</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombres:</Text>
            <TextInput style={styles.input} placeholder="Nathasha Jimenez" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Apellidos:</Text>
            <TextInput style={styles.input} placeholder="Velazquez Contreras" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Código de estudiante:</Text>
            <TextInput style={styles.input} placeholder="USIS000000" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Correo institucional:</Text>
            <TextInput style={styles.input} placeholder="usis000000@ugb.edu.sv" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Número de teléfono:</Text>
            <TextInput style={styles.input} placeholder="+503 0000-000000-00000" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Crear Contraseña:</Text>
            <View style={styles.inputIconContainer}>
              <TextInput
                style={styles.input}
                placeholder="123456789"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar contraseña:</Text>
            <View style={styles.inputIconContainer}>
              <TextInput
                style={styles.input}
                placeholder="123456789"
                secureTextEntry={!confirmPasswordVisible}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={toggleConfirmPasswordVisibility}>
                <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.securityAdvice}>
            Consejo de seguridad para la contraseña:
            {"\n"}- Usa al menos 12 caracteres.
            {"\n"}- Mezcla mayúsculas, minúsculas, números y símbolos (ej. @, #, $).
            {"\n"}- Evita palabras comunes y datos personales.
          </Text>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Crear cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginPromptText}>¿Tienes una cuenta? por favor inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    width: 150,
    height: 150,
    marginBottom: -20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Merriweather_400Regular',
    textAlign: 'center',
    marginTop: -10,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
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
    position: 'relative',
    bottom: 0,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  bodyTitle: {
    fontSize: 24,
    fontFamily: 'Merriweather_400Regular',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginBottom: 8,
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginLeft: 10,
    backgroundColor: '#fff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  eyeIcon: {
    marginLeft: -40,
  },
  icon: {
    fontSize: 18,
    color: '#02713C',
  },
  securityAdvice: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: 'gray',
    marginTop: 16,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#ffffff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  signupButtonText: {
    fontSize: 18,
    color: '#02713C',
  },
  loginPromptText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#02713C',
  },
});
