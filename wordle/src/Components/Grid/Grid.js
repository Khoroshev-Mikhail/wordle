import React, {useState, useCallback} from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueWord = 'SOFIA';
const ATTEMPTS = 15;

export default function Grid(){
    const [word, setWord] = useState("");
    const [attempt, setAttempt] = useState(['aaaaa']); 

    const write = useCallback(function(key){
        setWord(word => word.length === 5 ? word : (word + key));
    }, [word]);
    
    const tryIt = useCallback(function(){
        console.log('ya tut')
        console.log(attempt)
        if(attempt[attempt.length - 1].toLowerCase() === trueWord.toLowerCase()){
            alert('Congrats! U are winner! Pls try again!')
        } else if(word.length === 5 && attempt.length < ATTEMPTS){
            setAttempt(arr => [...arr, word])
            setWord("")
        }
    }, [word, attempt]);

    const backspace = useCallback(function(){
        setWord(word => word.slice(0, -1))
    }, []);

    const tryAgain = useCallback(function(){
        setAttempt([""])
        setWord("")
    }, []);

    return(
        <>
            <div className="grid">
                <button onClick={tryAgain}>Try Again</button>
                {attempt.map((latestWord, i) => {
                    return <String 
                        key={i} 
                        attempt={latestWord} 
                        tried={true}
                    />
                })}
                {Array(ATTEMPTS - attempt.length).fill().map((_, i) => {
                    return <String 
                        key={i} 
                        tried={false} 
                        trueWord={trueWord} 
                        attempt={i === 0 ? word : false} 
                    />
                })}
                {<Keyboard write={write} tryIt={tryIt} backspace={backspace}/>}
            </div>
        </>
    )
}

