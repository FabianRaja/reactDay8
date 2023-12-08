import React, { useContext } from "react";
import { AppCtx } from "./Context/AppContext";

export default function Cart(){
       
    //destructed all the context values and states
    const {productImg,productName,productDescription,productRating,productPrice,productDiscount,
        cartCount,setCartCount,productStock,setProductStock,subTotal,setSubTotal,total,setTotal,saved,setSaved}=useContext(AppCtx);
    
     //add function to add item to cart and reduce the stock value
    function addFunction(){
        //if stock is empty no item can be added to the cart
        if(productStock===0){

        }else{
            setCartCount(cartCount+1);
            setProductStock(productStock-1);
            setSubTotal(subTotal+549);
        }
    }
    //remove function to remove item from the cart and increase the stock value
    function removeFunction(){
        //if cart value is zero no cart item can be removed
        if(cartCount===0){
            
        }else{
            setCartCount(cartCount-1);
            setProductStock(productStock+1);
            setSubTotal(subTotal-549);
        }
        
    }
    //check out function for calculating the total price after the discounting calculation per the quantity of the items
    function checkOutFunction(){
        //discount calculation
        //used Math.floor for rounding of the decimal number to a number
       const a=12.96/100;
       const b=subTotal*a;
       const c=Math.floor(subTotal-b);
       setSaved(Math.floor(b))
       setTotal(c);
    }

    return (
        <div className="cart">
            
            <hr/>
            
            <div className="subject">

                <div>
                    <img src={productImg} alt="image"/>
                </div>

                <div className="aligncenter">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <p>Rating : {productRating}</p>
                    <h3 className="aligncenter">Stock : {productStock}</h3>
                </div>

                <div>
                    
                </div>

                <div>
                   <h3 className="aligncenter">Rs {productPrice}</h3>
                   <div className="addRemoveButtons">
                    <button className="addButton" onClick={()=>addFunction()}>Add Item</button>
                    <button className="removeButton" onClick={()=>removeFunction()}>Remove Item</button>
                   </div>
                   <h3 className="aligncenter">In Cart</h3>
                   <h3 className="aligncenter">{cartCount}</h3>
                </div>

            </div>
            
            <hr/>


            <div className="prefooter">
                <div className="prefooterContent">
                    <h3>SUBTOTAL</h3>
                    <h3 className="textCenter">Rs {subTotal}</h3>
                </div>
                <div className="prefooterContent">
                    <h3>DISCOUNT</h3>
                    <h3 className="textCenter">{productDiscount}</h3>
                </div>
                <div className="prefooterContent">
                    <h3>SHIPPING</h3>
                    <h3 className="textCenter">FREE</h3>
                </div>
                <div className="checkOutSection">
                <button className="checkOutButton" onClick={()=>checkOutFunction()}>CheckOut</button>
                 </div>
            </div>

            <hr/>

            
           
            <div className="footerSection">
                <div className="footer">
                    <h3 className="aligncenter"><b>TOTAL</b></h3>
                    {/* if only checkOut button is clicked and discount price is calculated the amount saved will be displayed */}
                    <h3 className="aligncenter">{saved!=0?(<p>(Saved : {saved}Rs)</p>):<div></div>}</h3>
                    <h3 className="aligncenter"><b>Rs {total}</b> </h3>
                </div>               
            </div>
            
           
        </div>
    )
}