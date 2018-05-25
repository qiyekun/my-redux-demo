const itemReduce = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.text]
    case 'MINUS_ITEM':
      let newState = [...state];
      newState.shift()
      return newState;
    default:
      return state
  }
}

export default itemReduce
