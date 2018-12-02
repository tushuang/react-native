import { StyleSheet } from 'react-native'
import { relative } from 'path';

const styles = StyleSheet.create({
    barWrap:{
        width:'100%',
        height:126,
        paddingTop:30,
        paddingBottom:30,
        flexDirection:'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        position:'relative',
        marginBottom: 5
    },
    barItem:{   
        width:"25%",
        height:'100%',
        alignItems: "center"
    },
    img:{
        width:45,
        height:45
    },
    searchWrap:{
        width:'100%', 
        height:45,  
        position:'absolute',
        top:-25,
        left:0,
    }
}) 

export default styles  