import React from "react";
import '../styles/App.module.css';

const Menu = ({ setLineColor, setLineWidth, 
  setLineOpacity }) => {
    return (
      <div className="Menu">
        <label>Couleur</label>
        <input
          type="color"
          onChange={(e) => {
            setLineColor(e.target.value);
          }}
        />
        <label>Epaisseur</label>
        <input
          type="range"
          min="3"
          max="100"
          onChange={(e) => {
            setLineWidth(e.target.value);
          }}
        />
        <label>Transparence</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) => {
            setLineOpacity(e.target.value / 100);
          }}
        />
      </div>
    );
  };
    
  export default Menu;