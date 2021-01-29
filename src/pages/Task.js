import React, { Component } from 'react';
import Axios from 'axios';
import Card from '../common/Card';
import Navbar from '../common/Navbar';
import AddTaskForm from '../components/AddTaskForm';

export default class Task extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             List:[],
             form:false,
        }
    }

    componentDidMount(){
        this.funGetData();
    }

    funGetData = () =>{
        Axios.get('http://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            console.log(res.data);
            this.setState({List: res.data});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    funDeleteData = (id) => {
        const newData = this.state.List.filter((data,i) => {
            return i !== id;
        });
        this.setState({ List: newData });
    }

    funAddTask = (task) => {
        const newTaskList = [task, ...this.state.List];
        this.setState({List:newTaskList},()=> {this.funToggleForm()});
    }
    
    funToggleForm = () => {
        this.setState({form:!this.state.form});
    }

    render() {
        return (
            <React.Fragment>
            <Navbar/>
            <div className="container">

            <div className="py-3 sticky-top d-inline-block">
                {
                    this.state.form ? null :(
                        <button className="btn btn-primary btn-sm" onClick={this.funToggleForm}>ADD TASK</button>
                    )
                }
            </div>

            {
                this.state.form ? (
                    <AddTaskForm funToggleForm={this.funToggleForm} funAddTask={this.funAddTask}/>
                ):null
            }

               


            <div className="py-4">
                {
                    this.state.List.map((data,i)=>(
                        <Card key={i} id={i} data={data} funDeleteData={this.funDeleteData}/>
                    ))
                }
            </div>
            </div>
            </React.Fragment>
        )
    }
}
