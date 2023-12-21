import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length +1; index++) {
        cart[index] = 0; 
        
    }
    console.log(cart)
    return cart;
}

const ShopContextProvider = (props) =>{
    const[cartItem,setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        console.log([itemId]+"cartItem")
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItem)
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        console.log(cartItem,"cartItem")
        for(let item in cartItem){
            if(cartItem[item]>0){
                    let itemInfo = all_product.find((product)=>product.id === Number(item))
                    console.log(item+"item") 
                    console.log(itemInfo+"itemInfo")
                    totalAmount =totalAmount + (itemInfo.new_price *  cartItem[item]);  
            }
            console.log(totalAmount+'totalAmount') 
        }
        return totalAmount;
    }
    const getTotalCartItem=()=>{
        
        let totalItem =0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                totalItem += cartItem[item]
                
            }
            console.log(totalItem ,"totalItem")
            
        }
        return totalItem;
    }
    const contextValue = {getTotalCartItem,getTotalCartAmount ,all_product, cartItem, addToCart,removeFromCart }
    return(
        <ShopContext.Provider value ={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;