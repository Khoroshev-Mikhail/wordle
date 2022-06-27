import React, {useCallback} from "react";
import Keyboard from "../Keyboard/Keyboard";
import String from "../String/String";
import './grid.css'


const trueWord = 'SOFIA';
const ATTEMPTS = 5;


//Ошибки
//Warning: Cannot update a component (`Connect(Grid)`) while rendering a different component (`String`). To locate the bad setState() call inside `String`, follow the stack trace as described in
//Когда полностью угадываешь слово (победа) - не подсвечивает его буквы зелёным
//Когда нажимаешь Enter всё выполняется как и должно, за исключением случаев, когда в фокусе button "Try Again"
//На клаве не очищаются классы

export default function Grid(props){
    const write = useCallback(function(key){
        if(props.word.length < 5){
            props.setWord(props.word + key)
        }
    }, [props.word]); //Warning на пропсы
    
    const tryIt = useCallback(function(){
        if(props.word.length === 5){
            if(props.word.toLowerCase() === trueWord.toLowerCase()){
                props.setIsWinner(true)
                alert('Congrats! U are winner!')
            }else{
                props.setAttempts([...props.attempts, props.word])
                props.setWord('')
            }
        }
    }, [props.word, props.attempts, props.isWinner]); //Warning на пропсы

    const backspace = useCallback(function(){
        if(!props.isWinner){ //Чтобы не было возможности стереть слово после "Победы". Рефакторинг?
            props.setWord(props.word.slice(0, -1))
        }
    }, [props.word, props.isWinner]); //Warning на пропсы

    const tryAgain = useCallback(function(){
        props.setAttempts([]) //Здесь ошибка
        props.setWord("")
        props.setIsWinner(false)
    }, []); //Warning на пропсы
    return(
        <div className="main">
            <div className="grid">
                {props.attempts.map((latestWord, i) => {
                    return <String 
                        key={i} 
                        attempt={latestWord} 
                        tried={true}
                        setTrueLetters = {props.setTrueLetters}
                        setIncludedLetters = {props.setIncludedLetters}
                        trueWord={trueWord} //Может глобально прокинуть эту константу с index.js?
                    />
                })}
                {Array(ATTEMPTS - props.attempts.length).fill().map((_, i) => {
                    return <String 
                        key={i} 
                        tried={false} 
                        attempt={i === 0 ? props.word : false}
                        current={i === 0 ? true : false} 
                        trueWord={trueWord} //Может глобально прокинуть эту константу с index.js?
                    />
                })}
                </div>
                {/*Если пользователь зашёл с телефона, может не подключать компоненту, а сразу вывести "родную" клавиатуру устройства!*/}
                {<Keyboard 
                    write={write} 
                    tryIt={tryIt} 
                    backspace={backspace}
                    isWinner={props.isWinner}
                    trueLetters={props.trueLetters}
                    includedLetters={props.includedLetters}
                    attempts={props.attempts}
                />}
                <div>
                    <button onClick={tryAgain}>Try Again</button>
                </div>
        </div>
    )
}

