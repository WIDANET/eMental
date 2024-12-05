import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Para o degradê
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botão de Menu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={36} color="#696969" />
      </TouchableOpacity>

      {/* Imagem Central */}
      <Image
        source={require("../../assets/logo.jpeg")} // Substitua pela URL ou pelo caminho da sua imagem
        style={styles.image}
      />

      {/* Botão de Mensagem */}
      <TouchableOpacity style={styles.button}>
        <Feather name="message-circle" size={36} color="#696969" />
      </TouchableOpacity>

      {/* Degradê na parte inferior */}
      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        style={styles.gradient} // Degradê que vai de transparente para branco
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "#F7CAC9", // Cor de fundo da barra
    flexDirection: "row", // Organiza os itens na horizontal
    justifyContent: "space-between", // Espaça os itens horizontalmente
    alignItems: "center", // Centraliza os itens verticalmente
    paddingHorizontal: 10, // Espaçamento nas laterais
    position: "relative", // Necessário para o posicionamento do degradê
  },
  image: {
    width: 100, // Tamanho da imagem (ajuste conforme necessário)
    height: 100, // Tamanho da imagem
    resizeMode: "contain", // Ajusta a imagem sem distorção
  },
  gradient: {
    position: "absolute", // Posiciona o degradê no fundo
    bottom: 0, // Alinha o degradê na parte inferior
    left: 0,
    right: 0,
    height: 60, // Altura do degradê
  },
  button: {
    height: "100%", // Ocupa toda a altura do container
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente dentro do botão
    paddingHorizontal: 10, // Espaçamento interno lateral dos botões (opcional)
  },
});
