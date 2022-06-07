import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueVariant = 'SOFIA';

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            attempt: [
                'Gq',
                'FA',
                'RR',
                'EE',
                'QQ',
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
        if(this.state.attempt[id].length == 5){
            if(this.state.attempt[id].toLowerCase() === trueVariant.toLowerCase()){
                alert('Congrats! U are winner! Pls try again!')
            }
            this.setState(({id}) => ({
                id: id + 1
            }))
        }
    }
    backspace = () => {
        const id = this.state.id
        this.setState(({attempt}) => ({
            attempt: {...attempt, [id] : attempt[id].slice(0,-1)}
        }))
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
                        return <String key={id} attempt={this.state.attempt[id]}/>
                    })}
                    <Keyboard write={this.write} try={this.try} backspace={this.backspace}/>
                </div>
            </>
        )
    }
}