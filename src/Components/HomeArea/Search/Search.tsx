import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Search.css";

function Search(): JSX.Element {

const [item, setItem] = useState<string>("");

// function updateItem(args:SyntheticEvent): void {
//     console.dir((args.target as HTMLInputElement).value);
//     setItem((args.target as HTMLInputElement).value);
// }
 function updateItem(args:ChangeEvent<HTMLInputElement>): void {
    setItem(args.target.value);
 }


function clear():void {
    setItem("");
}

    return (
        <div className="Search Box">
			<label>Search:</label>
            <input type="text" onChange={updateItem} value={item}/>
            <span>You are searching for :{item} </span>
            <button onClick={clear} >❌</button>
        </div>
    );
}

export default Search;
