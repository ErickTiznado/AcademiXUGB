import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';

const { height } = Dimensions.get('window');

export default function RecuperacionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/LoginPersonaje.png')} style={styles.mascot} />
        <Text style={styles.headerText}>Recuperación de contraseña</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Se le enviará un link a su correo para el restablecimiento de contraseña
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Ingrese su correo institucional</Text>
          <TextInput style={styles.input} placeholder="usis000000@ugb.edu.sv" />
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginPromptText}>¿Tienes una cuenta? por favor inicia sesión</Text>
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
  bodyText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    width: '80%',
  },
  inputLabel: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    width: '100%',
  },
  sendButton: {
    backgroundColor: '#ffffff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sendButtonText: {
    fontSize: 18,
    color: '#02713C',
  },
  loginPromptText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#02713C',
  },
});
