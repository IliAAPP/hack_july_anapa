import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; // Импортируем React и useState
import { ScrollView } from 'react-native-gesture-handler';

export default function AllAchivements() {
  const [showResult, setShowResult] = useState(false); // Добавляем состояние showResult

  const handlePress = () => {
    setShowResult(!showResult); // Показываем результат при нажатии
  };

  return (
    <ScrollView>
      <View style={{ position: 'relative', backgroundColor: 'white' }}> 
        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '90%', justifyContent: 'center', backgroundColor: 'white', marginLeft: 20, padding: 10, borderRadius: 10, borderWidth: 1, marginTop: 10}}>
          <Image source={require('../assets/ach10.png')} style={{ width: 110, height: 125 }} />
          <Image source={require('../assets/ach17.png')} style={{ width: 110, height: 125 }} />
          <Image source={require('../assets/ach4.png')} style={{ width: 110, height: 125 }} />
          <Image source={require('../assets/ach6.png')} style={{ width: 110, height: 125 }} />
          <Image source={require('../assets/ach7.png')} style={{ width: 110, height: 125 }} />
          <Image source={require('../assets/ach8.png')} style={{ width: 110, height: 125 }} />
          <Image source={require('../assets/ach9.png')} style={{ width: 110, height: 125 }} />
          {showResult ? ( 
            <View style={styles.resultContainer}>
              <TouchableOpacity onPress={handlePress}>
                <Image source={require('../assets/resultach1.png')} style={{ width: 300, height: 320 }}/>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={handlePress}>
              <Image source={require('../assets/ach16.png')} style={{ width: 110, height: 125 }} />
            </TouchableOpacity>
          )}
          <Image source={require('../assets/ach11.png')} style={{ width: 110, height: 125, opacity: 0.5 }} />
          <Image source={require('../assets/ach12.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
          <Image source={require('../assets/ach13.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
          <Image source={require('../assets/ach14.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
          <Image source={require('../assets/ach15.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
          <Image source={require('../assets/ach18.png')} style={{ width: 110, height: 125 , opacity: 0.5}} />
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
  resultContainer: {
    position: 'absolute', 
    top: 70, 
    left: 30, 
    zIndex: 1, 
    borderWidth: 2,
    borderRadius: 10
  },
});
