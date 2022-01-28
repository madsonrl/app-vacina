import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   
    container: {
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        
    },

    
    button_1:{
        width: 130,
        height:130,
        borderRadius: 30,
        bottom: 40
    },

    separator:{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
    labels:{
        fontWeight: 'bold',
        color: '#1b3954',
        fontSize: 18,        
        margin: 5,
        bottom: 40
    },

    nav:{
        backgroundColor: '#1b3954',
        borderWidth: 1,
        width:400,
        height:80,
        justifyContent: 'center',
        bottom:10
    },

    title:{
        bottom:45,
        color: 'white',
        fontSize: 20,
        left: -100
    },

    button_nav:{
        bottom:75,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        right: -135,
        width: 30,
        height: 30
    },

    textnav:{
        bottom:100,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        right: -165,
        

    }


 
});

export default styles;