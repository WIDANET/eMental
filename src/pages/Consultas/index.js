import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';

export default function App() {
  // Dados fictícios para simular o banco de dados
  const agendadas = [
    {
      terapeuta: 'Dr. João Eustácio',
      modalidade: 'Online',
      dataHora: '12/10 às 20:00 horas',
    },
    {
      terapeuta: 'Dr. João Eustácio',
      modalidade: 'Online',
      dataHora: '19/10 às 20:00 horas',
    },
    {
      terapeuta: 'Dr. João Eustácio',
      modalidade: 'Online',
      dataHora: '26/10 às 20:00 horas',
    },
  ];

  const canceladas = [
    {
      terapeuta: 'Dr. João Eustácio',
      modalidade: 'Online',
      dataHora: '05/10 às 20:00 horas',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Sessões</Text>

        {/* Sessões Agendadas */}
        <Text style={styles.sectionTitle}>Agendadas:</Text>
        {agendadas.map((sessao, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}><Text style={styles.bold}>Terapeuta:</Text> {sessao.terapeuta}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Modalidade:</Text> {sessao.modalidade}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Data/ Hora:</Text> {sessao.dataHora}</Text>
          </View>
        ))}

        {/* Sessões Canceladas */}
        <Text style={styles.sectionTitle}>Canceladas:</Text>
        {canceladas.map((sessao, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}><Text style={styles.bold}>Terapeuta:</Text> {sessao.terapeuta}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Modalidade:</Text> {sessao.modalidade}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Data/ Hora:</Text> {sessao.dataHora}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#696969',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#696969',
    marginTop: 16,
    marginBottom: 17,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    color: '#696969',
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});
