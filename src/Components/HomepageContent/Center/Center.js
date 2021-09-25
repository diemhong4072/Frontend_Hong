import React from 'react';
import './Center.css';
import FollowElement from './FollowElement';
function Center(props){
    return (
        <div className="center-container">
            <div className="center">
                <div className="follow-top">
                    <a href="#">{props.followTag}</a>
                    <div className="see-all">
                        <a href="">See all</a>
                        <i className="ti-angle-left"></i>
                        <i className="ti-angle-right"></i>
                    </div>
                </div>
                <div className="follow-block">
                    <FollowElement postTitle="Learn React" postTime="15 phút trước"/>
                    <FollowElement postTitle="Learn React" postTime="15 phút trước"/>
                </div>
                <div className="follow-block">
                    <FollowElement postTitle="Learn React" postTime="15 phút trước"/>
                    <FollowElement postTitle="Learn React" postTime="15 phút trước"/>
                </div>
            </div>
        </div>

    )
}

export default  Center;