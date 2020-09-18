import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tree from '../component/tree';
import org from './org';
import person from './person';
import { SearchOutlined } from '@ant-design/icons';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        console.log(this.props)
        console.log(org)
        let arr = [];

        org.data.forEach((item, index)=>{
            person.data.forEach((it, idx)=>{
                if(item.orgId === it.orgId){
                    item.children = [];
                    item.children.push(it)
                }
                console.log(item)
            })
            arr.push(item)
        })
        console.log(arr)
        return (
            <>
                <div className="search-box">
                    <input className="search" placeholder="搜索"></input>
                    <SearchOutlined />
                </div>
                <Tree data={arr}/>
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
)(List)

export default App