import React, {Component} from 'react';
import styles from './styles';

import { View, Text, ScrollView, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';

import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';



export default class VacinaInfacia extends Component{

    static navigationOptions = {
        title: 'Vacinas da Infância',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#1b3954'}
    }
        
    static PropTypes ={
        navigation: PropTypes.shape({
        navigate: PropTypes.func,
        dispatch: PropTypes.func,
        }).isRequired,
    }; 

    state = { loading : true,
              dataSource: []
            
            }

    

    componentDidMount(){
    fetch("https://vacinadp.000webhostapp.com/Database/show_vacina.php")
            .then(response => response.json())
                .then((responseJson)=> {
                  this.setState({
                   loading: false,
                   dataSource: responseJson
                  })
                })
                .catch(error=>console.log(error)) //to catch the errors if any
    }

        FlatListItemSeparator = () => {
            return (
                <View style={{
                     height: .5,
                     width:"100%",
                     backgroundColor:"rgba(0,0,0,0.5)",
                     }}
                />
            );
        }

        renderItem=(data)=>
        <TouchableOpacity style = {styles.list}>
        
        <Text style={styles.lightText} style = {styles.labellist} >Nome: {data.item.nome}</Text>
        <Text style={styles.lightText} style = {styles.labellist} >Dose: {data.item.dose}</Text>
        <Text style={styles.lightText} style = {styles.labellist} >Unidade: {data.item.unidade}</Text>
        <Text style={styles.lightText} style = {styles.labellist} >Lote: {data.item.lote}</Text>
        <Text style={styles.lightText} style = {styles.labellist} >Revacinação: {data.item.revacinacao}</Text>
        
        </TouchableOpacity>

    

    render(){
        if (this.state.loading){
            return(
                <View style = {styles.load}>
                    <ActivityIndicator size = 'large' color = 'blue'></ActivityIndicator>
                </View>
            )
        }
        
        return(
            <View style={styles.container}>
            <FlatList
               data= {this.state.dataSource}
               ItemSeparatorComponent = {this.FlatListItemSeparator}
               renderItem= {item=> this.renderItem(item)}
               keyExtractor= {item=>item.toString()}
            />
           </View>
        );
    }
}
