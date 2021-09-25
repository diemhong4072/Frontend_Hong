
import "./Input.css";

function Input(props){
    return (
        <div className="input">
            <div className="input-icon">
                <i className={props.inputIcon}/>
            </div>
            <input type={props.type} name={props.name} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input;