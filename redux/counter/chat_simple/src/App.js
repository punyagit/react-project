function createStore(reducer, initialState) {
  let state = initialState;

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
}

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      message: state.message.concat(action.message)
    }
  }
  else {
    return state
  }
}

const initialState = { message: [] }

const store = createStore(reducer, initialState)

const addMessageAction1 = {
  type: 'ADD_MESSAGE',
  message: 'Looking good',
}

store.dispatch(addMessageAction1)
const stateV1 = store.getState()

const addMessageAction2 = {
  type: 'ADD_MESSAGE',
  message: 'Looking good',
}

store.dispatch(addMessageAction2)
const stateV2 = store.getState()


console.log(stateV1)
console.log(stateV2)
