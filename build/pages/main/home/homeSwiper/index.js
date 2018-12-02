import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styled';
import Swiper from 'react-native-swiper';
import Fecth from '../../../../utils/fetch';
let formData = new FormData();
formData.append('city', '全国');
formData.append('client_type', 'wap');
formData.append('url', 'https://wap.xiaobaishixi.com/');
formData.append('uri', '/');
formData.append('refer', 'https://wap.xiaobaishixi.com/jobs');
formData.append('ad_groups', JSON.stringify([{ "ad_position": "P_9_1", "max_num": 10 }]));
formData.append('req_id', '');
formData.append('uuid', ' ');
formData.append('client_os', '');
class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        };
        this.renderItem = this.renderItem.bind(this);
    }
    componentDidMount() {
        Fecth('/api/operations/recommend', {
            method: 'post',
            body: formData,
        }).then((res) => {
            this.setState({
                infos: res.msg.P_9_1
            });
        });
    }
    renderItem() {
        let { infos } = this.state;
        if (infos.length === 0)
            return false;
        console.log(infos);
        return (React.createElement(Swiper, { showsPagination: false }, infos.map((item, i) => (React.createElement(View, { key: i, style: styles.swiperItem },
            React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: item.img } }))))));
    }
    render() {
        return (React.createElement(View, { style: { width: '100%', height: 150 } }, this.renderItem()));
    }
}
export default HomeSwiper;
//# sourceMappingURL=index.js.map