import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select className="form-control w-25 text-light bg-dark" value={this.props.language} onChange={(e)=>{this.props.funChangeLanguage(e.target.value)}}>
                <option value="React">React</option>
                <option value="Javascript">Javascript</option>
                <option value="Node">Node</option>
                </select>
            </div>
        )
    }
}
