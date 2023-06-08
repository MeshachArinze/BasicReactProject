export const reducer = (state, action) => {
  if (action.type === JUMP) {
    return {
      ...state,
      xIsNext: action.payload.step % 2 === 0,
      history: state.history.slice(0, action.payload.step + 1),
    };
  } else if (action.type === MOVE) {
    return {
      ...state,
      history: state.action.concat({
        squares: action.payload.squares,
      }),
      xIsNext: !state.xIsNext,
    };
  } else {
    return state;
  }
};
