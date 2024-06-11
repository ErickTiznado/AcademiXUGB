import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faGift, faFaceFrown, faCommentDots, faHandshakeAngle, faUser, faHouseChimney, faCalendarDays, faStopwatch, faBellSlash, faShieldAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileDetails}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image URL
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="edit" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Nombre de Usuario</Text>
            <Text style={styles.changePhotoText}>cambiar foto de perfil</Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.iconCircle}>
              <FontAwesomeIcon icon={item.icon} size={24} color={item.color} style={styles.menuIcon} />
            </View>
            <Text style={styles.menuText}>{item.label}</Text>
            <Icon name="chevron-right" size={24} color="#4CAF50" style={styles.menuChevron} />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
};

const menuItems = [
  { icon: faCheck, label: 'Historial Puntos Recaudados', color: '#02713C' },
  { icon: faGift, label: 'Canjear Puntos', color: '#02713C' },
  { icon: faFaceFrown, label: 'Ver tareas incumplidas', color: '#02713C' },
  { icon: faStopwatch, label: 'Cronometro de estudio', color: '#02713C' },
  { icon: faBellSlash, label: 'Silenciar notificaciones de apps', color: '#02713C' },
  { icon: faShieldAlt, label: 'Política y privacidad', color: '#02713C' },
  { icon: faCommentDots, label: 'Comentarios', color: '#02713C' },
  { icon: faHandshakeAngle, label: 'Centro de ayuda', color: '#02713C' },
  { icon: faSignOutAlt, label: 'Cerrar sesión', color: '#02713C' },
];

const tabItems = [
  { icon: faHouseChimney, label: 'Inicio', screen: 'Inicio' },
  { icon: faCalendarDays, label: 'Calendario', screen: 'Calendario' },
  { icon: faUser, label: 'Perfil', screen: 'Perfil' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4FFE3',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#D4FAC2',
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 15,
    marginTop: 25,
    marginLeft:-70,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#02713C',
    borderRadius: 20,
    padding: 5,
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  changePhotoText: {
    color: '#000000',
    marginTop: 15,
    marginBottom: -15, // Mueve hacia arriba
  },
  menuContainer: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#C4FFE3',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    borderRadius: 20,
    marginBottom: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  menuIcon: {
    marginTop: 0,
  },
  menuIconImage: {
    width: 24,
    height: 24,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuChevron: {
    color: '#4CAF50',
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

export default ProfileScreen;
