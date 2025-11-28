import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([]);

   const exists = (id) => {
      const exist = cart.some(p => p.id === id);
      return exist;
   };

   /* -------------------------------------------------------------------------- */
   /*                           Agregamos map y spread                           */
   /* -------------------------------------------------------------------------- */
   const addItem = (item) => {
      if (exists(item.id)) {//si existe un producto, creamos un nuevo array q agarre el q ya existe y le agregue la nueva cantidad 
         //map, cuido mutacion a nivel del array, es decir, hago un map para no modificar el producto original
         const updatedCart = cart.map((prod) => {
         if (prod.id === item.id) {
            //cuido mutacion a nivel de objeto, o sea q modifico el map a nivel objeto agregandole la nueva cantidad al producto q ya existe
            return { ...prod, quantity: prod.quantity + item.quantity };//modifico la cant del producto
         } else {//sino existe y este seria el 1er producto q se manda al carrito => meto el producto al carrito
            return prod;
         }
         });
         setCart(updatedCart);
         alert(`Agregado al carrito`);
      } else {//cuando el producto es enviado por primera vez al carrito
         setCart([...cart, item]);
         alert(`${item.name} agregado`);
      }
   };

   /* -------------------------------------------------------------------------- */
   /*                        Eliminar producto con filter                        */
   /* -------------------------------------------------------------------------- */
   const deleteItem = (id) => {
      const filtered = cart.filter((p) => p.id !== id);
      setCart(filtered);
      alert("Producto eliminado");
  };

   /* -------------------------------------------------------------------------- */
   /*                               Vaciar carrito                               */
   /* -------------------------------------------------------------------------- */
   const clearCart = () => {
      setCart([])
     }

   /* -------------------------------------------------------------------------- */
   /*                    Calcular total de ítems en el carrito                   */
   /* -------------------------------------------------------------------------- */
   const getTotalItems = () => {
      //reduce: acumula(acc) la suma totales del producto(p, variable iteradora), osea si yo le pongo q quiero 5 cant de un producto en la nav>carrito me va a aperecer 5, antes solo contaba 1
      const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0); //el 0 es punto de partida de reduce
      return totalItems;
   };

   /* -------------------------------------------------------------------------- */
   /*                               Calcular total                               */
   /* -------------------------------------------------------------------------- */
   const total = () => {
      const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);//va a acumular el precio por la cantidad a partir de 0
      
      return Math.round(total * 100) / 100;//para q quede la coma a dos decimales
  };

  const checkout = () => {
    const ok = confirm("¿Serguro que quiere finalizar la compra?");// confirm() es como un alert solo q esta devuelve un valor booleano gracias a sus opiciones: aceptar o cancelar

    if (ok) {//si confirm() devuelve true (acept) entonces hago esto:
      alert("¡Compra realizada con éxito!");
      clearCart();
    }
  };

     const values = {
        cart, 
        addItem,
        clearCart,
        getTotalItems,
        deleteItem,
        total,
        checkout
     }

     return <CartContext.Provider value={values} >{children}</CartContext.Provider>;
}