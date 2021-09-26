
import "./Signup.css";
import Input from "./Input";
import KnowX_logo from "./KnowX_logo.png";
import signup from "./signup.png"
function Signup(props) {
    return (
        <div className="signup">
            
            <div className="signup-left">
                <img src={KnowX_logo} alt="logo"></img>
                <form>
                    <Input type="text" inputIcon="ti-email" name="first_name" placeholder="First name"/>
                    <Input type="text" inputIcon="ti-email" name="last_name" placeholder="Last name"/>
                    <Input type="number" inputIcon="ti-email" name="phone" placeholder="Phonenumber"/>
                    <Input type="email" inputIcon="ti-email" name="email" placeholder="Your email"/>
                    <Input type="password" inputIcon="ti-lock" name="password" placeholder="Password"/>
                    <button className="signup-button" type="submit">Sign up</button>
                </form>
            </div>
            <div className="signup-right">
                
            </div>
        </div>
    )
}

export default Signup;


