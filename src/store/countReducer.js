export const countReducer = function(state = 1, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    case "asyncAdd":
      return state + 2;
    default:
      return state;
  }
};
