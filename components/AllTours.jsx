import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react'; // Импортируем React и useState
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function AllTours() {
  const [showResult, setShowResult] = useState(false); // Добавляем состояние showResult

  const handlePress = () => {
    setShowResult(!showResult); // Показываем результат при нажатии
  };

  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('LevelUpLocked');
  };

  return (
    <ScrollView>
      <View style={{ position: 'relative' }}>               
                <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '90%', justifyContent: 'center', backgroundColor: 'white', marginLeft: 20, padding: 10, borderRadius: 10, borderWidth: 1}}>
                    <Image source={require('../assets/hot1.png')} style={{ width: 150 , height: 145, margin: 5 }} />
                    <Image source={require('../assets/hot2.png')} style={{ width: 150, height: 145, margin: 5 }} />
                
                      <TouchableHighlight underlayColor='transparent' onPress={() => handleImagePress('LevelUpLocked')}>
                        <Image source={require('../assets/hot9.png')} style={{ width: 160, height: 145, margin: 5, borderRadius: 10, borderWidth: 1 }} />
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='transparent' onPress={() => handleImagePress('LevelUpLocked')}>
                        <Image source={require('../assets/hot9.png')} style={{ width: 160, height: 145, margin: 5, borderRadius: 10, borderWidth: 1 }} />
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='transparent' onPress={() => handleImagePress('LevelUpLocked')}>
                        <Image source={require('../assets/hot9.png')} style={{ width: 160, height: 145, margin: 5, borderRadius: 10, borderWidth: 1 }} />
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='transparent' onPress={() => handleImagePress('LevelUpLocked')}>
                        <Image source={require('../assets/hot9.png')} style={{ width: 160, height: 145, margin: 5, borderRadius: 10, borderWidth: 1 }} />
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='transparent' onPress={() => handleImagePress('LevelUpLocked')}>
                        <Image source={require('../assets/hot9.png')} style={{ width: 160, height: 145, margin: 5, borderRadius: 10, borderWidth: 1 }} />
                      </TouchableHighlight>
                      <TouchableHighlight underlayColor='transparent' onPress={() => handleImagePress('LevelUpLocked')}>
                        <Image source={require('../assets/hot9.png')} style={{ width: 160, height: 145, margin: 5, borderRadius: 10, borderWidth: 1 }} />
                      </TouchableHighlight>
 
                </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
        marginTop: 50, 
        borderWidth: 1,
        
        
      },
      iconContainer: {
        alignItems: 'center',
      },
      iconText: {
        marginTop: 5,
        fontSize: 12,
      },
      resultContainer: {
        position: 'absolute', 
        top: 70, 
        left: 30, 
        zIndex: 1, 
        borderWidth: 2,
        borderRadius: 10
      },
    });
