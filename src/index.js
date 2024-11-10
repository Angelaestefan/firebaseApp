import React, {useState} from "react";
import { View, Text, StyleSheet} from "react-native";
import {db} from "../firebaseConfig";
import {ref, set} from "firebase/database";

const FetchData = () => {
    const [matricula, setMatricula] = useState('');
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

export default FetchData;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
  });
  