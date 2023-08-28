import React, { Component } from 'react';
import axios from 'axios';
import './Hstyle.css';
export default class adminoptions extends Component {
    handleSelectionChange = (event) => {
        const selectedOption = event.target.value;
        switch (selectedOption) {
            case 'addProduct':
                this.handleAddProduct();
                break;
            case 'deleteProduct':
                this.handleDeleteProduct();
                break;
            case 'viewProducts':
                this.handlefetchallproducts();
                break;
            case 'searchProducts':
                this.handlesearchproducts();
                break;
            case 'createUser':
                this.handlecreateUser();
                break;
            case 'deleteUser':
                this.handledeleteuser();
                break;
            case 'viewUsers':
                this.handlefetchallusers();
                break;
            default:
                break;
        }
    };
    handleAddProduct = () => {
            window.location.replace("/addproduct")
    };
    handleDeleteProduct = (id) => {
        window.location.replace("/deleteproduct") 
    };
    handlefetchallproducts = () => {
        window.location.replace("/deleteproduct")
    };
    handlesearchproducts = () => {
        window.location.replace("/searchProducts")
    };
    handlecreateUser = () => {
        window.location.replace("/createuser")
    };
    handledeleteuser = (id) => {
        window.location.replace("/deleteuser") 
    };
    handlefetchallusers = () => {
        window.location.replace("/deleteuser")
    };
    render() {
        return (
            <div className="header blue-text-field">
                <select className="dropdown-select" onChange={this.handleSelectionChange}>
                    <option value="">Select an option</option>
                    <option value="addProduct">Add Product</option>
                    <option value="deleteProduct">Delete Product</option>
                    <option value="searchProducts">Search Products</option>
                    <option value="viewProducts">View Products</option>
                    <option value="createUser">Create User</option>
                    <option value="viewUsers">View Users</option>
                    <option value="viewUserByUsername">View User by Username</option>
                    <option value="deleteUser">Delete User</option>
                    <option value="blockUser">Block User</option>
                    <option value="unblockUser">Unblock User</option>
                    <option value="deleteOrder">Delete Order</option>
                    <option value="viewOrdersByUsername">View Orders by Username</option>
                </select>
            </div>
        );
    }
}
