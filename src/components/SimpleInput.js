import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangedHandler: nameChangedHandler,
    lostFocusHandler: nameLostFocusHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangedHandler: emailChangedHandler,
    lostFocusHandler: emailLostFocusHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameLostFocusHandler}
          onChange={nameChangedHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name cannot be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="eamil"
          onBlur={emailLostFocusHandler}
          onChange={emailChangedHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
