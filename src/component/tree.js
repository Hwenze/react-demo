import React, { Component } from 'react';
import { CaretDownOutlined, CheckOutlined } from '@ant-design/icons';


class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let parentArr = this.props.data.map((item, index)=>{
            return (
                <div className="tree" key={index}>
                    <div className="parent">
                        <div>
                            <CaretDownOutlined />
                            <span className="name">{item.orgName}</span>
                        </div>
                        <div className="icon-act">
                            <CheckOutlined />
                        </div>
                    </div>
                    <div className="son">
                        <span className="name">{item.orgName}</span>
                        <div className="icon-act">
                            <CheckOutlined />
                        </div>
                    </div>
                </div>
            )
        });
        console.log(this.props)
        return (
            <div className="tree-box">
                {parentArr}
            </div>
        )
    }
}

export default Tree