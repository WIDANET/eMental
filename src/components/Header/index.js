import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; 
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
   
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={36} color="#696969" />
      </TouchableOpacity>

     
      <Image
        source={require("../../assets/logo.jpeg")}
        style={styles.image}
      />


      <TouchableOpacity style={styles.button}>
        <Feather name="message-circle" size={36} color="#696969" />
      </TouchableOpacity>

      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        style={styles.gradient} 
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "#F7CAC9", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: 10,
    position: "relative", 
  },
  image: {
    width: 100, 
    height: 100,
    resizeMode: "contain", 
  },
  gradient: {
    position: "absolute", 
    bottom: 0, 
    left: 0,
    right: 0,
    height: 60, 
  },
  button: {
    height: "100%", 
    justifyContent: "center", 
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
