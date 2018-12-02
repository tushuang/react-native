import React , { Component } from 'react'
import { View,Text,Image, Alert } from 'react-native'
import styles from './styled'
import Swiper from 'react-native-swiper';
import Fecth from '../../../../utils/fetch'

let formData = new FormData();
formData.append('city','全国');
formData.append('client_type', 'wap');
formData.append('url','https://wap.xiaobaishixi.com/');
formData.append('uri', '/');
formData.append('refer', 'https://wap.xiaobaishixi.com/jobs');
formData.append('ad_groups', JSON.stringify([{"ad_position":"P_9_1","max_num":10}]));
formData.append('req_id', '');
formData.append('uuid', ' ');
formData.append('client_os', '');



interface Props {
    
}
interface State {
    infos:Array<any>
}

class HomeSwiper extends Component<Props,State> {  // 需要先接受props 再接收 state
    constructor(props:any){
        super(props)
        this.state = {
            infos : [ ]
        }  
        this.renderItem = this.renderItem.bind(this)    
    }
    componentDidMount(){
        Fecth('/api/operations/recommend',{
            method: 'post',
            body: formData,
        }).then((res:any)=>{
            this.setState({
                infos:res.msg.P_9_1  
            })
        })   
    }
    renderItem(){
        let { infos }  = this.state
        if ( infos.length === 0 ) return false; 
        console.log(infos)
        return (
            <Swiper showsPagination = { false }>
                {
                    infos.map((item, i) => (
                        <View key = {i} style={styles.swiperItem}>
                            <Image style = {{width: '100%', height: '100%'}} source = {{uri: item.img}}/>
                        </View>
                    ))
                }
            </Swiper>  
        )
    }  
    
    render () {
        return (
            <View style = {{width: '100%', height: 150}}>
                { this.renderItem() }
            </View>
        )
    }
   
}

export default HomeSwiper