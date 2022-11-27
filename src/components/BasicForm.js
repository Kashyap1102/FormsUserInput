import useInput from "../hooks/use-input";

const isEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().includes("@");

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameInputHasError,
    isValid: firstNameIsValid,
    valueChangedHandler: firstNameChangedHandler,
    lostFocusHandler: firstNameLostFocusHandler,
    reset: resetFirstName,
  } = useInput(isEmpty);

  const {
    value: lastName,
    hasError: lastNameInputHasError,
    isValid: lastNameIsValid,
    valueChangedHandler: lastNameChangedHandler,
    lostFocusHandler: lastNameLostFocusHandler,
    reset: resetLastName,
  } = useInput(isEmpty);

  const {
    value: email,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangedHandler: emailChangedHandler,
    lostFocusHandler: emailLostFocusHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameLostFocusHandler}
          />
          {firstNameInputHasError && <p>First name cannot be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameLostFocusHandler}
          />
          {lastNameInputHasError && <p>Last name cannot be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangedHandler}
          onBlur={emailLostFocusHandler}
        />
        {emailInputHasError && <p>Please enter a valid email address.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
