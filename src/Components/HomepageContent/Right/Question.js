import './Question.css';
function Question(props){
    return (
        <div className="questionBlock">
            <p className="questionContent">{props.questionContent}</p>
            <div className="icons">
                <i className="ti-angle-up"></i>    
                <i className="ti-angle-down"></i>
                <i className="ti-eye"></i>
                <i className="ti-comment-alt"></i>
            </div>
            <a href="#">{props.author}</a>
        </div>
    )
}

export default Question;