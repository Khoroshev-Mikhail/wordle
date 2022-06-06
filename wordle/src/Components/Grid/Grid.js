import React from "react";
import String from "../String/String";
import './grid.css'

const trueVariatn = 'София';

export default class extends React.Component{
    render(){
        return(
            <div className="grid">
                <String />
                <String />
                <String />
                <String />
                <String />
                <String />
            </div>
        )
    }
}