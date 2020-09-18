import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tree } from 'antd';
import org from './org';
import { SearchOutlined } from '@ant-design/icons';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    render() {
        const treeData = [
            {
                title: 'parent 1',
                key: '0-0',
                children: [
                    {
                        title: 'parent 1-0',
                        key: '0-0-0',
                    },
                    {
                        title: 'parent 1-1',
                        key: '0-0-1',
                    },
                ],
            },
        ];
        console.log(this.props)
        console.log(org)
        const value = this.props.value;
        return (
            <>
                <div className="search-box">
                    <input className="search" placeholder="搜索"></input>
                    <SearchOutlined width="30" />
                </div>
                <Tree
                    className="tree"
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                    treeData={treeData}
                />
                <h1>计数的数量：{value}</h1>
                <button onClick={this.props.onAddClick}>数字+1</button>
                <button onClick={this.props.onAddClick5}>数字+6</button>
                <div className="flex-bet btn-box">
                    <button className="btn" onClick={this.props.onAddClick5}>添加部门</button>
                    <button className="btn" onClick={this.props.onAddClick5}>添加员工</button>
                    <button className="btn" onClick={this.props.onAddClick5}>查看已选择</button>
                </div>
            </>
        )
    }
}

// 将state映射到props函数
function mapStateToProps(state) {
    return {
        value: state.num
    }
}

// 将修改state数据的方法，映射到props函数，默认会传入store里的dispatch方法
function mapDispatchToProps(dispatch) {
    return {
        onAddClick: () => { dispatch({ type: 'add', num: 1 }) },
        onAddClick5: () => { dispatch({ type: 'addNum', num: 5 }) }
    }
}

// 将上面的2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default App