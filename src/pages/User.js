import React, { Component } from 'react'
import Navbar from '../common/Navbar';

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
            dummy:false,
        }
    }

    funChange = () => {
        this.setState({dummy:!this.state.dummy});
    }

    funLogOut = () => {
        localStorage.removeItem('userdata');
        this.props.history.push('/login')
    }
    
    render() {
        return (
            <React.Fragment>
            <Navbar/>
            <div className="container pt-3">
                <h4 className="my-3">Username: Dummy User</h4>
                {
                    this.state.dummy ? (
                        <h4>New Password:<input type="text" className="form-control w-25 d-inline-block ml-3"/></h4>
                    ):(
                        <h4>Password: *********</h4>
                    )
                }

                <div className="pt-5 mt-4">
                    <button className="btn btn-outline-danger mr-3" onClick={this.funChange}>
                        {
                            this.state.dummy ? "Save Password" : "Change Password"
                        }
                    </button>
                    <button className="btn btn-outline-dark" onClick={this.funLogOut}>LogOut</button>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
