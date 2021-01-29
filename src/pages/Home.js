import React, { Component } from 'react'
import Navbar from '../common/Navbar';
import Dropdown from '../components/Dropdown';
import Information from '../components/Information';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             language:"React",
        }
    }

    funChangeLanguage=(value)=>{
        this.setState({language:value})
    }
    
    render() {
        return (
                <Navbar>
                    <Dropdown language={this.state.language} funChangeLanguage={this.funChangeLanguage}/>
                    <Information language={this.state.language}/>
                </Navbar>
        )
    }
}
