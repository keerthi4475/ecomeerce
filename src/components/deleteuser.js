import React, { Component } from 'react'
import axios from 'axios';
import './Hstyle.css';

export default class deleteuser extends Component {
    constructor() {
        super();
        this.state={
            users:[]
        };
    }
componentDidMount(){
    this.fetchallusers()
}
fetchallusers=()=>{
        axios.get("http://localhost:8080/viewusers")
        .then(response => {
            console.log(response)
            this.setState({users:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
deletehandler=(id)=>{
    axios.delete("http://localhost:8080/deleteuser/"+id)
    .then(response=>{
        this.fetchallusers()
    })
    .catch(error=>{
        console.log(error)
    })
}
render() {
    return (
      <div>
        <center>
        <div  className='header'/>
          <h2>Users List</h2>
          {this.state.users.length ? (
            <table className="product-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>username</th>
                  <th>password</th>
                  <th>email</th>
                  <th>blocked</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>
                    <td>{user.blocked}</td>
                    <td>
                      <button onClick={() => this.deletehandler(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No users available</p>
          )}
        </center>
      </div>
    );
  }
} 