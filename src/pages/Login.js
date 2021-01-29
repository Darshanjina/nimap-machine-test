import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: "",
             error:false,
        }
    }

    funHandleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    funLogin = (e) => {
        e.preventDefault();
        if(this.state.username === "" || this.state.password === ""){
            this.setState({error:true});
        }
        else{
            localStorage.setItem("userdata",this.state.username+this.state.password);
            this.props.history.push('/');
        }
    }
    
    render() {
        return (
            <div className="container-fluid card bg-dark text-light col-md-4 middle">
                <form>
                    <h2 className="text-center mt-4 pb-3">Login</h2>
                    <input type="text" className="form-control shadow-sm mt-3" placeholder="Username" name="username" value={this.state.username} onChange={this.funHandleChange}/>
                    <input type="password" className="form-control shadow-sm mt-3" placeholder="Password" name="password" value={this.state.password} onChange={this.funHandleChange}/>
                    {
                        this.state.error ? (
                            <div className="alert alert-danger mt-3">
                                Please Fill All The Details 
                            </div>
                        ) 
                        :
                        null
                    }
                    <div className="btn btn-primary mt-3 mb-4" onClick={this.funLogin}>Login</div>
                </form>
            </div>
        )
    }
}
