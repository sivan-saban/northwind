import { useEffect, useState } from "react";
import css from "./Clock.module.css";

function Clock(): JSX.Element {
    
    const [time, setTime] = useState<string>("");
    useEffect(()=>{
        //הצג את השעון כשנפתחת הקומפוננטה
        const timeId = setInterval(()=>{
            const now = new Date();
            setTime(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        },1000);

        //כשהקומפוננטה לא מוצגת יותר תהרוס את הקופוננטה
        return () => {clearInterval(timeId)};

    },[])
   
    
    return (
        <div className="Clock Box">
            <p className={css.CoolBackGround}>
            <span className={css.FontColor}> {time} </span>
			</p>
        </div>
    );
}

export default Clock;
