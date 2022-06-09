import React from "react";
import './string.css'

export default function String(props){
    function isHit(i){
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
    }
    return(
        <div className="string">
            {Array(5).fill().map((_, i) => {
                return (
                    <div key={i} className={isHit(i)}> {props.attempt && props.attempt[i]}</div>
                )
            })}
        </div>
    )
}


class String2 extends React.Component{
    constructor(props){
        super(props)
    }
    isHit = (i) => {        
        if(!this.props.attempt[i]){
            return ''
        }
        if(!this.props.tried){
            return ''
        }
        const letter = this.props.attempt[i].toLowerCase()
        const trueLetter = this.props.trueWord[i].toLowerCase()
        if(letter === trueLetter){
            return 'string__letterGreen'
        } else if(this.props.trueWord.toLowerCase().includes(letter)){
            return 'string__letterYellow'
        }
    }
    render(){
        return(
            <div className="string">
                {Array(5).fill().map((_, i) => {
                    return (
                        <div key={i} className={this.isHit(i)}> {this.props.attempt && this.props.attempt[i]}</div>
                    )
                })}
            </div>
        )
    }
}