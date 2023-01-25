import "./Specials.css";

function Specials(): JSX.Element {

    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6;
    }

    return (
        <div className="Specials Box">

			<span>Our Specials: </span>

            {/* Operator Ternary: */}
            { isWeekend() ? <span> Pizza 🍕 </span> : <span> Pasta 🍝 </span> }

            {/* Short Circuit: */}
            { isWeekend() && <span> Fish & Chips 🍟 </span> }

            {/* Short Circuit: */}
            { isWeekend() || <span> Sushi 🍣 </span> }

        </div>
    );
}

export default Specials;
