import React from "react";
import './string.css'
document.onkeydown = (e) => {
    console.log(e.key)
}
export default class String extends React.Component{
    constructor(props){
        super(props)
        this.push = this.push.bind(this)
    }
    push(e){
        console.log(document.onkeydown)
    }
    render(){
        return(
            <div className="string">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}