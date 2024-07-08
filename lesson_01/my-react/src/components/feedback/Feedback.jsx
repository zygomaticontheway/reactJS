import { useState } from "react";
import MyButton from "../myButton/MyButton";
import "./feedback.css"

export default function Feedback(){
    const [countLikes, setCountLikes] = useState(0);

    const handleLikes = () => {
        setCountLikes (prev => prev + 1);
    };
    
    const [countDisLikes, setCountDisLikes] = useState(0);

    const handleDisLikes = () => {
        setCountDisLikes (prev => prev + 1);
    };

    const resetCounters = () => {
        setCountLikes (0);
        setCountDisLikes (0);
    };

    return(
        <div className="lesson-container">
            <div>
                {/* <span className="counterValue">{countLikes}</span> */}
                <MyButton name={`${countLikes}  👍`} type={'submit'} onClick={handleLikes}/>
                <MyButton name={`👎 ${countDisLikes}`} type={'submit'} onClick={handleDisLikes}/>
                {/* <span className="counterValue">{countDisLikes}</span> */}
            </div>
            <MyButton name={'Reset 👍 & 👎'} type={'submit'} onClick={resetCounters} className={'resetButton'}/>
        </div>
    )
}