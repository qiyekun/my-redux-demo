import { connect } from 'react-redux'
import { addItem, minusItem } from '../actions'
import MainView from '../components/main'

const mapStateToProps = (state) => ({
  itemList: state.itemReduce
})

const mapDispatchToProps = (dispatch) => ({
  addItem: (value) => dispatch(addItem(value)),
  minusItem: (value) => dispatch(minusItem(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)
