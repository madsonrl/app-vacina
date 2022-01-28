import React, {Component} from 'react';
import styles from './styles';

import { View, Text,Image, TouchableOpacity, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';

function Nav(){
    return <View style ={styles.nav} />
}

export default class Main extends Component{

    static navigationOptions =  {
      header: null,
    };

    static PropTypes ={
        navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func,
        }).isRequired,
    };
    
    state = { UserEmail: '', UserPassword: ''};

    imagePress(){
        Alert.alert('Em Desenvolvimento')
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Nav></Nav>
                <Text style= {styles.title}>Minhas Vacinas</Text>             
                
                <Image source = {require('../image/button_4.png')} style= {styles.button_nav}></Image>
                <Text onPress={() => this.props.navigation.navigate('Perfil')} style = {styles.textnav} >▼</Text>
               
                <TouchableOpacity onPress={() => this.props.navigation.navigate('VacinaInfancia')}>
                    <Image source = {require('../image/button_1.png')} style = {styles.button_1} ></Image>
                </TouchableOpacity>                
                <Text style = {styles.labels}>Vacinas da Infância</Text> 
                <TouchableOpacity onPress ={() => this.imagePress()}>
                    <Image source = {require('../image/button_2.png')} style = {styles.button_1} ></Image>
                </TouchableOpacity>
                <Text style = {styles.labels}>Vacinas</Text> 
                <TouchableOpacity onPress ={() => this.imagePress()}>
                    <Image source = {require('../image/button_3.png')} style = {styles.button_1} ></Image>
                </TouchableOpacity>
                <Text style ={styles.labels}>Outras Vacinas</Text> 
                
                <ActionButton onPress={() => this.props.navigation.navigate('InsertVacina')} buttonColor='#1b3954'></ActionButton>               
            </View>
        );
    }
}
