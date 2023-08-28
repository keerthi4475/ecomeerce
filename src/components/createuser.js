import React, { Component } from 'react'
import axios from 'axios';
import './Hstyle.css';
export default class createuser extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password:'',
            email: '',
            blocked: 'block',
        };
    }
    handleInputChange=(event)=>{
        const{name,value}=event.target;
        this.setState({
            [name]:value,
        });
    };
    handlecreateUser=()=>{
        const{username,password,email,blocked}=this.state;
        const user={username:this.state.username,password:this.state.password,email:this.state.email,blocked:this.state.blocked}
        axios.post('http://localhost:8080/createuser',user)
        .then((response)=>{
            if(response.status===200){
                alert("user created Succesfully");
            }else{
                alert("Failed to create user");
            }
        })
        .catch((error)=>{
            console.error('Error',error);
        });
        };

  render() {
    const {username,password,email,blocked}=this.state;
    return (
      <div>
        <center><h2> Create User</h2></center>
        <div  className='header'>
        <label>username:</label>
        <input type="text" name="username" value={username} onChange={this.handleInputChange}/>
        <label>password:</label>
        <input type="password" name="password" value={password} onChange={this.handleInputChange}/>
        <label>email:</label>
        <input type="text" name="email" value={email} onChange={this.handleInputChange}/>
        <label>blocked:</label>
        <input type="text" name="block" value={blocked} onChange={this.handleInputChange}/>
        <button onClick={this.handlecreateUser}>Create User</button>        
        </div>
      </div>
    );
  }
}
