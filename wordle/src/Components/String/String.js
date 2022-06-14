import React, {memo} from "react";
import './string.css'

export default memo(String);

function String(props){
    /*function isHit(i){
        if(!props.attempt[i]){
            return ''
        }
        if(!props.tried){
            return ''
        }
        const letter = props.attempt[i].toLowerCase()
        const trueLetter = props.trueWord[i].toLowerCase()
        if(letter === trueLetter){
            return 'string__letterGreen'
        } else if(props.trueWord.toLowerCase().includes(letter)){
            return 'string__letterYellow'
        }
    }*/
    return(
        <div className="string" style={{background: props.tried ? 'green' : 'red'}}>
            {Array(5).fill().map((_, i) => {
                return (
                    <div key={i}> {props.attempt && props.attempt[i]}</div>
                )
            })}
        </div>
    )
}
