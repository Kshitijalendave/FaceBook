import './Register.css'

function Register() {
  return (
      <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">FaceBook</h3>
            <span className="loginDesc">
              Connect with Friends and the world around you on Facebook
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder='UserName' className="loginInput" />
              <input placeholder='Email' className="loginInput" />
              <input placeholder='Password' className="loginInput" />
              <input placeholder='Password Again' className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">Log into Account</button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Register










// import './register.css'

// function register() {
//   return (
//    <>
//    <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">FaceBook</h3>
//           <span className="loginDesc">
//             Connect with Friends and the world around you on Facebook
//           </span>
//         </div>
//         <div className="loginRight">
//           <div className="loginBox">
//             <input placeholder='Username' className="loginInput" />
//             <input placeholder='Email' className="loginInput" />
//             <input placeholder='Password' className="loginInput" />
//             <input placeholder='confirm Password ' className="loginInput" />
//             <button className="loginButton">Log In</button>
//             <span className="loginForgot">Forgot Password?</span>
//             <button className="loginRegisterButton">Create a new Account</button>
//           </div>
//         </div>
//       </div>
//     </div>
//    </>
//   )
// }

// export default register