import "./style.css"
import { availableIProducts } from "./availableIProducts";
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";


function ProductList(){

    // const availableIProductsData = availableIProducts.map((product, id) => (
    //     <div key={id} className="productItem">
    //         <button type="button" onClick>
    //             <span>{product.name}</span> <span className="price">{product.price}</span>
    //         </button>
    //     </div>
    // ));
    

    let [selectedProducts, setSelectedProducts] = useState([])
    console.log(selectedProducts);
    
    const availableIProductsData = availableIProducts.map((product) => {
        
        let onProductClick = () => {
            setSelectedProducts([... selectedProducts, product])
        }

        if (selectedProducts.includes(product)){
            return(
                <div key={product.id}>
                    {product.name}
                </div>
            )
        } else {
            return(
                <div key={product.id}>
                    <button className="availableProductsListButton" type="button" onClick={onProductClick}>
                        {product.name}
                    </button>
                </div>
            )
        }
        
    })

    const selectedProductsData = selectedProducts.map((product) => {
        return(
            <div key={product.id}>
                {product.name} <span className="price">{product.price}</span>
                <button className="removeProductsButton" type="button" onClick={() => removeProduct(product)} >✖️</button>
            </div>
        )
    })

    const removeProduct = (productToRemove) => {
        setSelectedProducts (selectedProducts.filter(product => product !== productToRemove))
    }

    const clearSelectedProducts = () => {
        setSelectedProducts ([]);
    }

    return (
        <>
            <div className="selectedProductsContainer">
                <div>
                    <h1>
                        Selected products ✔️
                    </h1>
                    <div className="selectedProductsList">
                        {selectedProductsData}
                    </div>
                </div>
            </div>
            <MyButton type='button' onClick={clearSelectedProducts} name='clear selected products' />
            <div className="availableProductsContainer">
                <div>
                    <h1>
                        Available products 📋
                    </h1>
                    <div className="availableProductsList">
                        {availableIProductsData}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;