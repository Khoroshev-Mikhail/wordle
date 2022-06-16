import React, { useEffect, memo } from "react";
import './keyboard.css'

// https://overreacted.io/a-complete-guide-to-useeffect/

// https://beta.reactjs.org/learn/describing-the-ui
// https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects

const firstRowKeyboard = ['q','w','e','r','t','y','u','i','o','p'];
const secondRowKeyboard =['a','s','d','f','g','h','j','k','l'];
const thirdRowKeyboard =['z','x','c','v','b','n','m'];

export default memo(Keyboard)

function Keyboard(props){
    function keyboardKeydown(e){
        if(e.key === 'Enter'){
            props.tryIt()
        } else if(e.key === 'Backspace'){
            props.backspace()
        } else{
            if(e.keyCode >= 65 && e.keyCode <= 90){
                props.write(e.key)
            }
        }
    }
    function pressKey(e){
        //Дублирование кода с line 18:26
        let key = e.target.value
        if(key === 'Enter'){
            props.tryIt()
        } else if(key === 'Backspace'){
            props.backspace()
        } else{
            //Нет проверки на keyCode
            props.write(key)
        }
    }
    useEffect(()=>{
        //Как написать эффект который применяет document.removeEventListener('keydown', keyboardKeydown) когда state.isWinner === true?
        //Может быть делать какую-то одну проверку isWinner в начале кода?
        document.addEventListener("keydown", keyboardKeydown)
        return ()=>{
            document.removeEventListener('keydown', keyboardKeydown)
        }
    }, [props.backspace, props.write, props.tryIt])
    return(
        <div className="keyboard">
            <div className="keyboard__row">
                {/*Желательное оформление кода как здесь или как на line:56 и line:60?*/}
                {firstRowKeyboard.map(key => {
                    return (
                        //Нужно ли выносить в отдельную компоненту? 
                        //По сути поменяется только <button ...props></button> на <Keyboard_button ...props />
                        <button key={key} disabled={props.isWinner} onClick={pressKey} value={key}>{key}</button>
                    )
                })}
            </div>
            <div className="keyboard__row">
                {secondRowKeyboard.map(key => <button key={key} disabled={props.isWinner} onClick={pressKey} value={key}>{key}</button> )}
            </div>
            <div className="keyboard__row">
                <button disabled={props.isWinner} onClick={props.tryIt} value="Enter">Enter</button>
                {thirdRowKeyboard.map(key => <button key={key} disabled={props.isWinner} onClick={pressKey} value={key}>{key}</button>)}
                <button disabled={props.isWinner} onClick={props.backspace} value="Backspace">Backspace</button>
            </div>
        </div>
    )
    
}
