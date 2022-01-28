import React, {Component} from 'react';
import styles from './styles';

import { View,Button, Text, TextInput, Image, Alert} from 'react-native';
import PropTypes from 'prop-types';

function Separator(){
    return <View style ={styles.separator} />
}

export default class Login extends Component{

    static navigationOptions ={
        header: null,
    };

    static PropTypes ={
        navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func,
        }).isRequired,
    };

    state = { UserEmail: '', UserPassword: ''};

    UserLoginFunction = async () =>{
 
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;
        
        
       fetch('https://vacinadp.000webhostapp.com/Database/User_Login.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({        
           email: UserEmail,
           password: UserPassword,
        
         }),
        
       }).then((response) => response.json())
       .then((responseJson) => {        
         // If server response message same as Data Matched
        if(responseJson === 'Data Matched'){        
             //Then open Profile activity and send user email to profile activity.
             Alert.alert('Seja Bem-Vindo');
             this.props.navigation.navigate('Main');        
         }
         else{        
           Alert.alert('AVISO:','Email ou Senha inválidos. Tente novamente!');
         }        
       }).catch((error) => {
         console.error(error);
       });        
   }  


    render(){
        return(
            
            <View  style ={styles.container}>            
                <Image source = {require('../image/vacina.png')} style = {styles.logo} ></Image>
                <Text style= {styles.titleApp}>Cartão Digital de Vacinação do Adulto</Text>
                                                                       
                <TextInput placeholder ='email' style ={styles.inputs} onChangeText = {(UserEmail) => this.setState({UserEmail})} value = {this.state.UserEmail}></TextInput>
                
                <TextInput placeholder ='Senha' autoCapitalize="none" autoCorrect={false} secureTextEntry style ={styles.inputs} onChangeText = {(UserPassword) => this.setState({UserPassword})} value = {this.state.UserPassword}></TextInput>
                <Separator />
                
                <Text style={{color: '#4682b4' }}  onPress={() => this.props.navigation.navigate('SignUp')}>Criar Conta</Text>     
                <Separator />
                <View style={styles.btn}>
                <Button
                    title="Entrar"
                    color = '#1b3954'
                    onPress={this.UserLoginFunction}>
                </Button>
                </View>            
            </View>
           
        );
    }
}
