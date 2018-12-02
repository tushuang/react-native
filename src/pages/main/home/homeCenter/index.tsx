import React,{Component} from 'react'
import { View,Text,Image } from 'react-native'
import styles from './styled'

const bar1 =  require('../../../../../assets/images/index_bar1.png') 
const bar2 =  require('../../../../../assets/images/index_bar2.png') 
const bar3 =  require('../../../../../assets/images/index_bar3.png') 
const bar4 =  require('../../../../../assets/images/index_bar4.png') 
const searchImg = require('../../../../../assets/images/search.png')

interface Props {
    name?:string
}

interface State {
    infos:Array<any>
}

class HomeCenter extends Component<Props,State> {
    constructor(props:any){
        super(props)
        this.state = {
            infos:[
                {id:1,img:bar1,title:'找实习'},
                {id:2,img:bar2,title:'找校招'},
                {id:3,img:bar3,title:'宣讲会'},
                {id:4,img:bar4,title:'小白测评'}
            ]
        }
        this.renderItem
    }
    renderItem(){
        let { infos } = this.state
        return infos.map((item)=>{
            return(
                <View style = {styles.barItem} key = {item.id}>
                    <Image style = {styles.img}  source = {item.img}/>
                    <Text>{item.title}</Text>
                </View>
            )
        }) 
    }
    render () {
        return (
            <View style = {styles.barWrap}>
                <View style = {styles.searchWrap}>
                    <Image style = {{width:375,height:45}} source = {searchImg}/> 
                </View>
               {this.renderItem()}
            </View>
            
        )
    }
}

export default HomeCenter