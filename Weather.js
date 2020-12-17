import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'] 
  },
  Thunderstorm : {
    iconName: 'weather-partly-cloudy',
    gradient: ['#283048', '#859398']
  },
  Drizzle : {
    iconName: 'weather-',
    gradient: ['', '']
  },
  Rain : {
    iconName: 'weather-',
    gradient: ['', '']
  },
  Snow : {
    iconName: 'weather-',
    gradient: ['', '']
  },
  Atmosphere : {
    iconName: 'weather-',
    gradient: ['', '']
  },
  Clear : {
    iconName: 'weather-night',
    gradient: ['#ADA996', '#F2F2F2', '#DBDBDB', '#EAEAEA'],
    title: 'Clear',
    subtitle: 'Good day, Good night'
  },
  Clouds: {
    iconName: 'weather-',
    gradient: ['', '']
  }
}

export default function Weather({temp, condition}){
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.halfContainer}>
    <MaterialCommunityIcons 
      name={weatherOptions[condition].iconName}
      size={96} 
      color="white" />
    <Text style={styles.temp}>{temp}°</Text>
    <Text style={styles.temp}>{condition}</Text>
    </View>
    <View style={{...styles.halfContainer, ...styles.textContainer}}>
      <Text style={styles.title}>{weatherOptions[condition].title}</Text>
      <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
    </View>
    </LinearGradient> 
  );
}

Weather.PropTypes = {
  temp:PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere", 
    "Clear", 
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});