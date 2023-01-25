import "./Sale.css";

interface SaleProps {
    percent: number;
    category: string;
}

function Sale(props: SaleProps): JSX.Element {
    return (
        <div className="Sale Box">
			<span>Sale: {props.category} %discount on all {props.category}  </span>
        </div>
    );
}

export default Sale;
