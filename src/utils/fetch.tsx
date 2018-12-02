import {Alert} from 'react-native'
import config from '../config'

const Fetch = (url:string,options:Object = {}) => {
    return new Promise((resolve)=>{
        fetch(config.apihost + url, options)
        .then(response =>{  
            return response.json()
        } )
        .then(responseJson => {
            resolve(responseJson)  
        })
        .catch(error => {
            Alert.alert(error)
            console.error(error);
        });
    })
}
export default Fetch