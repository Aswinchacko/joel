import React from 'react';
import './app.css'
import Login from './nextPoints/LoginPage/Login';





function App() {

  
  return (
    <div>


      <div class="area">
        <ul class="circles">
          <div class="context">
            <img src="./HuesColor.svg" alt="log" className="logo" />
          </div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img  onClick={()=>{<Login></Login>}} src="propic.png" alt="propic" id="profilepic" />
        <Login></Login>
        
        
        
        

        
        

      </div>

    </div>

  );


}

export default App;
