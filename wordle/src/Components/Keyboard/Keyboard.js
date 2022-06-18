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
                <div className="spacer half"></div>
                {secondRowKeyboard.map(key => <button key={key} disabled={props.isWinner} onClick={pressKey} value={key}>{key}</button> )}
                <div className="spacer half"></div>
            </div>
            <div className="keyboard__row">
                <button disabled={props.isWinner} onClick={props.tryIt} value="Enter" className="one-and-half">Enter</button>
                {thirdRowKeyboard.map(key => <button key={key} disabled={props.isWinner} onClick={pressKey} value={key}>{key}</button>)}
                <button disabled={props.isWinner} onClick={props.backspace} value="Backspace" className="one-and-half">
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 0 24 24" width="24">
                        <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
    
}
