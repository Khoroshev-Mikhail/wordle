import React, {useState, useCallback} from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueWord = 'SOFIA';
const ATTEMPTS = 5;

//Перевести на редакс
//Сделать подсветку правильно ведённых букв
//Правильно подключить стили css


//Ошибки
//Когда нажимаешь Enter всё выполняется как и должно, за исключением случаев, когда button Try Again в фокусе 

export default function Grid(props){

    const write = useCallback(function(key){
        props.setWord(word => word.length === 5 ? word : (word + key));
    }, []);
    
    const tryIt = useCallback(function(){
        if(props.word.length === 5 && props.word.toLowerCase() === trueWord.toLowerCase()){
            props.setIsWinner(true)
            alert('Congrats! U are winner!')
        }
        if(props.word.length === 5 && props.attempts.length < ATTEMPTS){
            props.setAttempts(arr => [...arr, props.word])
            props.setWord("")
        }
    }, [props.word, props.attempt]);

    const backspace = useCallback(function(){
        props.setWord(word => word.slice(0, -1))
    }, []);

    const tryAgain = useCallback(function(){
        props.setAttempts([])
        props.setWord("")
        props.setIsWinner(false)
    }, []);

    return(
        <>
            <div className="grid">
                <button onClick={tryAgain}>Try Again</button>
                {props.attempt.map((latestWord, i) => {
                    return <String 
                        key={i} 
                        attempt={latestWord} 
                        tried={true}
                    />
                })}
                {Array(ATTEMPTS - props.attempt.length).fill().map((_, i) => {
                    return <String 
                        key={i} 
                        tried={false} 
                        attempt={i === 0 ? props.word : false}
                        current={i === 0 ? true : false} 
                        trueWord={trueWord} //Может глобально прокинуть эту константу с index.js?
                    />
                })}
                {/*Если пользователь зашёл с телефона, нужно не подключать компоненту, а сразу вывести "родную" клавиатуру!*/}
                {<Keyboard 
                    write={write} 
                    tryIt={tryIt} 
                    backspace={backspace}
                    isWinner={props.isWinner}
                />}
            </div>
        </>
    )
}

