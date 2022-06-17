import React, {memo} from "react";
import './string.css'
const classNames = require('classnames');
export default memo(String);

function String(props){
    //Рефакторинг? className
    return(
        <div className="string" style={{border: props.current ? '1px solid black' : 'none'}}>
            {Array(5).fill().map((_, i) => {

                const trueLetter = props.trueWord ? props.trueWord[i].toLowerCase() : ''
                const currentletter = props.attempt[i]

                const trueHit = props.tried && currentletter === trueLetter
                const hit = props.tried && props.trueWord.toLowerCase().includes(currentletter)

                if(trueHit){
                    props.setTrueLetters(trueHit)
                }
                if(hit){
                    props.setIncludedLetters(currentletter)
                }

                const letterClass = classNames({
                    'string__letterGreen' : trueHit,
                    'string__letterYellow': hit,
                })
                return (
                    <div key={i} className={letterClass}> {props.attempt && props.attempt[i]}</div>
                )
            })}
        </div>
    )
}
