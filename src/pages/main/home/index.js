import React , { Component } from 'react'
import HomeSwiper from './homeSwiper'
import {View,ScrollView} from 'react-native'
import HomeCenter from './homeCenter'
import JobList from './jobList'
import HomeFoot from './homefoot'

class Home extends Component {
    render(){
        return (
            <ScrollView>
                <View style = {{flex: 1, backgroundColor: '#f5f5f5',paddingBottom:50,paddingTop:24}}> 
                    <HomeSwiper/>
                    <HomeCenter/>
                    <JobList/>
                    <HomeFoot/>  
                </View> 
            </ScrollView>  
        )
    }
}

export default Home  
 