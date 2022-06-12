import React, {useState, useCallback} from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueWord = 'SOFIA';
const ATTEMPTS = 5;

export default function Grid(){
    const [attempt, setAttempt] = useState([]);
    const [word, setWord] = useState("");

    const write = useCallback(function(key){
        setWord(word => word.length === 5 ? word : word + key);
    }, []);

    const tryIt = useCallback(function(){
        if(attempt[id].toLowerCase() === trueWord.toLowerCase()){
            alert('Congrats! U are winner! Pls try again!')
        } else if(word === 5 && attempt.length < ATTEMPTS){ //Второе условие на случай если заполнены все 5 попыток
            setAttempt(arr => [...arr, word])
            setWord("")
        }
    }, [word]);

    const backspace = useCallback(function(){
        setWord(word => word.slice(0, -1))
    }, []);

    const tryAgain = useCallback(function(){
        setAttempt([])
        setWord("")
    }, []);

    return(
        <>
            <div className="grid">
                <button onClick={tryAgain}>Try Again</button>
                {attempt.map((word, i) => {
                    return <String key={i} attempt={word} tried={true} trueWord={trueWord}/>
                })}
                {Array(ATTEMPTS - attempt.length).fill().map((_, i) => {
                    return <String key={i} tried={false}/>
                })}
                <Keyboard write={write} tryIt={tryIt} backspace={backspace}/>
            </div>
        </>
    )
}

class Grid2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            attempt: [
                '',
                '',
                '',
                '',
                '',
            ],
            id: 0
        }
    }
    write = (key) => {
        const id = this.state.id
        if(this.state.attempt[id].length < 5){
            this.setState(({attempt}) => ({
                attempt: {...attempt, [id] : attempt[id] + key}
            }))
        }
    }
    try = () => {
        const id = this.state.id
        if(this.state.attempt[id].toLowerCase() === trueWord.toLowerCase()){
            alert('Congrats! U are winner! Pls try again!')
        } else if(this.state.attempt[id].length == 5 && id < 4){ //Второе условие на случай если заполнены все 5 попыток
            this.setState(({id}) => ({
                id: id + 1
            }))
        }
    }
    backspace = () => {
        const id = this.state.id
        if(id < 5){ //Когда заполнены все 5 попыток, id = 5 и тогда ошибка
            this.setState(({attempt}) => ({
                attempt: {...attempt, [id] : attempt[id].slice(0,-1)}
            }))
        }
    }
    tryAgain = () => {
        this.setState(({attempt}) => ({
            attempt : ['', '', '', '', '']
        }))
    }
    render(){
        return(
            <>
                <div className="grid">
                    <button onClick={this.tryAgain}>Try Again</button>
                    {Array(5).fill().map((_, id) => {
                        return <String key={id} attempt={this.state.attempt[id]} tried={id < this.state.id} trueWord={trueWord}/>
                    })}
                    <Keyboard write={this.write} try={this.try} backspace={this.backspace}/>
                </div>
            </>
        )
    }
}