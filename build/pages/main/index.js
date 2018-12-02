import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Text, Image, View } from 'react-native';
import styles from './styleSheet';
import uuid from 'uuid';
// 各个项目的组件
import Home from './home';
const homeImg = require('../../../assets/images/index.png');
const homeImgActive = require('../../../assets/images/index-active.png');
const jobImg = require('../../../assets/images/job.png');
const jobImgActive = require('../../../assets/images/job-active.png');
const xbsImg = require('../../../assets/images/xbs.png');
const xbsImgActive = require('../../../assets/images/xbs-active.png');
const mineImg = require('../../../assets/images/mine.png');
const mineImgActive = require('../../../assets/images/mine-active.png');
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            infos: [
                { id: uuid(), img: homeImg, activeImg: homeImgActive, name: '首页', component: React.createElement(Home, null), selected: 'home' },
                { id: uuid(), img: jobImg, activeImg: jobImgActive, name: '职位', component: React.createElement(Text, null, "job"), selected: 'job' },
                { id: uuid(), img: xbsImg, activeImg: xbsImgActive, name: '小白说', component: React.createElement(Text, null, "xbs"), selected: 'xbs' },
                { id: uuid(), img: mineImg, activeImg: mineImgActive, name: '我的', component: React.createElement(Text, null, "mine"), selected: 'mine' }
            ]
        };
        this.renderItem = this.renderItem.bind(this);
    }
    renderItem() {
        let { infos } = this.state;
        return infos.map((item) => {
            return (React.createElement(TabNavigator.Item, { key: item.id, selected: this.state.selectedTab === item.selected, title: item.name, selectedTitleStyle: { color: '#333' }, renderIcon: () => React.createElement(Image, { style: item.selected === 'mine' ? styles.iconPerson : styles.icon, source: item.img }), renderSelectedIcon: () => React.createElement(Image, { style: item.selected === 'mine' ? styles.iconPerson : styles.icon, source: item.activeImg }), onPress: () => this.setState({ selectedTab: item.selected }) }, item.component));
        });
    }
    render() {
        return (React.createElement(View, { style: styles.wrapper },
            React.createElement(TabNavigator, null, this.renderItem())));
    }
}
export default Main;
//# sourceMappingURL=index.js.map