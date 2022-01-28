import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   
    container: {
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },

    inputs:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        marginBottom: 15,
        marginHorizontal: 20,
        fontSize: 16, 
        top: 10,
        
    },

    titleApp:{
     
        fontSize: 18,
        color: '#1b3954',
        fontWeight: 'bold',

        
    },

    logo:{
        width: 150,
        height:150, 
       
    },

    separator:{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    btn:{
        top:10,
        width:250,
        
    }
});

export default styles;