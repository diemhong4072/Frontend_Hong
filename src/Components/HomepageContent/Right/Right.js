import React from 'react';
import './Right.css';
import Question from './Question';
function Right(){
    return (
        <div className="right">
            <div className='rightContent'>
                <h5>Recent Posts</h5>
                <Question author="Diem Hong" questionContent="Xin các bác tư vấn cách phỏng vấn đậu rikkei" />
                <Question author="Diem Hong" questionContent="Xin các bác tư vấn cách phỏng vấn đậu rikkei" />
                <Question author="Diem Hong" questionContent="Xin các bác tư vấn cách phỏng vấn đậu rikkei" />
                <Question author="Diem Hong" questionContent="Xin các bác tư vấn cách phỏng vấn đậu rikkei" />
            </div>
        </div>
    )
}

export default  Right;