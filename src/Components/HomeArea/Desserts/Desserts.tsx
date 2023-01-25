import "./Desserts.css";
import dessertImage from "../../../Assets/Images/dessert.jpg";

function Desserts(): JSX.Element {

    const desserts = [ // Demo for getting the list from backend
        { id: 1, name: "Ice Cream", price: 10 },
        { id: 2, name: "Apple Pie", price: 20 },
        { id: 3, name: "Pavlova", price: 15 },
        { id: 4, name: "Eclair", price: 17 }
    ];

    return (
        <div className="Desserts Box">

            <img src={dessertImage}/>

			<span>Our Desserts: </span>
            
            {desserts.map(item => <span key={item.id} >{item.name}{item.price}  🍨</span>)}

        </div>
    );
}

export default Desserts;
