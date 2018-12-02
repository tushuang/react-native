import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    jobListWrap : {
        paddingTop:14,
        paddingLeft:17,
        paddingRight:17,
        height:'auto',
        backgroundColor: "#FFFFFF"
    },
    jobItem:{
        width:'100%',
        height: 91,
        paddingTop:15, 
        paddingBottom:16, 
        flexDirection: "row",
        borderBottomWidth:1,
        borderColor:"#ebeff2",
        borderStyle:'solid'
    },
    jobLeft:{
        width:60,
        height:60
    },
    jobRight:{  
        flex:1, 
        justifyContent: 'space-between',
        marginLeft:10,
        height:61
    },
    textWrap:{
        flexDirection: "row",
        justifyContent:'space-between'  
    },
    fontStyle:{
        fontSize:12.5,
        color:'#bdc9da'
    },
    price:{
        color:"#f96969",
        fontSize:14,
        fontWeight:'700'
    },
    titleText:{
        fontSize:16,
        color:"#5a647a"
    }
})  

export default styles