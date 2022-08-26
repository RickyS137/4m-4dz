import React from "react";
import ProductsList from "../../components/productsList/ProductsList";

class ProductsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {products: [], input : ''}
    }
    getProducts = () =>{
        this.setState({products: ['apple', 'orange', 'apricot']})
    }
    changeInput = (e) => {
        this.setState({input: e.target.value})
    }
    addProduct = (e) => {
        this.setState({products: [...this.state.products, this.state.input]})
        this.setState({input: ''})
    }
    clearProducts = () => {
        this.setState({products: []})
    }
    render() {
        return(
            <div>
                <h1>Products</h1>
                <input type="text" onChange={this.changeInput} value={this.state.input}/>
                <ProductsList productsList={this.state.products}/>
                <button onClick={this.getProducts}>Get products</button>
                <button onClick={this.addProduct} >Add</button>
                <button onClick={this.clearProducts}>Clear</button>
            </div>
        )
    }
}
export default ProductsPage