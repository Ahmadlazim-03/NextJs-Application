const LoginPage = () => {
    return (
    <div>
        <div className="wrapper">
            <form action="#">
                <h2>Login</h2>
                    <div className="input-field">
                    <input type="text" required></input>
                    <label>Enter your email</label>
                </div>
                <div className="input-field">
                    <input type="password" required></input>
                    <label>Enter your password</label>
                </div>
                <div className="forget">
                    <label>
                    <input type="checkbox" id="remember"></input>
                    <p>Remember me</p>
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Log In</button>
                <div className="register">
                    <p>have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    </div>   
    )
}

export default LoginPage;