import './App.css'

import {useState, useEffect} from 'react';

import Options from './ParticulesOptions1';
import Particles from 'react-particles-js';


import Welcome from './componnents/Welcome'
import Home from './componnents/Home'

function App() {


  let [load, setLoad] = useState(false)
  let [finish, setFinish] = useState(true)

  useEffect(()=>
  {
    setTimeout(()=>{
      setLoad(true)

    }, 200)
    setTimeout(()=>{
      setFinish(false)

    }, 5500)
  })

  return (
    <div className="App">
      <header className="App-header">


        {load &&  <Home/>}
        {(load && finish) &&  <Welcome/>}
        {load &&  <Particles params={Options} canvasClassName="particule"/>}

      </header>
    </div>
  );
}

export default App;
