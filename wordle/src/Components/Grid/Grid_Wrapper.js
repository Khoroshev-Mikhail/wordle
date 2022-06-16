import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../Store/Store";
import Grid from "./Grid";

const Grid_Wrapper = connect(mapStateToProps(), mapDispatchToProps())(Grid)
export default Grid_Wrapper