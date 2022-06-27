const { legacy_createStore, combineReducers, bindActionCreators } = require("redux")

//initialState
const initialState = {
    word: '',
    attempts: [],
    trueLetters: [],
    includedLetters: [],
    isWinner: false
}

//Actions
const WORD = "WORD"
const ATTEMPTS = "ATTEMPTS"
const TRUE_LETTERS = "TRUE_LETTERS"
const INCLUDED_LETTERS = "INCLUDED_LETTERS"
const IS_WINNER = "IS_WINNER"

//Action Creators
const wordActionCreator = (word) => ({type: WORD, word})
const attemptsActionCreator = (attempt) => ({type: ATTEMPTS, attempt})
const isWinnerActionCreator = (isWinner) => ({type: IS_WINNER, isWinner})
const trueLettersActionCreator = (letter) => ({type: TRUE_LETTERS, letter})
const includedLettersActionCreator = (letter) => ({type: INCLUDED_LETTERS, letter})


//Reducers
function wordReducer(state = initialState.word, action){
    if(action.type === WORD){
        return action.word
    }
    return state
}
function attemptsReducer(state = initialState.attempts, action){
    if(action.type === ATTEMPTS){
        return action.attempt
    }
    return state
}
function trueLettersReducer(state = initialState.trueLetters, action){
    if(action.type === TRUE_LETTERS){
        if(!state.includes(action.letter)){
            return [...state, action.letter]
        }
    }
    return state
}
function includedLettersReducer(state = initialState.includedLetters, action){
    if(action.type === INCLUDED_LETTERS){
        if(!state.includes(action.letter)){
            return [...state, action.letter]
        }
    }
    return state
}
function isWinnerReducer(state = initialState.isWinner, action){
    if(action.type === IS_WINNER){
        return action.isWinner
    }
    return state
}

const reducers = combineReducers({
    word: wordReducer,
    attempts: attemptsReducer,
    trueLetters: trueLettersReducer,
    includedLetters: includedLettersReducer,
    isWinner: isWinnerReducer,
})

//Store
const store = legacy_createStore(reducers)
export default store

//MSTP & MDTP
export function mapStateToProps(){
    return function(state){
        return {
            word: state.word,
            attempts: state.attempts,
            trueLetters: state.trueLetters,
            includedLetters: state.includedLetters,
            isWinner: state.isWinner
        }
    }
}
export function mapDispatchToProps(){
    return function(dispatch){
        return {
            setWord: bindActionCreators(wordActionCreator, dispatch),
            setAttempts: bindActionCreators(attemptsActionCreator, dispatch),
            setTrueLetters: bindActionCreators(trueLettersActionCreator, dispatch),
            setIncludedLetters: bindActionCreators(includedLettersActionCreator, dispatch),
            setIsWinner: bindActionCreators(isWinnerActionCreator, dispatch),
        }
    }
}


