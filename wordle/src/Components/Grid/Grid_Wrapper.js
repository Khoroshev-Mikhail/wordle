import { connect } from "react-redux";
import { wordActionCreator, attemptsActionCreator, trueLettersActionCreator, includedLettersActionCreator, isWinnerActionCreator} from '../../Store/Store' 
import Grid from "./Grid";

export function mapStateToProps(state){
    return {
        word: state.word,
        attempts: state.attempts,
        trueLetters: state.trueLetters,
        includedLetters: state.includedLetters,
        isWinner: state.isWinner
    }
}
export const mapDispatchToProps = {
    setWord: wordActionCreator,
    setAttempts: attemptsActionCreator,
    setTrueLetters: trueLettersActionCreator,
    setIncludedLetters: includedLettersActionCreator,
    setIsWinner: isWinnerActionCreator,
}

const Grid_Wrapper = connect(mapStateToProps, mapDispatchToProps)(Grid)
export default Grid_Wrapper