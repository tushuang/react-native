import React,{Component} from 'react'
import {View,Text} from 'react-native'
import styles from './styled'


class HomeFoot extends Component {
    render () {
        return (
            <View style = {styles.footWrap}>
                <View style = {styles.seeMore}>
                    <Text style = {styles.seeMoreText}>前往职位列表，查看更多职位>></Text>
                </View>
                <View style = {styles.msgWrap}>
                    <Text style = {styles.msgText}>关于我们 | 联系我们</Text>
                    <Text style = {styles.msgText}>联系方式：028-65072615</Text>
                    <Text style = {styles.msgText}>客服邮箱：server@xiaobaishixi.com</Text>
                    <Text style = {styles.msgText}>商务合作: business@xiaobaishixi.com</Text>
                </View>
            </View>
        )
    }
}

export default HomeFoot