import "./sidebarButton.css"
function sidebarButton(props) {
        return (
            <div className="sidebarButton" id={props.idSidebarButton}>
                <i className={props.sidebarIcon}/>
                {props.content}
            </div>
        );
}
export default sidebarButton;
















