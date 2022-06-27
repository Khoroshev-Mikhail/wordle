import { configureStore, createSlice } from "@reduxjs/toolkit"

//Slicers
const wordSlicer = createSlice({
    name: "word",
    initialState: '',
    reducers: {
        wordActionCreator: (state, action) => action.payload //Как правильно называть поле?
    }
})
export const { wordActionCreator } = wordSlicer.actions
export const wordReducer = wordSlicer.reducer

const attemptsSlicer = createSlice({
    name: 'attempts',
    initialState: [],
    reducers: {
        attemptsActionCreator: (state, action) => action.payload
    }
})
export const { attemptsActionCreator } = attemptsSlicer.actions
export const attemptsReducer = attemptsSlicer.reducer

//Это хранилище используется для хранения угаданных пользователем букв (введенный пользователем символом = символу из "правильного слова" и находится в той же позиции)
const trueLettersSlicer = createSlice({
    name: 'trueLetters',
    initialState: [],
    reducers: {
        trueLettersActionCreator: (state, action) => {
            if(!state.includes(action.payload)){
                return [...state, action.payload]
            }
        }
    }
})
export const {trueLettersActionCreator} = trueLettersSlicer.actions
export const trueLettersReducer = trueLettersSlicer.reducer

//Это хранилище используется для хранения угаданных пользователем букв (введенный пользователем символом есть в "правильном слове" но не в той же позиции)
const includedLettersSlicer = createSlice({
    name: 'includedLetters',
    initialState: [],
    reducers: {
        includedLettersActionCreator: (state, action) => {
            if(!state.includes(action.payload)){
                return [...state, action.payload]
            }
        }
    }
})
export const { includedLettersActionCreator } = includedLettersSlicer.actions
export const includedLettersReducer = includedLettersSlicer.reducer 

const isWinnerSlicer = createSlice({
    name: 'isWinner',
    initialState: false,
    reducers: {
        isWinnerActionCreator: (state, action) => action.payload
    }
})
export const { isWinnerActionCreator } = isWinnerSlicer.actions;
export const isWinnerReducer = isWinnerSlicer.reducer;

//Store
const store = configureStore({
    reducer: {
        word: wordReducer,
        attempts: attemptsReducer,
        trueLetters: trueLettersReducer,
        includedLetters: includedLettersReducer,
        isWinner: isWinnerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})
export default store


