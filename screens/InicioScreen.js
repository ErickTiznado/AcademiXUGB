import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faClock, faCheckCircle, faCircle, faHome, faCalendar, faAssistiveListeningSystems, faUserCircle, faPlus, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

const { height } = Dimensions.get('window');

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require('../assets/LoginPersonaje.png')} style={styles.profilePic} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Hola, Usuario!</Text>
            <Text style={styles.subHeaderText}>¿Qué haremos el día de hoy?</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Buscar tarea" />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesomeIcon icon={faFilter} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.dateText}>Lunes, 12 julio 2022</Text>
          <Text style={styles.taskListTitle}>Lista de tareas</Text>
          <View style={styles.taskContainer}>
            {/* Tareas de ejemplo */}
            <View style={styles.task}>
              <View style={styles.taskHeader}>
                <View style={styles.taskDateContainer}>
                  <FontAwesomeIcon icon={faClock} style={styles.taskIcon} />
                  <Text style={styles.taskDate}>19/05/24</Text>
                </View>
                <View style={styles.taskStatusContainer}>
                  <Text style={styles.taskStatusPending}>Tarea pendiente</Text>
                  <FontAwesomeIcon icon={faCircle} style={styles.taskIcon} />
                </View>
              </View>
              <Text style={styles.taskTitle}>Entrega del Ensayo de Historia Contemporánea</Text>
              <Text style={styles.taskPoints}>3 pts</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.taskHeader}>
                <View style={styles.taskDateContainer}>
                  <FontAwesomeIcon icon={faClock} style={styles.taskIcon} />
                  <Text style={styles.taskDate}>19/05/24</Text>
                </View>
                <View style={styles.taskStatusContainer}>
                  <Text style={styles.taskStatusDone}>Tarea finalizada</Text>
                  <FontAwesomeIcon icon={faCheckCircle} style={styles.taskIcon} />
                </View>
              </View>
              <Text style={styles.taskTitle}>Entrega del Ensayo de Historia Contemporánea</Text>
              <Text style={styles.taskPoints}>3 pts</Text>
            </View>
            <View style={styles.task}>
              <View style={styles.taskHeader}>
                <View style={styles.taskDateContainer}>
                  <FontAwesomeIcon icon={faClock} style={styles.taskIcon} />
                  <Text style={styles.taskDate}>19/05/24</Text>
                </View>
                <View style={styles.taskStatusContainer}>
                  <Text style={styles.taskStatusPending}>Tarea pendiente</Text>
                  <FontAwesomeIcon icon={faCircle} style={styles.taskIcon} />
                </View>
              </View>
              <Text style={styles.taskTitle}>Entrega del Ensayo de Historia Contemporánea</Text>
              <Text style={styles.taskPoints}>3 pts</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addTaskButton}>
        <FontAwesomeIcon icon={faPlus} style={styles.addTaskButtonText} />
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesomeIcon icon={faHome} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesomeIcon icon={faCalendar} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Chat')}>
          <FontAwesomeIcon icon={faAssistiveListeningSystems} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Asistente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Perfil')}>
          <FontAwesomeIcon icon={faUserCircle} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4FAC2',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 35,
    backgroundColor: '#ccc',
    marginRight: 10,
    marginTop:20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Merriweather_400Regular',
  },
  subHeaderText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '90%',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    fontSize: 18,
    color: '#02713C',
  },
  filterButton: {
    marginLeft: 10,
  },
  body: {
    backgroundColor: '#B9FADB',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    borderColor: '#02713C',
    borderWidth: 1,
    marginTop: 30,
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginBottom: 20,
  },
  taskListTitle: {
    fontSize: 20,
    fontFamily: 'Merriweather_400Regular',
    marginBottom: 20,
  },
  taskContainer: {
    width: '100%',
  },
  task: {
    backgroundColor: '#fff',
    borderColor: '#02713C',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskDate: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    marginLeft: 5,
  },
  taskStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskStatusPending: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#02713C',
    marginRight: 5,
  },
  taskStatusDone: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#02713C',
    marginRight: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginTop: 10,
  },
  taskPoints: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: 'gray',
    marginTop: 10,
  },
  taskIcon: {
    fontSize: 18,
    color: '#02713C',
  },
  addTaskButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#02713C',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopColor: '#02713C',
    borderTopWidth: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
  },
  footerIcon: {
    fontSize: 24,
    color: '#02713C',
  },
});
