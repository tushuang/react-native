import React,{Component} from 'react'
import { View,Text,ScrollView ,Image,Alert} from 'react-native'
import styles from './styled'  


interface Props {

}

interface State {
    infos:Array<any>
}

class JobList extends Component<Props,State> {
    constructor(props:any){
        super(props)
        this.state = {
            infos:[]
        }
        this.renderItem = this.renderItem.bind(this)
    }
    componentDidMount(){
        fetch('https://wap.xiaobaishixi.com/jobs/search?p=1&k=&i=&c=&s=-&x=&d=&m=')
        .then(response =>{  
            return response.json()
        } )
        .then(responseJson => {
            Alert.alert(JSON.stringify(responseJson))
            this.setState({
                infos:responseJson.msg
            })
        })
        .catch(error => {
            console.error(error);
        });
    }
    renderItem(){
        let { infos } = this.state
        if(infos.length === 0) return false
        return infos.map((item:any,i)=>{
            return (<View key = {i} style = {styles.jobItem}>  
                <View style = {styles.jobLeft}>
                    <Image 
                    style = {{width:'100%',height:'100%'}} 
                    source = {{uri:item.logo_url}}/>
                </View>
                <View style = {styles.jobRight}>
                    <View style = {styles.textWrap}>
                        <Text style = {styles.titleText}>{item.name}</Text>
                        <Text style = {styles.fontStyle}>{item.refresh}</Text>
                    </View>
                    <View style = {styles.textWrap}>
                        <Text style = {styles.fontStyle}>{item.job}</Text>
                    </View>
                    
                    <View style = {styles.textWrap}>
                        <Text style = {styles.fontStyle}>{item.city}</Text>
                        <Text style = {styles.price}>￥{item.minsalary}-{item.maxsalary}/天</Text>
                    </View>
                </View>
            </View>  )
        })
    }
    render(){
        return (
                <View style = { styles.jobListWrap }>   
                    {this.renderItem()}
                </View>
            
        )
    } 
}

export default JobList