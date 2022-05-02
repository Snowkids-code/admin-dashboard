import { useContext, useState } from "react";
import "./Login.scss";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); //useNaviagte used to move to a different page

  //Call dispatch method
  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        dispatch({type: "LOGIN", payload: user})
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
