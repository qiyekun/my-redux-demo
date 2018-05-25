const infoReduce = (state = {}, action) => {
  switch (action.type) {
    case 'INFO_LIST':
      return { id: 'xxx', name: 'xxxxxx', age: '123' };
    default:
      return state
  }
}

export default infoReduce
