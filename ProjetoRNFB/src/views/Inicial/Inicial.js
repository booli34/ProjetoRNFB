import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
 
           

                <TouchableOpacity onPress={abrirColecao}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/foto1.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

                <br></br>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/foto2.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Aluno</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

        </View>
    )
}

export default Inicial;
