import React, { Component } from "react";
import logo from "./logo.png";
import "./Header.css";
import ButtonNavbar from "./ButtonNavbar";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <div className="title">
              I know, You know
            </div>
            
        </div>
        <ButtonNavbar icon="ti-credit-card" classBtnNavbar='buttonNavbar1' functionName="POST"/>
        <ButtonNavbar icon="ti-help" classBtnNavbar='buttonNavbar2' functionName="QUESTION"/>
        <ButtonNavbar icon="ti-headphone" classBtnNavbar='buttonNavbar3' functionName="FIND BUDDY"/>
        <ButtonNavbar icon="ti-book" classBtnNavbar='buttonNavbar4' functionName="FIND MENTOR"/>
      </div>
    );
  }
}
export default Header;