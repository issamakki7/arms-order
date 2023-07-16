import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import "./Login.css";
import validateLoginInfo from "./validateLoginInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginValues {
  bookingId: string;
}

function Login() {
  const navigate = useNavigate();

  const [loginValues, setLoginValues] = useState<LoginValues>({
    bookingId: "",
  });
  axios.defaults.withCredentials = false;

  const [errors, setErrors] = useState<{ fields?: string }>({});
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(validateLoginInfo(loginValues));

    // axios
    //   .get(`https://localhost:7109/HomeConnect/Login?bookingId=${loginValues.bookingId}&password=${loginValues.pass}`, {
    //     bookingId: loginValues.bookingId,
    //   },)
    //   .then((response) => {
    //     if (response.status != 401) {
    //       const user = response.data;
    //       localStorage.setItem("currentUser", JSON.stringify(user));

    //         window.location.href = "/homeconnect/profile";

    //     }
    //   })  .catch(error =>{

    //     alert(error.response.data.message);

    //   })
    if (localStorage.getItem("currentUser")) {
      navigate("/dashboard");
    }
  };

  function handleGuestClick() {
    localStorage.setItem("currentUser", "123456");
  }
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/dashboard");
    }
  }, []);

  // useEffect(() => {
  //   axios.get(`https://localhost:7109/HomeConnect/Login?bookingId=${loginValues.bookingId}`).then((response) => {
  //     console.log('hey')
  //     console.log(response);
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].bookingId);
  //     }
  //   });
  // }, []);

  return (
    <form onSubmit={handleSubmit} className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1 className="login-title">Login Page</h1>
            <div className="input-area">
              <input
                type="text"
                placeholder="Enter your Booking ID"
                value={loginValues.bookingId}
                onChange={handleChange}
                name="bookingId"
                className="name"
              />
            </div>

            <div className="button-area">
              <a href="/dashboard">
                <button type="submit" className="loginpage-button">
                  Log In
                </button>{" "}
              </a>
            </div>

            <span className="signup-link">
              Don't have a booking?{" "}
              <button onClick={handleGuestClick} className="guest-link">
                Continue As Guest
              </button>
            </span>

            <div className="loginerror-msg">
              <p>{errors.fields}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
