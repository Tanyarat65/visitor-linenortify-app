import React from 'react';
import axios from 'axios';
import LayoutComp from './components/LayoutComp';


function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  return (
    <>
      <LayoutComp/>
    </>
  );
}

export default App;
