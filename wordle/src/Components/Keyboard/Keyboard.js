import React from "react";
import './keyboard.css'

// https://overreacted.io/a-complete-guide-to-useeffect/

// https://beta.reactjs.org/learn/describing-the-ui
// https://beta-reactjs-org-git-effects-fbopensource.vercel.app/learn/synchronizing-with-effects

//Переписать через хуки
//Переписать покемоны через хуки

export default class Keyboard extends React.Component{
    constructor(props){
        super(props)
    }
    pressKey = (e) => {
        let key = e.target.value
        this.props.write(key)
    }
    keyboardKeydown = (e) => {
        console.log("e", e);
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
                    <button onClick={this.pressKey} value="q">q</button>
                    <button onClick={this.pressKey} value="w">w</button>
                    <button onClick={this.pressKey} value="e">e</button>
                    <button onClick={this.pressKey} value="r">r</button>
                    <button onClick={this.pressKey} value="t">t</button>
                    <button onClick={this.pressKey} value="y">y</button>
                    <button onClick={this.pressKey} value="u">u</button>
                    <button onClick={this.pressKey} value="i">i</button>
                    <button onClick={this.pressKey} value="o">o</button>
                    <button onClick={this.pressKey} value="p">p</button>
                </div>
                <div className="keyboard__row">
                    <button onClick={this.pressKey} value="a">a</button>
                    <button onClick={this.pressKey} value="s">s</button>
                    <button onClick={this.pressKey} value="d">d</button>
                    <button onClick={this.pressKey} value="f">f</button>
                    <button onClick={this.pressKey} value="g">g</button>
                    <button onClick={this.pressKey} value="h">h</button>
                    <button onClick={this.pressKey} value="j">j</button>
                    <button onClick={this.pressKey} value="k">k</button>
                    <button onClick={this.pressKey} value="l">l</button>
                </div>
                <div className="keyboard__row">
                    <button onClick={this.props.try} value="enter">enter</button>
                    <button onClick={this.pressKey} value="z">z</button>
                    <button onClick={this.pressKey} value="x">x</button>
                    <button onClick={this.pressKey} value="c">c</button>
                    <button onClick={this.pressKey} value="v">v</button>
                    <button onClick={this.pressKey} value="b">b</button>
                    <button onClick={this.pressKey} value="n">n</button>
                    <button onClick={this.pressKey} value="m">m</button>
                    <button onClick={this.props.backspace} value="backspace">backspace</button>
                </div>
            </div>
        )
    }
}