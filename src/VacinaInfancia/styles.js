import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   
    container: {
        flex:1,        
        backgroundColor: '#F5F5F5'
    },

    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    
    list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff",
        borderColor: 'gray',
        borderWidth: 2,
        color: 'blue'
    },
    
    labellist:{
        fontSize: 18,
        color: '#1b3954',
        fontWeight: 'bold'
    },


     
});

export default styles;