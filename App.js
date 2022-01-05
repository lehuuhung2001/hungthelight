import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Dimensions, Switch } from 'react-native';
import bulboff from './assets/c02n41k51co3o9rj1edg.jpg';
import bulbopen from './assets/c02n43451co3o9rj1ee0.jpg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Image style = {styles.editimg} source = {isEnabled ? bulbopen : bulboff}/>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editimg: {
    width : windowWidth,
    height: windowHeight - 100,
    resizeMode: 'contain',
    backgroundColor:'black',
  }
});
