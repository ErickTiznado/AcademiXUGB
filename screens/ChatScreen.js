import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMicrophoneLines, faArrowLeft, faEllipsisH, faHouseChimney, faCalendarDays, faUser, faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen({ navigation }) {
  const closeForm = () => {
    navigation.goBack(); // Asume que este componente está en un stack navigator
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Cuéntame estoy para ti</Text>
      <View style={styles.form}>
        {/* Header del Chat */}
        <View style={styles.chatHeaderContainer}>
          <View style={styles.chatHeader}>
            <TouchableOpacity style={styles.backButton} onPress={closeForm}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} color="#02713C" />
            </TouchableOpacity>
            <Text style={styles.chatTitle}>Chat</Text>
            <TouchableOpacity style={styles.menuButton}>
              <FontAwesomeIcon icon={faEllipsisH} size={24} color="#02713C" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Cuerpo del Chat */}
        <ScrollView style={styles.chatBody}>
          <View style={styles.messageContainer}>
            <View style={styles.receivedMessage}>
              <FontAwesomeIcon icon={faUser} size={40} color="#02713C" style={styles.avatar} />
            </View>
            <View style={styles.sentMessage}></View>
          </View>
        </ScrollView>

        {/* Footer del Chat */}
        <View style={styles.chatFooter}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesomeIcon icon={faFaceSmile} size={24} color="#02713C" />
          </TouchableOpacity>
          <TextInput
            style={styles.messageInput}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#9a9a9a"
          />
          <TouchableOpacity style={styles.sendButton}>
            <FontAwesomeIcon icon={faMicrophoneLines} size={24} color="#02713C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <FontAwesomeIcon icon={faPaperPlane} size={24} color="#02713C" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de pestañas en la parte inferior */}
      <View style={styles.tabBar}>
        {tabItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <FontAwesomeIcon icon={item.icon} size={28} color="#02713C" />
            <Text style={styles.tabText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const tabItems = [
  { fontAwesome: true, icon: faHouseChimney, label: 'inicio', screen: 'Inicio' },
  { fontAwesome: true, icon: faCalendarDays, label: 'Calendario', screen: 'Calendario' },
  { fontAwesome: true, icon: faUser, label: 'Perfil', screen: 'Perfil' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4FAC2',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 80, // Ajustar según sea necesario
  },
  form: {
    backgroundColor: '#C4FFE3',
    borderRadius: 30,
    padding: 40,
    width: '100%',
    marginHorizontal: 0,
    borderWidth: 2,
    borderColor: '#02713C'
  },
  chatHeaderContainer: {
    alignItems: 'center',
    marginTop: -35,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: -5,
    borderRadius: 30,
    width: 320,
    borderWidth: 2,
    borderColor: '#02713C'
  },
  backButton: {
    padding: 10,
  },
  chatTitle: {
    color: '#000000',
    fontSize: 18,
  },
  menuButton: {
    padding: 10,
  },
  chatBody: {
    flex: 1,
    padding: 10,
    marginTop: 425,
  },
  chatFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: -10,
    borderRadius: 20,
    width: 330,
    marginLeft: -30,
    borderWidth: 2,
    borderColor: '#02713C'
  },
  iconButton: {
    padding: 10,
  },
  messageInput: {
    flex: 1,
    padding: -5,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  sendButton: {
    padding: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 80,
    marginTop: 15,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#02713C',
    marginTop: 4,
  },
  customIcon: {
    width: 28,
    height: 28,
  },
});

