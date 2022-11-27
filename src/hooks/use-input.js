import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validate(enteredValue);
  const hasError = !enteredValueIsValid && isTouched;

  const valueChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const lostFocusHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: enteredValueIsValid,
    valueChangedHandler,
    lostFocusHandler,
    reset
  };
};

export default useInput;
