import {useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
const [products, setProducts] = useState([])
const {category} = useParams();

useEffect(() => {
    getProducts(category)
    .then((data) => {setProducts(data)})
    .catch((err) => {
        console.log(err);
    });
}, [category]) 
    return (
        <section>
            <h1 className="title"> Wine Store</h1>
            <div className="productos-dionisio-grid">
                <ItemList list={products}/>
            </div>
            
        </section>
    );
};