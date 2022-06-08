import React, {useState} from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueWord = 'SOFIA';


const arr = ["1111", "2222", "3333"]
const key = "X"
const id = 1



// ["1111", "2222X", "3333"]

// const newArr = [...arr.slice(0,-1), arr[arr.length - 1] + letter]

export default function Grid(){
    const [id, setId] = useState(0);
    const [attempt, setAttempt] = useState(['', '', '', '', '']);
    function write(key){
        if(attempt[id].length < 5){
            setAttempt(arr => {
                const newArr = [...arr]
                newArr[id] += key
                return newArr
            })
        }
    }
    function tryIt(){
        if(attempt[id].toLowerCase() === trueWord.toLowerCase()){
            alert('Congrats! U are winner! Pls try again!')
        } else if(attempt[id].length == 5 && id < 4){ //Второе условие на случай если заполнены все 5 попыток
            setId(id + 1)
        }
    }
    function backspace(){
        if(id < 5){ //Когда заполнены все 5 попыток, id = 5 и тогда ошибка
            setAttempt(arr => {
                const newArr = [...arr]
                newArr[id] = newArr[id].slice(0,-1)
                return newArr
            })
        }
    }

    function tryAgain(){
        setAttempt(['', '', '', '', ''])
    }

    return(
        <>
            <div className="grid">
                <button onClick={tryAgain}>Try Again</button>
                {Array(5).fill().map((_, i) => {
                    return <String key={i} attempt={attempt[i]} tried={i < id} trueWord={trueWord}/>
                })}
                <Keyboard write={write} try={tryIt} backspace={backspace}/>
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