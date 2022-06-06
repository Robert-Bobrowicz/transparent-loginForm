import React from 'react'

export const LoginForm = () => {

  function handleFacebookOnClick() {
    return window.open("https://www.facebook.com/");
  }

  function handleGoogleOnClcick() {
    return window.open("https://www.google.com")
  }

  return (
    <div className="container">
        <div className="text">Login form</div>

        <form>
            <div className="field">
                <span className="fa fa-user"></span>
                <input type="text" placeholder="enter email@email.pl" required />
            </div>

            <div className="field">
                <span className="fa fa-lock"></span>
                <input type="password" placeholder="enter password" required />
            </div>

            <button>Log in</button>

            <div className="or">Or</div>

            <div className="icon-button">
                <span className="facebook" onClick={handleFacebookOnClick}>
                    <i className="fab fa-facebook"></i> Facebook
                </span>
                <span className="google" onClick={handleGoogleOnClcick}>
                    <i className="fab fa-google"></i> Google
                </span>
            </div>
        </form>
    </div>
  )
}