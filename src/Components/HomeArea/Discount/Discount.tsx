import { SyntheticEvent } from "react";
import "./Discount.css";

function Discount(): JSX.Element {

    const discount = 25; // Demo for getting the discount from the server.

    function showDiscount():void {
        alert("Discount "+discount + "%");
    }
    function showMassage(args:SyntheticEvent):void {
        console.log(args);
        alert("We accept all credit card");
    }
    function buyNow(amount:number):void {
        alert(`Buy ${amount} products get one for free`);
    }

    return (
        <div className="Discount Box">

            <span>Only now - {discount}% discount on all products!</span>
            <button onClick={showDiscount}>💰</button>
            <button onClick={showMassage}>💳</button>
            <button onClick={()=>{buyNow(3)}}>💳</button>

        </div>
    );

}

export default Discount;
