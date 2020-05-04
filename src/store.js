import { createStore } from 'redux'

function nameList(state = [], action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.name]
    default:
      return state
  }
}

const store = createStore(
  nameList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
