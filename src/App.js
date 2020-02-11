import React from 'react';
import './App.css';

import ButtonAppBar from './pages/Navbar.js';
import CustomizedDialogs from './containers/booking';

function App() {
  return (
    <div>
     <div className='myNavbar'> 
        <ButtonAppBar />
     </div>
     <br/>
     <div>
       <CustomizedDialogs/>
     </div>
         
    </div>
  );
}

export default App;
