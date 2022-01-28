import React, {Component} from 'react';
import styles from './styles';

import { View, Text, ScrollView, TextInput,Button,Picker} from 'react-native';
import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';

function Separator(){
    return <View style ={styles.separator} />
}


export default class InsertVacina extends Component{

    static navigationOptions = {
        title: 'Cadastro de Vacina',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#1b3954'}
    }
    
    state = { Tipo: '', Nome: '', Dose: ''};
    
    static PropTypes ={
        navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func,
        }).isRequired,
    }; 

    render(){
        return(
            <View style={styles.container}>
                <ScrollView style ={styles.scroll}>             
                <Text style = {styles.label}>Tipo:</Text>
                <Picker selectedValue = {this.state.language} onValueChange ={(itemValue, itemIndex)=> this.setState({language: itemValue})} style = {styles.inputs}>
                    <Picker.Item label = 'Vacina da Infância' value = 'infancia' ></Picker.Item>
                    <Picker.Item label = 'Vacinas Atuais' value = 'atuais' ></Picker.Item>
                    <Picker.Item label = 'Outras Vacinas' value = 'outras' ></Picker.Item>
                </Picker>
                <Text style = {styles.label}>Nome:</Text>
                <TextInput style = {styles.inputs} placeholder = 'Ex: Febre Amarela'></TextInput>
                <Text style = {styles.label}>Dose:</Text>
                <Picker selectedValue = {this.state.text} onValueChange ={(itemValue)=> this.setState({text: itemValue})} style = {styles.inputs}>
                    <Picker.Item label = 'Primeira' value = 'Primeira' ></Picker.Item>
                    <Picker.Item label = 'Segunda' value = 'Segunda' ></Picker.Item>
                    <Picker.Item label = 'Terceira' value = 'Terceira' ></Picker.Item>
                    <Picker.Item label = 'Reforço' value = 'Reforco' ></Picker.Item>
                </Picker> 
                <Text style = {styles.label}>Validade:</Text>
                <TextInput style = {styles.inputs} placeholder = 'Ex: 200 dias'></TextInput>
                <Text style = {styles.label}>Lote:</Text>
                <TextInput style = {styles.inputs} placeholder = 'Ex: 001/SUS'></TextInput>
                <Text style = {styles.label}>Unidade:</Text>
                <TextInput style = {styles.inputs} placeholder = 'Ex: UBS São Jorge'></TextInput>
                <Text style = {styles.label}>Revacinação:</Text>
                <TextInput style = {styles.inputs} placeholder = 'Ex: 10/05/2019'></TextInput>           
                <View style={styles.btn}>
                <Separator></Separator>
                <Separator></Separator>
                <Button
                    title="Salvar"
                    color = '#1b3954'
                    onPress={() => this.props.navigation.navigate('Main')}>
                </Button>
                </View> 
                </ScrollView>
            </View>
        );
    }
}