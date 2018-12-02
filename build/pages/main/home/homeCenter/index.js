import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styled';
const bar1 = require('../../../../../assets/images/index_bar1.png');
const bar2 = require('../../../../../assets/images/index_bar2.png');
const bar3 = require('../../../../../assets/images/index_bar3.png');
const bar4 = require('../../../../../assets/images/index_bar4.png');
const searchImg = require('../../../../../assets/images/search.png');
class HomeCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: [
                { id: 1, img: bar1, title: '找实习' },
                { id: 2, img: bar2, title: '找校招' },
                { id: 3, img: bar3, title: '宣讲会' },
                { id: 4, img: bar4, title: '小白测评' }
            ]
        };
        this.renderItem;
    }
    renderItem() {
        let { infos } = this.state;
        return infos.map((item) => {
            return (React.createElement(View, { style: styles.barItem, key: item.id },
                React.createElement(Image, { style: styles.img, source: item.img }),
                React.createElement(Text, null, item.title)));
        });
    }
    render() {
        return (React.createElement(View, { style: styles.barWrap },
            React.createElement(View, { style: styles.searchWrap },
                React.createElement(Image, { style: { width: 375, height: 45 }, source: searchImg })),
            this.renderItem()));
    }
}
export default HomeCenter;
//# sourceMappingURL=index.js.map