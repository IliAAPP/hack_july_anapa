import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>Сегодня 19 апреля</Text>
        <Text style={styles.temperature}>+16°</Text>
        <Text style={styles.feelsLike}>Ощущается +13°</Text>
      </View>

      <TouchableOpacity style={styles.routeButton}>
        <Text style={styles.routeButtonText}>Подбери свой маршрут</Text>
      </TouchableOpacity>

      <View style={styles.events}>
        <Text style={styles.eventsTitle}>Интересные события</Text>
        <View style={styles.eventsIcons}>
          <Image source={{ uri: 'url_to_image1' }} style={styles.eventIcon} />
          <Image source={{ uri: 'url_to_image2' }} style={styles.eventIcon} />
          <Image source={{ uri: 'url_to_image3' }} style={styles.eventIcon} />
        </View>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'url_to_interesting_places_image' }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Интересные места</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'url_to_infrastructure_image' }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Инфраструктура</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'url_to_hiking_routes_image' }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Пешие маршруты</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'url_to_beach_image' }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Пляжи</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'url_to_online_cameras_image' }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Онлайн-камеры</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'url_to_rental_housing_image' }} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Аренда жилья</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    backgroundColor: '#EDEFF1',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
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
  routeButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  routeButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  events: {
    marginBottom: 20,
  },
  eventsTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  eventsIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventIcon: {
    width: 50,
    height: 50,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  category: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Main;
