import React from 'react';
import { connect } from 'react-redux';

// JAX语法
// 使用JSX的写法，生成普通的JS对象
class Counter extends React.Component {
    render() {
        console.log(this.props)
        const value = this.props.value;
        return (
            <div>
                <h1>计数的数量：{value}</h1>
                <button onClick={this.props.onAddClick}>数字+1</button>
                <button onClick={this.props.onAddClick5}>数字+7</button>
            </div>
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