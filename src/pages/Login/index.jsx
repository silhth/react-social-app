import { useEffect, useReducer } from "react";
import styles from "./Login.module.scss";

const init_state = {
  userName: '',
  password: ''
}

const reducer = (userData, action) => {
  switch(action.type) {
    case 'userName': 
      return { ...userData, userName: action.payload};
    
    case 'password':
      return { ...userData, password: action.payload};
    
    default:
      return userData
  }

}

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'userName', payload: userData.userName })
    dispatch({type:'password', payload: userData.password })
  };

  const [userData, dispatch]= useReducer (reducer, init_state)
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log(userData);
  }, [userData]);


  return (
    <form className={styles.Login}>
      <input
        value={userData.userName}
        onChange={(e) => dispatch({type:'userName', payload: e.target.value})}
        // onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Username"
        required
      />
      <input
        value={userData.password}
        onChange={(e) => dispatch({type:'password', payload: e.target.value})}
        // onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        required
      />
      <input onClick={handleSubmit} type="submit" value="Login" />
    </form>
  );
};

export default Login;
