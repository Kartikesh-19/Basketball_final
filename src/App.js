import React from 'react';
import Compose from './Components/Compose'
import { useState } from 'react';
import FirstQuarter from './Components/FirstQuarter';

function App() {

  const [form,setForm] =useState(0)
  const [data,setData] = useState({})
  const [Playerdata, setPlayerdata] = useState([])
  const style={
  };
  const style1={}

  return (
    <>
         <div className="App">
        <h1 style={{backgroundColor:"green", color:"white"}}>BasketBall Team Manager</h1>
          <navbar id ="navbar">
            <div className="d1">Compose</div>
            <div className="d1">First Quarter</div>
         </navbar>
      </div>  
      {form ===0 &&((style.background="rgb(69,69,226"), <Compose setForm={setForm} Playerdata={Playerdata} setPlayerdata={setPlayerdata} data={data} setData={setData}/>)}
      {form ===1 &&((style1.background="rgb(69,69,226"), <FirstQuarter setForm={setForm} Playerdata={Playerdata} setPlayerdata={setPlayerdata} data={data} setData={setData}/>)}
    </>   
    
  );
}

export default App;