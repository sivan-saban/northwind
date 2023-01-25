import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Sale from "../Sale/Sale";
import Search from "../Search/Search";
import Specials from "../Specials/Specials";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Interpolation: */}
			<Discount />

            {/* Conditional Rendering: */}
            <Specials />

            {/* Displaying Lists: */}
            <Desserts />

            {/* Props: */}
            <Sale percent={10} category={"drinks 🥂"}/>
            <Sale percent={15} category={"candies 🥫"}/>
            
            {/* State: */}
            <BestSeller/>

            {/* Two-Way Binding: */}
            <Search/>
            
            {/*  */}
            <Clock/>
            
        </div>
    );
}

export default Home;
