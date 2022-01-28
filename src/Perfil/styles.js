import { StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({

    container: {        
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        paddingBottom:0
    },

    title: {
        fontSize: 24,
        color: '#1b3954',
        fontWeight: 'bold' 

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
        
    },

    label:{
        left: 15,
        margin: 5
    },

    

    separator:{
        marginVertical: 8,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    btn:{
        alignSelf: 'center',
        bottom: 30,
        width:250,
        
    },

    scroll:{
        backgroundColor: '#F5F5F5',
        
    }

});

export default styles;