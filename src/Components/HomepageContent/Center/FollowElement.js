function FollowElement(props){
    return (
        <div className="followElement">
            <img src="./react.png" alt=""/>
            <a href="#">{props.postTitle}</a>
            <p className="followElement-time">{props.postTime}</p>
        </div>
    )
}

export default FollowElement;