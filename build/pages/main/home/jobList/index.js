import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import styles from './styled';
class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        };
        this.renderItem = this.renderItem.bind(this);
    }
    componentDidMount() {
        fetch('https://wap.xiaobaishixi.com/jobs/search?p=1&k=&i=&c=&s=-&x=&d=&m=')
            .then(response => {
            return response.json();
        })
            .then(responseJson => {
            Alert.alert(JSON.stringify(responseJson));
            this.setState({
                infos: responseJson.msg
            });
        })
            .catch(error => {
            console.error(error);
        });
    }
    renderItem() {
        let { infos } = this.state;
        if (infos.length === 0)
            return false;
        return infos.map((item, i) => {
            return (React.createElement(View, { key: i, style: styles.jobItem },
                React.createElement(View, { style: styles.jobLeft },
                    React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: item.logo_url } })),
                React.createElement(View, { style: styles.jobRight },
                    React.createElement(View, { style: styles.textWrap },
                        React.createElement(Text, { style: styles.titleText }, item.name),
                        React.createElement(Text, { style: styles.fontStyle }, item.refresh)),
                    React.createElement(View, { style: styles.textWrap },
                        React.createElement(Text, { style: styles.fontStyle }, item.job)),
                    React.createElement(View, { style: styles.textWrap },
                        React.createElement(Text, { style: styles.fontStyle }, item.city),
                        React.createElement(Text, { style: styles.price },
                            "\uFFE5",
                            item.minsalary,
                            "-",
                            item.maxsalary,
                            "/\u5929")))));
        });
    }
    render() {
        return (React.createElement(View, { style: styles.jobListWrap }, this.renderItem()));
    }
}
export default JobList;
//# sourceMappingURL=index.js.map