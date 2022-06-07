import React from "react";
import './string.css'
/*document.onkeydown = (e) => {
    console.log(e.key)
}*/
export default class String extends React.Component{
    constructor(props){
        super(props)
        //this.push = this.push.bind(this)
    }
    /*push(e){
        console.log(document.onkeydown)
    }*/
    render(){
        return(
            <div className="string">
                <div>{this.props.attempt && this.props.attempt[0]}</div>
                <div>{this.props.attempt && this.props.attempt[1]}</div>
                <div>{this.props.attempt && this.props.attempt[2]}</div>
                <div>{this.props.attempt && this.props.attempt[3]}</div>
                <div>{this.props.attempt && this.props.attempt[4]}</div>
            </div>
        )
    }
}