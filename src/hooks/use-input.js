import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return { value: state.value, isTouched: action.isTouched };
  } else if (action.type === "RESET") {
    return initialState;
  }
};
const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const enteredValueIsValid = validate(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueChangedHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const lostFocusHandler = (event) => {
    dispatch({ type: "BLUR", isTouched: true });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    isValid: enteredValueIsValid,
    valueChangedHandler,
    lostFocusHandler,
    reset,
  };
};

export default useInput;
