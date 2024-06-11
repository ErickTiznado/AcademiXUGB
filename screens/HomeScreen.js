import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const { height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require('../assets/fonts/Inter-Regular.ttf'),
    Merriweather_400Regular: require('../assets/fonts/Merriweather-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dialogueBubble}>
          <Text style={styles.headerText}>¡Ven, estudiemos juntos!</Text>
        </View>
        <Image
          source={require('../assets/personajeHome.png')} // Cargar la imagen local
          style={styles.mascot}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Tu compañero de aprendizaje te espera para hacer más fácil y divertido estudiar. ¡Comienza ahora!
        </Text>
        <View style={styles.buttonsContainer}>
          <Text style={styles.acc}>Si ya tienes cuenta</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>De lo contrario</Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Registro')} // Redirigir a RegistroScreen
          >
            <Text style={styles.signupButtonText}>Crear una nueva cuenta</Text>
          </TouchableOpacity>
        </View>
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
    width: 270, // Ajustar tamaño de la imagen
    height: 270, // Ajustar tamaño de la imagen
    marginBottom: 8,
  },
  dialogueBubble: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#02713C',
    marginBottom: -60, // Ajustar para parecer diálogo de la imagen
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  headerText: {
    fontSize: 25, // Tamaño de fuente del diálogo
    fontFamily: 'Merriweather_400Regular', // Fuente para el diálogo
    textAlign: 'center',
  },
  body: {
    backgroundColor: '#B9FADB',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    height: '65%',
    justifyContent: 'space-evenly', // Distribuir los elementos de manera uniforme
  },
  bodyText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular', // Fuente para los párrafos
    textAlign: 'center',
    marginTop: 10, // Reducir espacio superior
    marginBottom: -10, // Reducir espacio inferior
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 20, // Ajustar margen inferior
  },
  loginButtonText: {
    fontSize: 18,
    color: '#02713C',
  },
  orText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular', // Fuente para los párrafos
    color: 'gray',
    marginVertical: 25, // Ajustar márgenes verticales
  },
  acc: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular', // Fuente para los párrafos
    color: 'black',
    marginBottom: 25, // Ajustar margen inferior
  },
  signupButton: {
    backgroundColor: '#02713C',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  signupButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
