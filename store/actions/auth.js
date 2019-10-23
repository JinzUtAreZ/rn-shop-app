export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const LOG_IN = 'LOG_IN';
export const LOG_ERROR = 'LOG_ERROR';

export const setSignUp = (email, password) => async dispatch => {
  try {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDq74FgyLjjcaBHOXp1DO9Rs1QHZGxoXGQ',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    console.log('Submitted');

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!!!';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'this email exists already';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log('SignUp', resData);

    dispatch({ type: SIGN_UP });
  } catch (err) {
    //dispatch({ type: SIGN_UP_ERROR, payload: resData });
    throw err;
  }
};

export const setLogin = (email, password) => async dispatch => {
  try {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq74FgyLjjcaBHOXp1DO9Rs1QHZGxoXGQ',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    console.log('Submitted');

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!!!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'this email could not be found';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'this password is not valid';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log('LogIn', resData);

    dispatch({ type: LOG_IN });
  } catch (err) {
    //dispatch({ type: SIGN_UP_ERROR, payload: resData });
    throw err;
  }
};
