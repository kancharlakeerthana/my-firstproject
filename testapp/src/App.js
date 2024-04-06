import logo from './logo.svg';
import React from'react';
import './App.css';
import Navbar from'react-bootstrap/Navbar';
import reportWebVitalsfrom './reportWebVitals';



function Navbar() {
  return (
    <div>
<Navbar className="p-3" style={{background:"lightgray"}}>
<navbar.Brand style={{color:"red"}}>ABC</navbar.Brand>
<navbar.Brand style={{color:"green"}}>PQR</navbar.Brand>
<navbar.Brand style={{color:"blue"}}>DEF</navbar.Brand>
</navbar>
</div>                           

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<myNavbar />
);
export default Navbar;
