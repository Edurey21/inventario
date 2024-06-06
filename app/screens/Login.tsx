import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
};

type LoginScreenProps = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRoute = RouteProp<RootStackParamList, 'Login'>;

const image = { uri: "https://pbs.twimg.com/media/F2JNzB_WYAARrZw?format=jpg&name=large" }; // Reemplazar con el enlace de tu imagen

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        padding: 24,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente
        elevation: 5, // Sombra para resaltar el contenedor
    },
    textHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingVertical: 16,
        paddingHorizontal: 20,
        width: '100%',
        marginVertical: 20,
        fontSize: 18,
    },
    button: {
        width: '100%',
        backgroundColor: '#FF6347', // Color de botón naranja brillante
        paddingVertical: 18,
        borderRadius: 20,
        alignItems: 'center', // Centra el texto dentro del botón
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});

type LoginProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

function Login({ navigation }: LoginProps): React.JSX.Element {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const btnIngresarOnPress = function () {
        if (usuario && contrasena) {
            navigation.navigate('Home');
            return;
        }
        Alert.alert('Entraste', 'iniciado sesion...');
    };

    return (
        <ImageBackground source={image} style={styles.Screen}>
            <View style={styles.container} >
                <Text style={styles.textHeader}>Iniciar Sesión</Text>
                <TextInput style={styles.textInput} placeholder='Usuario' placeholderTextColor={'#828894'} onChangeText={u => setUsuario(u)} />
                <TextInput style={styles.textInput} placeholder='Contraseña' secureTextEntry={true} placeholderTextColor={'#828894'} onChangeText={p => setContrasena(p)} />
                <TouchableOpacity style={styles.button} onPress={btnIngresarOnPress}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default Login;
