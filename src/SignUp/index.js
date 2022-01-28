import React, {Component} from 'react';
import styles from './styles';

import { View, Text, ScrollView, Button, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';


function Separator(){
    return <View style ={styles.separator} />
}

export default class SignUp extends Component{

    static navigationOptions = {
        title: 'Criar Conta',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#1b3954'}
    };

    state = { UserName : '', UserEmail :'', UserRG: '', UserPassword : ''};


    static PropTypes ={
        navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func,
        }).isRequired,
    }; 
    
    UserRegister = () =>{
        
        const { UserName }  = this.state ;
        const { UserEmail }  = this.state ;
        const { UserRG }  = this.state ;
        const { UserPassword }  = this.state ;
        
        
       fetch('https://vacinadp.000webhostapp.com/Database/user_registration.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({        
           
           name: UserName,
           email: UserEmail,
           RG: UserRG,
           password: UserPassword,
        
         })
        
       }).then((response) => response.json())
        .then((responseJson) => {
           if (responseJson === 'Successfully'){
                Alert.alert('Registro realizado com sucesso!');
                this.props.navigation.navigate('Login');
           }else{
            Alert.alert('AVISO:','Email de usuário já cadastrado!');
           }              
                                      
       }).catch((error) => {
         console.error(error);
       });

    }

    render(){
        return(
            <ScrollView style = {styles.scroll}>            
            <View style = {styles.container}>
                <View>
                    <Separator></Separator>
                    <Separator></Separator>
                </View>                 
                 <Text style = {styles.label}>Nome:</Text>
                 <TextInput style = {styles.inputs} placeholder = 'Nome Completo' onChangeText = {(UserName) => this.setState({UserName})} value = {this.state.UserName}></TextInput>
                 <Text style = {styles.label}>E-mail:</Text>
                 <TextInput style = {styles.inputs} placeholder = 'Endereço de email' onChangeText = {(UserEmail) => this.setState({UserEmail})} value = {this.state.UserEmail} ></TextInput>
                 <Text style = {styles.label}>RG:</Text> 
                 <TextInput style = {styles.inputs} placeholder = 'RG' onChangeText = {(UserRG) => this.setState({UserRG})} value = {this.state.UserRG} ></TextInput>          
                 <Text style = {styles.label}>Senha:</Text>
                 <TextInput style = {styles.inputs} autoCapitalize="none" autoCorrect={false} secureTextEntry placeholder = 'Senha' onChangeText = {(UserPassword) => this.setState({UserPassword})} value = {this.state.UserPassword} ></TextInput>
               
                <View style={styles.btn}>
                <Separator></Separator>
                <Separator></Separator>
                <Button
                    title="Salvar"
                    color = '#1b3954'
                    onPress={this.UserRegister}>
                </Button>
                </View>   
                  
            </View>
            </ScrollView>
        );
    }
}