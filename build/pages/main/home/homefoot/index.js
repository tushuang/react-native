import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styled';
class HomeFoot extends Component {
    render() {
        return (React.createElement(View, { style: styles.footWrap },
            React.createElement(View, { style: styles.seeMore },
                React.createElement(Text, { style: styles.seeMoreText }, "\u524D\u5F80\u804C\u4F4D\u5217\u8868\uFF0C\u67E5\u770B\u66F4\u591A\u804C\u4F4D>>")),
            React.createElement(View, { style: styles.msgWrap },
                React.createElement(Text, { style: styles.msgText }, "\u5173\u4E8E\u6211\u4EEC | \u8054\u7CFB\u6211\u4EEC"),
                React.createElement(Text, { style: styles.msgText }, "\u8054\u7CFB\u65B9\u5F0F\uFF1A028-65072615"),
                React.createElement(Text, { style: styles.msgText }, "\u5BA2\u670D\u90AE\u7BB1\uFF1Aserver@xiaobaishixi.com"),
                React.createElement(Text, { style: styles.msgText }, "\u5546\u52A1\u5408\u4F5C: business@xiaobaishixi.com"))));
    }
}
export default HomeFoot;
//# sourceMappingURL=index.js.map