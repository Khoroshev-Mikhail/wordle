import React, { useEffect } from "react";
import './keyboard.css'

// https://overreacted.io/a-complete-guide-to-useeffect/

// https://beta.reactjs.org/learn/describing-the-ui
// https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects

//Переписать через хуки
//Переписать покемоны через хуки
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
    }, [backspace, write, tryIt])
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
                <button onClick={props.tryIt} value="enter">enter</button>
                {thirdRowKeyboard.map(key => {
                    return (
                        <button key={key} onClick={pressKey} value={key}>{key}</button>
                    )
                })}
                <button onClick={props.backspace} value="backspace">backspace</button>
            </div>
        </div>
    )
    
}

class Keyboard2 extends React.Component{
    constructor(props){
        super(props)
    }
    pressKey = (e) => {
        let key = e.target.value
        this.props.write(key)
    }
    keyboardKeydown = (e) => {
        //console.log("e", e);
        if(e.key === 'Enter'){
            this.props.try()
        } else if(e.key === 'Backspace'){
            this.props.backspace()
        } else{
            if(e.keyCode >= 66 && e.keyCode <= 90){
                this.props.write(e.key)
            }
        }
    }
    componentDidMount(){
        // getEventListeners(document)

        console.log("componentDidMount")
        
        document.addEventListener("keydown", this.keyboardKeydown)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        document.removeEventListener('keydown', this.keyboardKeydown)
    }

    render(){
        return(
            <div className="keyboard">
                <div className="keyboard__row">
                    {firstRowKeyboard.map(key => {
                        return (
                            <button onClick={this.pressKey} value={key}>{key}</button>
                        )
                    })}
                </div>
                <div className="keyboard__row">
                {secondRowKeyboard.map(key => {
                        return (
                            <button onClick={this.pressKey} value={key}>{key}</button>
                        )
                    })}
                </div>
                <div className="keyboard__row">
                    <button onClick={this.props.try} value="enter">enter</button>
                    {thirdRowKeyboard.map(key => {
                        return (
                            <button onClick={this.pressKey} value={key}>{key}</button>
                        )
                    })}
                    <button onClick={this.props.backspace} value="backspace">backspace</button>
                </div>
            </div>
        )
    }
}