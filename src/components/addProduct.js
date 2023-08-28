import React, { Component } from 'react'
import axios from 'axios';
import './Hstyle.css';
export default class addProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            itemtype:'',
            price: 0,
            quantity: 0,
        };
    }
    handleInputChange=(event)=>{
        const{name,value}=event.target;
        this.setState({
            [name]:value,
        });
    };
    handleAddProduct=()=>{
        const{name,itemtype,price,quantity}=this.state;
        const product={name:this.state.name,itemtype:this.state.itemtype,price:this.state.price,quantity:this.state.quantity}
        axios.post('http://localhost:8080/addProduct',product)
        .then((response)=>{
            if(response.status===200){
                alert("product added Succesfully");
            }else{
                alert("Failed to add product");
            }
        })
        .catch((error)=>{
            console.error('Error adding product',error);
        });
        };

  render() {
    const {name,itemtype,price,quantity}=this.state;
    return (
      <div>
        <center><h2> Add Product</h2></center>
        <div  className='header'>
        <label>Product Name:</label>
        <input type="text" name="name" value={name} onChange={this.handleInputChange}/>
        <label>Item Type:</label>
        <input type="text" name="itemtype" value={itemtype} onChange={this.handleInputChange}/>
        <label>Product Price:</label>
        <input type="text" name="price" value={price} onChange={this.handleInputChange}/>
        <label>Quantity:</label>
        <input type="text" name="quantity" value={quantity} onChange={this.handleInputChange}/>
        <button onClick={this.handleAddProduct}>Add Product</button>        
        </div>
      </div>
    );
  }
}
