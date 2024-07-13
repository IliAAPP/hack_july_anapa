import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableHighlight, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Icon name="magnify" size={24} color="#000" style={styles.searchIcon} />
            <TextInput placeholder="Поиск..." style={styles.searchInput} />
          </View>
          <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('Profile')} style={styles.profileIconContainer}>
            <Image source={require('../assets/icon.png')} style={styles.profileIcon} />
          </TouchableHighlight>
        </View>

        <View style={styles.weatherContainer}>
          <Image
            source={require('../assets/sun_cloud.jpg')}
            style={styles.weatherIcon}
          />
          <View style={styles.weatherInfo}>
            <Text style={styles.dateText}>Сегодня <Text style={styles.dateTextSmall}>19 апреля</Text></Text>
            <Text style={styles.temperatureText}>+16°</Text>
            <Text style={styles.feelsLikeText}>Ощущается: +13°</Text>
          </View>
        </View>

        <TouchableHighlight underlayColor="transparent" onPress={() => Linking.openURL('https://t.me/Hackatonbot_bot')}>
          <Image source={require('../assets/touch_but.png')} style={{ width: 300, height: 70, marginTop: 20, marginLeft: 45, borderRadius: 10 }} />
        </TouchableHighlight>

        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 15 }}>Интересные события</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>
          <Image source={require('../assets/logo1.png')} style={{ width: 100, height: 100 }} />
          <Image source={require('../assets/logo2.png')} style={{ width: 100, height: 100 }} />
          <Image source={require('../assets/logo3.png')} style={{ width: 100, height: 100 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '600', left: -17 }}>Парусная регата</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', left: -30 }}>Iron Star</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', left: -10 }}>Афиша</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
          <Image source={require('../assets/place1.png')} style={{ width: 180, height: 180, marginTop: 20, borderRadius: 10 }} />
          <Image source={require('../assets/place2.png')} style={{ width: 180, height: 180, marginTop: 20, borderRadius: 10 }} />
          <Image source={require('../assets/place3.png')} style={{ width: 180, height: 300, marginTop: 20, borderRadius: 10 }} />
          <Image source={require('../assets/place4.png')} style={{ width: 180, height: 300, marginTop: 20, borderRadius: 10 }} />
          <Image source={require('../assets/place5.png')} style={{ width: 408, height: 200, marginTop: 20, borderRadius: 20 }} />
        </View>

        <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('Arenda')}>
          <Image source={require('../assets/arenda.png')} style={{ width: 380, height: 200, borderRadius: 20, marginRight: 30, alignContent: 'center', justifyContent: 'center' }} />
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 20,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  weatherIcon: {
    width: 60,
    height: 35,
    marginRight: 20,
  },
  weatherInfo: {
    flexDirection: 'column',
  },
  dateText: {
    fontSize: 18,
    color: '#000',
  },
  dateTextSmall: {
    fontSize: 14,
    color: '#888',
  },
  temperatureText: {
    fontSize: 32,
    color: '#000',
  },
  feelsLikeText: {
    fontSize: 14,
    color: '#888',
  },
  profileIconContainer: {
    marginLeft: 10,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  date: {
    fontSize: 16,
    color: '#333',
  },
  temperature: {
    fontSize: 40,
    color: '#333',
  },
  feelsLike: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    width: '80%',
  },
  buttonImage: {
    width: 100,
    height: 30,
    marginRight: 10,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 2,
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});
