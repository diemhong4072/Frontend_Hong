import React, { Component } from "react";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";
class Sidebar extends Component {
    render(){
       return(
           <div className="sidebar">
               <div className="sidebarButtonContainer">
                <SidebarButton idSidebarButton="btn-1" sidebarIcon="ti-home" content="Homepage"/>
                <SidebarButton idSidebarButton="btn-2" sidebarIcon="ti-receipt" content="Certificates"/>
                <SidebarButton idSidebarButton="btn-3" sidebarIcon="ti-comment" content="Messages"/>
                <SidebarButton idSidebarButton="btn-4" sidebarIcon="ti-user" content="My profile"/>
                <SidebarButton idSidebarButton="logout-button" sidebarIcon="ti-back-right" content="Logout"/>
               </div>
           </div>

       );

    }
}
export default Sidebar;