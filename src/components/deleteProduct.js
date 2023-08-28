import React, { Component } from 'react'
import axios from 'axios';
import './Hstyle.css';

export default class deleteProduct extends Component {
    constructor() {
        super();
        this.state={
            products:[]
        };
    }
componentDidMount(){
    this.fetchallProducts()
}
    fetchallProducts=()=>{
        axios.get("http://localhost:8080/viewproducts")
        .then(response => {
            console.log(response)
            this.setState({products:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
deletehandler=(sid)=>{
    axios.delete("http://localhost:8080/deleteProduct/"+sid)
    .then(response=>{
        this.fetchallProducts()
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
          <h2>Products List</h2>
          {this.state.products.length ? (
            <table className="product-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button onClick={() => this.deletehandler(product.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products available</p>
          )}
        </center>
      </div>
    );
  }
} 