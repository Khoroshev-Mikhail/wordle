import React, {memo} from "react";
import './string.css'
const classNames = require('classnames');
export default memo(String);

function String(props){
    //Рефакторинг? className
    return(
        <div className="grid__string">
            {Array(5).fill().map((_, i) => {

                const trueLetter = props.trueWord ? props.trueWord[i].toLowerCase() : ''
                const currentletter = props.attempt[i]

                const trueHit = props.tried && currentletter === trueLetter
                const hit = props.tried && props.trueWord.toLowerCase().includes(currentletter)

                if(trueHit && trueLetter !== ''){
                    props.setTrueLetters(trueLetter)
                }
                if(hit){
                    props.setIncludedLetters(currentletter)
                }

                const letterClass = classNames({
                    'missed' : props.tried && !trueHit && !hit,
                    'active' : props.current,
                    'grid__letter' : true,
                    'yellow': hit,
                    'green' : trueHit,
                })
                return (
                    <div key={i} className={letterClass}> {props.attempt && props.attempt[i]}</div>
                )
            })}
        </div>
    )
}
