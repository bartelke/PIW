import { logInWithGoogle, useAuth, logout, logInWithFacebook } from "../../firebase/UserService";
import "./Login.css"

const Login = () => {
    const user = useAuth();
    if(user)
    return(
        <div className="App">
            <h2>You are logged as {user.displayName}</h2>
            <button onClick={ logout }>Log out</button>
        </div>
    )
    return (
        <div className="App">
            <h2>Please log in</h2>
            <button onClick={logInWithGoogle}>Login with Google</button>
            <button onClick={logInWithFacebook}>Login with Facebook</button>
        </div>
        );
}

export default Login;