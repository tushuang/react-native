import React, { Component } from 'react';
import HomeSwiper from './homeSwiper';
import { View, ScrollView } from 'react-native';
import HomeCenter from './homeCenter';
import JobList from './jobList';
import HomeFoot from './homefoot';
class Home extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: { flex: 1, backgroundColor: '#f5f5f5', paddingBottom: 50, paddingTop: 24 } },
                React.createElement(HomeSwiper, null),
                React.createElement(HomeCenter, null),
                React.createElement(JobList, null),
                React.createElement(HomeFoot, null))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map