import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import LocalDB from '../persistance/localdb';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import styles from '../style';

const backgroundImage = { uri: "https://pbs.twimg.com/media/F2JNzB_WYAARrZw?format=jpg&name=large" };

export default function ProductAdd(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [nombre, setNombre] = useState<string>('');
  const [precio, setPrecio] = useState<string>('0');
  const [minStock, setMinStock] = useState<string>('0');

  const btnGuardarOnPress = async () => {
    const db = await LocalDB.connect();
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO productos (nombre, precio, minStock, currentStock, maxStock) VALUES (?, ?, ?, 0, 0)',
        [nombre, precio, minStock],
        () => {
          navigation.goBack();
        },
        error => console.error({error}),
      );
    });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.textLabel}>Nombre</Text>
          <TextInput style={styles.textInput} onChangeText={t => setNombre(t)} />
          <Text style={styles.textLabel}>Precio</Text>
          <TextInput style={styles.textInput} onChangeText={t => setPrecio(t)} />
          <Text style={styles.textLabel}>Min. Stock</Text>
          <TextInput style={styles.textInput} onChangeText={t => setMinStock(t)} />
          <TouchableOpacity style={styles.button} onPress={btnGuardarOnPress}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

