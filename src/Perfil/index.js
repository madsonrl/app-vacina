import React, {Component} from 'react';
import styles from './styles';

import { View, Text, ScrollView, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';


function Separator(){
    return <View style ={styles.separator} />
}

export default class Perfil extends Component{

    static navigationOptions = {
        title: 'Perfil do Usuário',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#1b3954'}
    };

    state = { UserEmail: '', UserPassword: ''};

    static PropTypes ={
        navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func,
        }).isRequired,
    };

    

    render(){
        return(
            <ScrollView style = {styles.scroll}>            
            <View style = {styles.container}>
                <View>
                    <Separator></Separator>
                    <Separator></Separator>
                </View>                 
                 <Text style = {styles.label}>Nome:</Text>
                 <TextInput style = {styles.inputs} placeholder = 'Nome Completo'></TextInput>
                 <Text style = {styles.label}>E-mail:</Text>
                 <TextInput style = {styles.inputs} placeholder = 'Endereço de email'></TextInput>
                 <Text style = {styles.label}>RG:</Text>
                 <TextInput style = {styles.inputs} placeholder = 'RG'></TextInput>                 
                 <Text style = {styles.label}>Tipo Sanguíneo:</Text> 
                 <TextInput style = {styles.inputs} placeholder = 'Tipo sanguíneo'></TextInput>
                 <Text style = {styles.label}>Data de Nascimento:</Text> 
                 <TextInput style = {styles.inputs} placeholder = '00/00/0000'></TextInput>
                 <Text style = {styles.label}>Endereço:</Text> 
                 <TextInput style = {styles.inputs} placeholder = 'Endereço Residencial'></TextInput>
                 <Text style = {styles.label}>Cidade-UF:</Text> 
                 <TextInput style = {styles.inputs} placeholder = 'Ex: Manaus-AM'></TextInput>
                 <Text style = {styles.label}>Telefone:</Text> 
                 <TextInput style = {styles.inputs} placeholder = '(00) 0000-0000'></TextInput>                                       
                 <Text style = {styles.label}>Senha:</Text>
                 <TextInput style = {styles.inputs} autoCapitalize="none" autoCorrect={false} secureTextEntry placeholder = 'Senha'></TextInput>
               
                <View style={styles.btn}>
                <Separator></Separator>
                <Separator></Separator>
                <Button
                    title="Salvar Alteração"
                    color = '#1b3954'
                    onPress={() => this.props.navigation.navigate('Main')}>
                </Button>
                </View>   
                  
            </View>
            </ScrollView>
        );
    }
}