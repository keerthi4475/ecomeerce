import React, { Component } from 'react'
import './Hstyle.css';

export default class admincomponent extends Component {
    constructor()
    {
        super();
        this.state={
            username:'',
            password:''
        };
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const {username,password}=this.state;
        if(username==='admin' && password==='admin')
        {
        window.confirm("Login Succesfull");
        window.location.replace("/adminoptions");}
        else{
            alert("Incorrect details");
        }
    };
  render() {
    return (
        <div className="centered-form">

            <form onSubmit={this.handleSubmit}>
        username:<input type="text" value={this.state.username} onChange={(event)=>this.setState({username:event.target.value})}required/>
        password:<input type="password" value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}required/>
        <input type='submit' value='Submit'/>
            </form>
        </div>
    );
  }
}

