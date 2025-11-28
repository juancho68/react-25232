import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav=()=>{
    const {getTotalItems}=useCartContext();



    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            
                <li>
                    <Link to={"/category/tinto"}>Red</Link>
                </li>
                        
                <li>
                    <Link to={"/category/blanco"}>White</Link>
                </li>
            
                <li>
                    <Link to={"/carrito"}>Cart</Link>
                    {getTotalItems()>0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                    <span></span>
                </li>

            </ul>
        </nav>
    )
}