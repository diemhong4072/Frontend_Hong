import React from 'react';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Center from './Components/HomepageContent/Center/Center'
import Right from './Components/HomepageContent/Right/Right'
import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <div className='content'>
        <Sidebar />
        <h5 className='follow-title'>Followings</h5>
        <div className="center-container">
          <Center followTag="#react"/>
          <Center followTag="#javascript"/>
        </div>
        <Right />
      </div>
    </div>
    
  );
}
 
export default App;