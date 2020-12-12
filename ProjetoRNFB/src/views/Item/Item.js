import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import estiloItem from "./estiloItem";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LivroFB } from '../../firebase/livroFB';

function Item({navigation , route}) {

    const [item , setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    const livroFb = new LivroFB();

    useEffect(() => {
        setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }

    const salvar = (item) => {
        operacao == 'adicionar' ? livroFb.adicionarLivro(item) : livroFb.editarLivro(item);
        voltar();
    }

    const remover = (item) => {
        livroFb.removerLivro(item);
        voltar();
    }


    
    return (
    <View style={estiloItem.container}>
        
        <View style={estiloItem.header}>
            <TouchableOpacity onPress={voltar}>
            <MaterialIcons name="arrow-back" size={24} color="white"/>
            </TouchableOpacity>
            <Text style={estiloItem.texto}>Item</Text>
        </View>

        <View style={estiloItem.formularioContainer}>
            
            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="address-book" size={26} color="white" />
                <TextInput 
                style={estiloItem.campo}
                placeholder="Nome..."
                placeholderTextColor="#FFF"
                onChangeText={nome => setItem({...item, nome})}
                value={item.nome}
                />
            </View>

            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="archway" size={26} color="white" />
                <TextInput 
                style={estiloItem.campo}
                placeholder="Sala"
                placeholderTextColor="#FFF"
                onChangeText={sala => setItem({...item, sala})}
                value={item.sala}
                />
            </View>

            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="child" size={26} color="white" />
                <TextInput 
                style={estiloItem.campo}
                placeholder="Turma"
                placeholderTextColor="#FFF"
                onChangeText={turma => setItem({...item, turma})}
                value={item.turma}
                />
            </View>
   
            <View style={estiloItem.botoesContainer}>


                <TouchableOpacity onPress={() => salvar(item)} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#0000FF', '#2E2EFE',]} style={estiloItem.botao}>
                        <MaterialIcons name="save" size={28} color="white" />
                    </LinearGradient>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => remover(item)} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#0000FF', '#2E2EFE']} style={estiloItem.botao}>
                        <MaterialIcons name="delete" size={28} color="white" />
                    </LinearGradient>

                </TouchableOpacity>

            </View>
   
   
        </View>

    </View>
) 

}
export default Item;