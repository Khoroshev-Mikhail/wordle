import React, {memo} from "react";
import './string.css'
const classNames = require('classnames');
export default memo(String);

function String(props){
    //Рефакторинг className
    return(
        <div className="string" style={{border: props.current ? '5px solid black' : 'none'}}>
            {Array(5).fill().map((_, i) => {
                const trueLetter = props.trueWord ? props.trueWord[i].toLowerCase() : ''
                const currentletter = props.attempt[i]
                const letterClass = classNames({
                    'string__letterGreen' : props.tried && currentletter === trueLetter,
                    'string__letterYellow': props.tried && props.trueWord.toLowerCase().includes(currentletter),
                })
                return (
                    <div key={i} className={letterClass}> {props.attempt && props.attempt[i]}</div>
                )
            })}
        </div>
    )
}
