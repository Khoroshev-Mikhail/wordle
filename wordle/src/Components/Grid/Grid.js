import React, {useState, useCallback} from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueWord = 'SOFIA';
const ATTEMPTS = 5;

//Перевести на редакс
//Сделать подсветку правильно ведённых букв
//Правильно подключить стили css


export default function Grid(){
    const [word, setWord] = useState("");
    const [attempt, setAttempt] = useState([]);
    const [isWinner, setIsWinner] = useState(false)

    const write = useCallback(function(key){
        setWord(word => word.length === 5 ? word : (word + key));
    }, []);
    
    const tryIt = useCallback(function(){
        if(word.length === 5 && word.toLowerCase() === trueWord.toLowerCase()){
            setIsWinner(true)
            alert('Congrats! U are winner!')
        }
        if(word.length === 5 && attempt.length < ATTEMPTS){
            setAttempt(arr => [...arr, word])
            setWord("")
        }
    }, [word, attempt]);

    const backspace = useCallback(function(){
        setWord(word => word.slice(0, -1))
    }, []);

    const tryAgain = useCallback(function(){
        setAttempt([])
        setWord("")
        setIsWinner(false)
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
                        attempt={i === 0 ? word : false}
                        current={i === 0 ? true : false} 
                        trueWord={trueWord} //Может глобально прокинуть эту константу с index.js?
                    />
                })}
                {<Keyboard 
                    write={write} 
                    tryIt={tryIt} 
                    backspace={backspace}
                    isWinner={isWinner}
                />}
            </div>
        </>
    )
}

