import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {id} = this.props;
        const {title,completed} = this.props.data;
        return (
            <div className="row border-bottom py-3 h5">
                <div className="col-2">{id+1}</div>
                <div className="col-6">{title}</div>
                <div className="col-2">{completed ? "True" : "False"}</div>
                <div className="col-2 text-right">
                    <button className="btn btn-danger btn-sm" onClick={()=>{this.props.funDeleteData(id)}}>Delete</button>
                </div>
            </div>
        )
    }
}
