import React, { Component } from 'react';
import axios from 'axios';

class searchProducts extends Component {
  state = {
    products: [],
    searchTerm: '',
  };

  componentDidMount() {
    this.fetchProducts();
  }
  fetchProducts=()=>{
    axios.get("http://localhost:8080/viewproducts")
    .then(response => {
        console.log(response)
        this.setState({products:response.data})
    })
    .catch(error=>{
        console.log(error)
    })
}
  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchTerm: value,
    });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return (
      <div>
        <center>
            <div className='header'/>
        <h2>Product Search</h2>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        {filteredProducts.length ? (
          <table>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
              </tr>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products match the search criteria.</p>
        )}
        </center>
      </div>
    );
  }
}

export default searchProducts;

