import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {
    //wong!!!
    // let seller: string = "";
    // let rating: number = 0; //total

    // function getBestSeller(): void{//demo of backend
    //     seller = "Exotic Liquids";
    //     rating = 4.7; 
    //     alert(`Best seller: ${seller}, Rating: ${rating}`);
    // }

    //the good way
    //useState- contain array [2] 
    //1. the item
    //2. the function to change the item
    const [seller, setSeller] = useState<string>("");
    const [rating, setRating] = useState<number>(0);    
    function getBestSeller(): void{//demo of backend
        setSeller("Exotic Liquids");
        setRating(4.7);
    }
    return (
        <div className="BestSeller Box">
			<button onClick={getBestSeller}>Best Seller</button>
            <span>Best Seller: {seller}, rating ${rating}</span>
        </div>
    );
}

export default BestSeller;
