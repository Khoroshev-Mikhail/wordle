import React, { useEffect } from "react";
import { memo } from "react";
import './keyboard.css'

// https://overreacted.io/a-complete-guide-to-useeffect/

// https://beta.reactjs.org/learn/describing-the-ui
// https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects

const firstRowKeyboard = ['q','w','e','r','t','y','u','i','o','p'];
const secondRowKeyboard =['a','s','d','f','g','h','j','k','l'];
const thirdRowKeyboard =['z','x','c','v','b','n','m'];

export default memo(Keyboard)

function Keyboard(props){
    function pressKey(e){
        let key = e.target.value
        props.write(key)
    }
    useEffect(()=>{
        function keyboardKeydown(e){
            if(e.key === 'Enter'){
                console.log('enter')
                props.tryIt()
            } else if(e.key === 'Backspace'){
                props.backspace()
            } else{
                if(e.keyCode >= 65 && e.keyCode <= 90){
                    props.write(e.key)
                }
            }
        }
        document.addEventListener("keydown", keyboardKeydown)
        return ()=>{
            document.removeEventListener('keydown', keyboardKeydown)
        }
    }, [props.backspace, props.write, props.tryIt])
    return(
        <div className="keyboard">
            <div className="keyboard__row">
                {firstRowKeyboard.map(key => {
                    return (
                        <button key={key} onClick={pressKey} value={key}>{key}</button>
                    )
                })}
            </div>
            <div className="keyboard__row">
            {secondRowKeyboard.map(key => {
                    return (
                        <button key={key} onClick={pressKey} value={key}>{key}</button>
                    )
                })}
            </div>
            <div className="keyboard__row">
                <button onClick={props.tryIt} value="Enter">enter</button>
                {thirdRowKeyboard.map(key => {
                    return (
                        <button key={key} onClick={pressKey} value={key}>{key}</button>
                    )
                })}
                <button onClick={props.backspace} value="Backspace">backspace</button>
            </div>
        </div>
    )
    
}
